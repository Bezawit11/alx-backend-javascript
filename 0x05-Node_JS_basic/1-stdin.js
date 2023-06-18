/**
 *takes input from user on console
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('read_input', () => {
  const user_input = process.stdin.read();
  if (user_input) {
    process.stdout.write(`Your name is: ${user_input}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
