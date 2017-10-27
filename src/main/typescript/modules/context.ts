import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Context {
  context(scope?: string): any;
}

export function context(ygg: Yggdrasil): void {
  const ctx: any = {};
  const impl: Context = {
    context(namespace: string = "root") {
      let spaces = namespace.split(".");
      let _context = {};
      while (spaces.length > 0) {
        const scope = spaces.shift();
        _context = ctx[scope] = ctx[scope] || {};
      }
      return _context;
    }
  }
  assign(ygg, impl);
}
