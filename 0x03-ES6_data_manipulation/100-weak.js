export const weakMap = new WeakMap();
let callCount = 1;
export function queryAPI(endpoint) {
  if (callCount >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, callCount);
  callCount += 1;
}
