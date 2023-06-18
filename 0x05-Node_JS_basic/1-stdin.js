/**
 *takes input from user on console
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const user_input = process.stdin.read();
  process.stdout.write(`Your name is: ${user_input}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
