// // // // let totalEggs = 0;
// // // // function collectEggs() {
// // // //   totalEggs = 6;
// // // // }

// // // let bird = "Scarlet Macaw";
// // // function birdWatch() {
// // //   let bird = "Great Blue Heron";
// // // }

// // // let radius = 8;

// // // if (radius > 0) {
// // //   const PI = 3.14159;
// // //   let msg = "HIII!";
// // // }

// // // console.log(radius);
// // // console.log(PI);

// // // for (let i = 0; i < 5; i++) {
// // //   var msg = "HOSHINO ICHIKA";
// // //   console.log(msg);
// // // }
// // // console.log(msg);

// // function no1Band() {
// //   const leoNeed = ["ICHIKA", "saki", "honami", "shiho"];
// //   function singSong() {
// //     for (let band of leoNeed) {
// //       console.log(`i love you, ${band.toUpperCase()}`);
// //     }
// //   }
// //   singSong();
// // }

// // function add(x, y) {
// //   return x + y;
// // }

// // const add = function (x, y) {
// //   return x + y;
// // };

// // function callTwice(func) {
// //   func();
// //   func();
// // }

// // function callTentime(f) {
// //   for (let i = 0; i < 10; i++) {
// //     f();
// //   }
// // }

// // function rollDie() {
// //   const roll = Math.floor(Math.random() * 6) + 1;
// //   console.log(roll);
// // }

// // callTentime(rollDie);

// function makeMysteryFunc() {
//   const rand = Math.random();
//   if (rand > 0.5) {
//     return function () {
//       console.log("CONGRATS, I AM A GOOD FUNCTION!");
//       console.log("YOU WIN A MILLION DOLLARS!");
//     };
//   } else {
//     return function () {
//       alert("YOU HAVE BEEN INFECTED BY A VIRUS!");
//       alert("STOP TRYING TO CLOSE THIS WINDOW!");
//     };
//   }
// }

// function makeBetweenFunc(min, max) {
//   return function (num) {
//     return num >= min && num <= max;
//   };
// }

// // const tesetRange = function (num) {
// //   return num >= 10 && num <= 200;
// // };

// // makeBetweenFunc(50,100) =>
