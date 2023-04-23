export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    let b = arg;
    total += 1;
  }
  return total;
}
