import { Yggdrasil } from '../yggdrasil';

export interface Cluster {
  join(wdw: Window): Yggdrasil;
}

export function cluster(ygg: Yggdrasil): void {
  const impl: Cluster = {
    join(wdw: Window): Yggdrasil {
      return ygg;
    }
  }
  Object.assign(ygg, impl);
}
