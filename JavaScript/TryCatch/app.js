// try {
//   hello.toUpperCase();
// } catch {
//   console.log("ERROR!!!!!!!!!");
// }

// console.log("AFTER");

function yell(msg) {
  try {
    console.log(msg.toUpperCase().repeat(3));
  } catch (e) {
    console.log("please pass a string nex time!");
  }
}
