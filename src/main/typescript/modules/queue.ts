import { Yggdrasil } from '../yggdrasil';

export interface Queue {
  q: Function[];
}

export function queue(ygg: Yggdrasil): void {
  ygg.q = ygg.q || [];
  function consumeQueue() {
    while (ygg.q.length > 0) {
      try {
        ygg.q.shift().bind(ygg)(ygg);
      } catch (e) {
        console.error(e);
      }
    }
    setTimeout(consumeQueue, 10);
  }
  setTimeout(consumeQueue, 10);
}
