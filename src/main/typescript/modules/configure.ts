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
      const storage = ygg.storage();
      assign(ygg.configuration(), configuration);
      return ygg;
    },
    configuration() {
      const storage = ygg.storage();
      return (storage['configuration'] = storage['configuration'] || __configuration);
    }
  }
  assign(ygg, impl);
}
