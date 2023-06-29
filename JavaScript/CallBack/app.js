// // // // /*Filter*/

// // // // const numbers = [
// // // //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// // // // ];

// // // // numbers.filter((n) => {
// // // //   return n < 10;
// // // // });

// // // // const movies = [
// // // //   {
// // // //     title: "Amadeus",
// // // //     score: 99,
// // // //   },
// // // //   {
// // // //     title: "Stand by me",
// // // //     score: 85,
// // // //   },
// // // //   {
// // // //     title: "Parasite",
// // // //     score: 95,
// // // //   },
// // // //   {
// // // //     title: "Alien",
// // // //     score: 90,
// // // //   },
// // // // ];

// // // // // const goodMovies = movies.filter((movie) => {
// // // // //   return movie.score >= 90;
// // // // // });

// // // // const goodMovies = movies.filter((m) => m.score >= 90);
// // // // const badMovies = movies.filter((m) => m.score < 70);

// // // /* Some, Every */

// // // const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// // // exams.every((score) => score >= 75);

// // // exams.some((score) => score >= 90);

// // /* Reduce */

// // const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// // // let total = 0;
// // // for (let price of prices) {
// // //   total += price;
// // // }
// // // console.log(total);

// // // const total = prices.reduce((total, price) => {
// // //   return total + price;
// // // });

// // const total = prices.reduce((total, price) => total + price);

// // const min = prices.reduce((min, price) => {
// //   if (price < min) {
// //     return price;
// //   }
// //   return min;
// // });

// // const max = prices.reduce((max, price) => {
// //   if (price > max) {
// //     return price;
// //   }
// //   return max;
// // });

// // const evens = [2, 4, 6, 8];
// // evens.reduce((sum, num) => {
// //   return sum + num, 100;
// // });

// /* Arrow */

// const person = {
//   fistName: "Viggo",
//   lastName: "Mortensen",
//   fullName: function () {
//     return `${this.fistName} ${this.lastName}`;
//   },
//   shoutName: function () {
//     setTimeout(() => {
//       console.log(this.fullName());
//     }, 3000);
//   },
// };
