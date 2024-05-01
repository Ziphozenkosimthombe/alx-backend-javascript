/*
 ==> 1-stdin.js
 ==> will be executed by the command line
 ==> must first display the message followed by the new line
 ==> the users must enter their name on the new line
 ==> program should display the message your name is: followed by the name of the user
 ==> when the user ends the program, the program should display the message
*/

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userName = process.stdin.read();
    if (userName) {
      process.stdout.write(`Your name is: ${userName}`);
}
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
