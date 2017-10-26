import * as Nightmare from 'nightmare';
import test from 'ava';
import { TestSupport } from '../test-support';

test.beforeEach(async t => {
  const proxy = await TestSupport.createProxy();
  const { nightmare } = await TestSupport.createNightmareWithProxy(proxy);
  t.context.proxy = proxy;
  t.context.nightmare = nightmare;
});
test.afterEach(async t => {
  const result = await TestSupport.closeProxy(t.context.proxy);
})
test('load index.html', async (t) => {
  const counter = await t.context.nightmare
    .goto('file:// ' + process.cwd() + '/src/test/resources/index.html')
    .wait(() => {
      return !!window['counter'];
    })
    .evaluate(() => {
      return window['counter'];
    });
  t.is(counter, 1);
});
