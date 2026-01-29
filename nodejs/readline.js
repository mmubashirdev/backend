import readline from "readline";
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("What is your name? ", (name) => {
  console.log("Aslam U Alaikum ", name);
  rl.question("How old are you?", (age) => {
    console.log("In 2030 your age will be: ", parseInt(age) + 5);
    rl.close();
  });
});

rl.on("close", () => {
  console.log("Goodbye!");
  process.exit(0);
});
