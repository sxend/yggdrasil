
import { Configure, configure } from './modules/configure';
import { Storage, storage } from './modules/storage';
import { Events, events } from './modules/events';
import { Cluster, cluster } from './modules/cluster';
import { Queue, queue } from './modules/queue';
import { assign } from './utils';

export interface Yggdrasil extends Storage, Configure, Cluster, Events, Queue {
}

export function seeding(): Yggdrasil {
  const __global = (0, eval)('this');
  const YggdrasilObject = __global["YggdrasilObject"] || '/* @echo YggdrasilObject */';
  const YggdrasilObjectAlias = __global["YggdrasilObjectAlias"] || '/* @echo YggdrasilObjectAlias */';
  const ygg = __global[YggdrasilObject] = __global[YggdrasilObjectAlias] =
    __global[YggdrasilObject] || __global[YggdrasilObjectAlias] || {};
  if (ygg.__isSeeded) {
    return <Yggdrasil>ygg;
  }
  modules(ygg);
  ygg.__isSeeded = true;
  return <Yggdrasil>ygg;
}

function modules(ygg: Yggdrasil): void {
  storage(ygg);
  configure(ygg);
  events(ygg);
  cluster(ygg);
  queue(ygg);
}
