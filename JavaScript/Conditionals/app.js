// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
//   console.log(random);
// }

// if (random >= 0.5) {
//   console.log("YOUR NUMBER IS GREATER THAN 0.5!!!");
//   console.log(random);
// }

// // const dayOfWeek = prompt("Enter a Day").toLowerCase();

// // if (dayOfWeek === "monday") {
// //   console.log("UGHHH I HATE MONDAYS!");
// // } else if (dayOfWeek === "saturday") {
// //   console.log("YAY I LOVE SATURDAYS!");
// // } else if (dayOfWeek === "friday") {
// //   console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// // } else {
// //   console.log("MEH");
// // }

// const age = 3;

// if (age < 5) {
//   console.log("YOU ARE A BABY YOU GET IN FOR FREE!");
// } else if (age < 10) {
//   console.log("YOU ARE A CHILD YOU PAY 10$");
// } else if (age < 65) {
//   console.log("YOU ARE AN ADULT. YOU PAY $20");
// } else {
//   console.log("you are a senior. you pay 10$");
// }

const Password = prompt("please enter a new password");

// Password must be 6+ characters
if (Password.length >= 6) {
  if (Password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password cannot contain spaces!");
  }
} else {
  console.log("PASSWORD TOO SHORT! Must be 6+ characters!");
}
// Password cannot include space
