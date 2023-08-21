/**
 * Interactive script to print user's name
 *  - Prompts user to enter user name
 *  - Display entered user name
 *  - Notifies user when exiting
 */

const { stdout, stdin } = process;

stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.setEncoding('utf-8');
stdin.on('readable', () => {
  const name = stdin.read();
  stdout.write(`Your name is: ${name}`);
  process.exit();
});

process.on('exit', () => {
  stdout.write('This important software is now closing\n');
});
