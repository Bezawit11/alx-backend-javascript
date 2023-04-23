export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (const foo of theArgs) {
    total += 1;
  }
  return total;
}
