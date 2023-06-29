/* Default Params */

// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides) + 1;
// }

// function greet(person, msg = "hello there") {
//   console.log(`${msg}, ${person}!`);
// }

/* Spread */

// console.log("hello");

// console.log(..."hello");

// const cats = ["Blue", "Scout", "Rocket"];
// const dogs = ["Rusty", "Wyatt"];

// const allPets = [...cats, ...dogs];

// const feline = { legs: 4, family: "Felidae" };
// const canine = { isFurry: true, family: "Caninae" };

// const catDog = { ...feline, ...canine };

// const dataFromForm = {
//   email: "blueman@gmail.com",
//   password: "tobias123!",
//   username: "tfunke",
// };

// const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

/* Rest */

// function sum() {
//   return arguments.reduce((total, el) => total + el);
// }

// function sum(nums) {
//   return nums.reduce((total, el) => total + el);
// }

// function raceResult(gold, sliver, ...everyoneElse) {
//   console.log(`GOLD MEDAL GOES TO: ${gold}`);
//   console.log(`SILVER MEDAL GOES TO: ${sliver}`);
//   console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`);
// }

/* Destructuring */

// const user = {
//   email: "harvey@gmail.com",
//   password: "tobias123!",
//   firstName: "Harvey",
//   lastName: "Milk",
//   born: 1930,
//   died: 1987,
//   bio: "harvey Bernard milk was an American politician and the first openly",
//   city: "San Francisco",
//   state: "California",
// };

// const { email, firstName, lastName, bio } = user;
