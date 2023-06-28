// 강의자료

// function sing() {
//   console.log("Do");
//   console.log("RE");
//   console.log("MI");
// }

// sing();

// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName[0]}${lastName[0]}${lastName[4]}!`);
// }

// greet("kim", "beomchang");

// function repeat(str, numTiems) {
//   let result = "";
//   for (let i = 0; i < numTiems; i++) {
//     result += str;
//   }
//   console.log(result);
// }

// function add(x, y) {
//   if (typeof x != "number" || typeof y != "number") {
//     return false;
//   } else {
//     return x + y;
//   }
// }

// DEFINE YOUR FUNCTION BELOW:

function returnDay(day) {
  if (day === 1) {
    return "Monday";
  } else if (day === 2) {
    return "Tuesday";
  } else if (day === 3) {
    return "Wednesday";
  } else if (day === 4) {
    return "Thursday";
  } else if (day === 5) {
    return "Friday";
  } else if (day === 6) {
    return "Saturday";
  } else if (day === 7) {
    return "Sunday";
  } else {
    return null;
  }
}

returnDay(1);
