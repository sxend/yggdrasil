import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Events {
  on(name: string, callback: Function): Yggdrasil;
  emit(name: string, message: any): Yggdrasil;
}

export function events(ygg: Yggdrasil): void {
  const impl: Events = {
    on(name: string, callback: Function): Yggdrasil {
      return ygg;
    },
    emit(name: string, message: any): Yggdrasil {
      return ygg;
    }
  }
  assign(ygg, impl);
}
