// const myMath = {
//     PI: 3.14159,
//     square(num) {
//       return num * num;
//     },
//     cube(num) {
//       return num ** 3;
//     },
// //   };

// const cat = {
//   name: "Blue Steele",
//   color: "grey",
//   breed: "scottish fold",
//   meow() {
//     console.log("this is: ", this);
//     console.log(`${this.name} says MEOWWW`);
//   },
// };

// const meow2 = cat.meow;

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};
