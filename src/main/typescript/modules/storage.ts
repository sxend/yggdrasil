import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Storage {
  storage(namespace?: string): any;
}

export function storage(ygg: Yggdrasil): void {
  const memory: any = {};
  const impl: Storage = {
    storage(namespace: string = "root") {
      const spaces = namespace.split(".");
      let _storage = {};
      while (spaces.length > 0) {
        const scope = spaces.shift();
        _storage = memory[scope] = memory[scope] || {};
      }
      return _storage;
    }
  }
  assign(ygg, impl);
}
