
import { Configure, configure } from './modules/configure';
import { Storage, storage } from './modules/storage';
import { Events, events } from './modules/events';
import { Cluster, cluster } from './modules/cluster';
import { Queue, queue } from './modules/queue';
import { assign } from './utils';

export interface Yggdrasil extends Storage, Configure, Cluster, Events, Queue {
}

const __global = (0, eval)('this');
export const YggdrasilObject = __global["YggdrasilObject"] || '/* @echo YggdrasilObject */';
export const YggdrasilObjectAlias = __global["YggdrasilObjectAlias"] || '/* @echo YggdrasilObjectAlias */';

export function seeding(wdw: Window = window): Yggdrasil {
  const ygg = wdw[YggdrasilObject] = wdw[YggdrasilObjectAlias] =
    wdw[YggdrasilObject] || wdw[YggdrasilObjectAlias] || {};
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
