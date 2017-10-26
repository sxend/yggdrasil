import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Cluster {
  join(wdw: Window): Yggdrasil;
}

export function cluster(ygg: Yggdrasil): void {
  const impl: Cluster = {
    join(wdw: Window): Yggdrasil {
      return ygg;
    }
  }
  assign(ygg, impl);
}
