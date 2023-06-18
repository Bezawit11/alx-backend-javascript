/**
 *takes input from user on console
 */

process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.on('data', data => {
  console.log(`You typed ${data}`);
  process.exit();
});
