import { Yggdrasil } from '../yggdrasil';

export interface Configure {
  configure(configuration: any): Yggdrasil;
  configuration(): any;
}

export function configure(ygg: Yggdrasil): void {
  const __configuration: any = { // defauts
  };
  const impl: Configure = {
    configure(configuration: any) {
      Object.assign(__configuration, configuration);
      return ygg;
    },
    configuration() {
      return __configuration;
    }
  }
  Object.assign(ygg, impl);
}
