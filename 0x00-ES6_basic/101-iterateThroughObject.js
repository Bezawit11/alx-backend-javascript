export default function iterateThroughObject(reportWithIterator) {
  let s = '';
  const arr = reportWithIterator.length;
  for (let index = 0; index < arr; index++) { // eslint-disable-line no-plusplus
    if (index === arr - 1) {
      s += ''.concat(reportWithIterator[index]);
    } else {
      s += ''.concat(reportWithIterator[index], ' | ');
    }
  }
  return s;
}
