import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Cluster {
  join(wdw?: Window): Yggdrasil;
  pub(name: string, message: any): Yggdrasil;
  sub(name: string, callback: Function): Yggdrasil;
}

const defaults = {
  'heartbeat-interval': 100
};
export function cluster(ygg: Yggdrasil): void {
  ygg.configure({
    cluster: defaults
  });
  const impl: Cluster = {
    join(wdw: Window = window): Yggdrasil {
      const state = ygg.storage("cluster.state");
      const leaves = state['leaves'] = state['leaves'] || [];
      if (!leaves.includes(wdw)) {
        const id = leaves[leaves.push(wdw) - 1]
      } else {
      }
      return ygg;
    },
    pub(name: string, message: any): Yggdrasil {
      return ygg;
    },
    sub(name: string, callback: Function) {
      return ygg;
    }
  }
  heartbeat(ygg);
  assign(ygg, impl);
}
function heartbeat(ygg: Yggdrasil) {
  function heartbeater() {
    setTimeout(heartbeater, getOrDefault(ygg, 'heartbeat-interval'))
  }
  setTimeout(heartbeater, getOrDefault(ygg, 'heartbeat-interval'))
}
function getOrDefault(ygg: Yggdrasil, key: string): any {
  return ygg.configuration().cluster[key] || defaults[key];
}
