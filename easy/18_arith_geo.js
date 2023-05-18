export const arithGeo = (arr) => {
  let diff = arr[1] - arr[0];
  let radio = arr[1] / arr[0];
  let isArithmetic = true;
  let isGeometric = true;

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != diff) {
      isArithmetic = false;
    }

    if (arr[i] / arr[i - 1] != radio) {
      isGeometric = false;
    }
  }
  if (isArithmetic === true) {
    return 'Arithmetic';
  } else if (isGeometric === true) {
    return 'Geometric';
  } else {
    return -1;
  }
};

/*
Arith Geo

Using the Javascript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows and arithmetic pattern or return 'Geometric' if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence ,each term after the first is multiplied by some constant or common ratio

Arithmetic example: [2,4,6,8] and
Geometric example: [2,6,18,54]

Negative numbers may be entered as parameter , 0 will not be entered ,and no array will contain all the same elements

*/

// export const arithGeo = (arr) => {
//   const arithmetic = false;
//   const geometric = false;
//   const arithmeticDifference = [];
//   const geometricRadio = [];

//   function allSame(arr) {
//     return arr.every((item) => item === arr[0]);
//   }

//   arr.forEach((number, index) => {
//     if (index === 0) return;
//     arithmeticDifference.push(number - arr[index - 1]);
//     geometricRadio.push(number / arr[index - 1]);
//   });
//   return allSame(arithmeticDifference)
//     ? 'arithmetic'
//     : allSame(geometricRadio)
//     ? 'geometric'
//     : -1;
// };
