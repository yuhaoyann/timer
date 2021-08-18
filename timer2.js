const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
  for (let i = 1; i < 9; i++) {
    if (key == i) {
      setTimeout(() => process.stdout.write('\x07'), i * 1000);
    }
  }
});

console.log('after callback');

// const argv = process.argv.slice(2)
// for (let i of argv) {
//   if (isNaN(i) === false) {
//     if (i >=0) {
//       setTimeout(() => process.stdout.write('\x07'), i * 1000)
//     }
//   }
// }