import { Yggdrasil } from '../yggdrasil';

export interface Queue {
  q: Function[];
}
const defaults = {
  'consume-interval': 10,
  'consume-throughput': 100
};
export function queue(ygg: Yggdrasil): void {
  ygg.q = ygg.q || [];
  ygg.configure({
    queue: defaults
  });
  function consume() {
    let count = 0;
    while (ygg.q.length > 0 && count < getOrDefault(ygg, 'consume-throughput')) {
      try {
        ygg.q.shift().bind(ygg)(ygg);
      } catch (e) {
        console.error(e);
      }
      count++;
    }
    setTimeout(consume, getOrDefault(ygg, 'consume-interval'));
  }
  setTimeout(consume, getOrDefault(ygg, 'consume-interval'));
}

function getOrDefault(ygg: Yggdrasil, key: string): any {
  return ygg.configuration().queue[key] || defaults[key];
}
