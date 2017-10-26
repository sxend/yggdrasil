import { Yggdrasil } from '../yggdrasil';

export interface Context {
  context(scope?: string): any;
}

export function context(ygg: Yggdrasil): void {
  const ctx: any = {
  };
  const impl: Context = {
    context(scope: string = "root") {
      return ctx;
    }
  }
  Object.assign(ygg, impl);
}
