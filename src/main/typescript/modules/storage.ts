import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Storage {
  storage(namespace?: string): any;
}

export function storage(ygg: Yggdrasil): void {
  const ctx: any = {};
  const impl: Storage = {
    storage(namespace: string = "root") {
      let spaces = namespace.split(".");
      let _storage = {};
      while (spaces.length > 0) {
        const scope = spaces.shift();
        _storage = ctx[scope] = ctx[scope] || {};
      }
      return _storage;
    }
  }
  assign(ygg, impl);
}
