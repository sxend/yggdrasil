import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Context {
  context(scope?: string): any;
}

export function context(ygg: Yggdrasil): void {
  const ctx: any = {};
  const impl: Context = {
    context(scope: string = "root") {
      return ctx[scope] = ctx[scope] || {};
    }
  }
  assign(ygg, impl);
}
