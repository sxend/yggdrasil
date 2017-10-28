import { Yggdrasil } from '../yggdrasil';
import { assign } from '../utils';

export interface Events {
  EventEmitter(): EventEmitter
}

export class EventEmitter {
  private callbacks = {};
  on(name: string, callback: Function): EventEmitter {
    (this.callbacks[name] = this.callbacks[name] || []).push(callback);
    return this;
  }
  once(name: string, callback: Function): EventEmitter {
    this.on(name, (message) => {
      try {
        callback(message);
      } catch (e) { }
      this.remove(name, callback);
    });
    return this;
  }
  emit(name: string, message: any): EventEmitter {
    (this.callbacks[name] = this.callbacks[name] || []).forEach(callback => callback(message));
    return this;
  }
  remove(name: string, callback: Function): EventEmitter {
    this.callbacks[name] =
      (this.callbacks[name] = this.callbacks[name] || []).filter(_callback => callback !== _callback);
    return this;
  }
  removeAll(name: string): EventEmitter {
    this.callbacks[name] = [];
    return this;
  }
}

export function events(ygg: Yggdrasil): void {
  const impl: Events = {
    EventEmitter() {
      return new EventEmitter()
    }
  };
  assign(ygg, impl);
}
