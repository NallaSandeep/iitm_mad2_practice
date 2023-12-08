const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Print numbers till n?", (count) => {
  for (let i = 1; i <= count; i++) {
    console.log(i);
  }
  readline.close();
});
