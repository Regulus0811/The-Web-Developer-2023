// const Password = prompt("Enter your password!");

// if (Password.length >= 6 && Password.indexOf(" ") === -1) {
//   console.log("Valid Password!");
// } else {
//   console.log("INCORRECT FORMAT PASSWORD!");
// }

// 0-5   free
// 5-10  $10
// 10-65 $20
// 65+   free

// const age = 90;

// if ((age >= 0 && age < 5) || age >= 65) {
//   console.log("FREE");
// } else if (age >= 5 && age < 10) {
//   console.log("$10");
// } else if (age >= 10 && age < 65) {
//   console.log("$20");
// } else {
//   console.log("Invalid Age!");
// }

// const FirstName = prompt("Enter your first name");
// if (!FirstName) {
//   const FirstName = prompt("Try again!");
// }

const age = 45;

if (!((age >= 0 && age < 5) || age >= 65)) {
  console.log("YOUR ARE NOT A BABY OR SENIOR!");
}
