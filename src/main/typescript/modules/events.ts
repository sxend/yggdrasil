import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Events {
  on(name: string, callback: Function): Yggdrasil;
  emit(name: string, message: any): Yggdrasil;
  newEmitter(): Events;
}

export function events(ygg: Yggdrasil): void {
  function newEmitter(): Events {
    return {
      on(name: string, callback: Function): Yggdrasil {
        return ygg;
      },
      emit(name: string, message: any): Yggdrasil {
        return ygg;
      },
      newEmitter
    };
  }
  const impl: Events = newEmitter();
  assign(ygg, impl);
}
