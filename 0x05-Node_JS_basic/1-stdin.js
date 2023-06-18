/**
 *takes input from user on console
 */

process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('readinput', () => {
  const chunk = process.stdin.read();
    if (chunk) {
   process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing');
});
