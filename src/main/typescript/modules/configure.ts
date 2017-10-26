import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Configure {
  configure(configuration: any): Yggdrasil;
  configuration(): any;
}

export function configure(ygg: Yggdrasil): void {
  const __configuration: any = { // defauts
  };
  const impl: Configure = {
    configure(configuration: any = {}) {
      const context = ygg.context();
      assign(ygg.configuration(), configuration);
      return ygg;
    },
    configuration() {
      const context = ygg.context();
      return (context['configuration'] = context['configuration'] || __configuration);
    }
  }
  assign(ygg, impl);
}
