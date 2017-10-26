import test from 'ava';
import { Yggdrasil, seeding } from '../../../main/typescript/yggdrasil';

test.cb('Ygg.q', (t) => {
  const Ygg = seeding();
  Ygg.q.push(() => {
    t.pass();
    t.end();
  });
});
