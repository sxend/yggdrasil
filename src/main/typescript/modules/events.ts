import { Yggdrasil } from '../yggdrasil';

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
  Object.assign(ygg, impl);
}
