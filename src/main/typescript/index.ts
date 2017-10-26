import { Yggdrasil, seeding } from './yggdrasil';

const YggdrasilObject = window["YggdrasilObject"] || '/* @echo YggdrasilObject */';
const YggdrasilObjectAlias = window["YggdrasilObject"] || '/* @echo YggdrasilObjectAlias */';

window[YggdrasilObject] = window[YggdrasilObjectAlias] =
  seeding(window[YggdrasilObject] || window[YggdrasilObjectAlias] || {});
