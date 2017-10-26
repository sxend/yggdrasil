import * as getPort from 'get-port';
import * as hoxy from 'hoxy';
import * as Nightmare from 'nightmare';

export namespace TestSupport {
  export async function createProxy(options: any = {}) {
    const port = await getPort();
    return new Promise<any>((resolve, reject) => {
      const proxy = hoxy.createServer(options).listen(port, "localhost", (err) => {
        if (err) {
          return reject(err);
        }
        resolve(proxy);
      });
    });
  }
  export async function closeProxy(proxy: any) {
    return new Promise((resolve, reject) => {
      proxy.close((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  }
  export async function createNightmare(options: any = {}) {
    const nightmare = Nightmare(Object.assign({}, {
      show: false,
      width: 360,
      height: 640
    }, options))
      .on('console', (log, msg) => {
        console.log(msg);
      });
    return { nightmare };
  }
  export async function createNightmareWithProxy(proxy: hoxy.Proxy, options: any = {}) {
    const nightmare = (await TestSupport.createNightmare(Object.assign({}, {
      switches: {
        'proxy-server': 'localhost:' + proxy.address().port,
        'ignore-certificate-errors': true,
      }
    }, options))).nightmare;
    return { nightmare };
  }
}
