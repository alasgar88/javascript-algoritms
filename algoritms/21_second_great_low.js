export const secondGreatLow = (arr) => {
  // remove dublicate values
  let newArr = [];
  arr.forEach((number) => {
    !newArr.includes(number) && newArr.push(number);
  });

  // sort array from lower number to greatest
  newArr.sort((a, b) => a - b);

  if (newArr.length === 2) {
    return `${newArr[1]} ${newArr[0]}`;
  } else {
    return `${newArr[1]} ${newArr[newArr.length - 1]}`;
  }
};

/*
Second Great Low
Using the Javascript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest ans second greatest numbers,respectively,separated by a space

For example: if arr contains [7,7,12,98,106] the output should be 12,98

The array will not be empty and will not contain at least 2 numbers

It can get tricky if there's just two numbers

*/

// export const secondGreatLow = (arr) => {
//   const lowestValue = Math.min(...arr);
//   const greatesValue = Math.max(...arr);

//   let findLowest = null;
//   let findGreatest = null;

//   arr.forEach((number) => {
//     if (!findLowest && number > lowestValue) {
//       findLowest = number;
//     } else if (number > lowestValue && number < findLowest) {
//       findLowest = number;
//     } else if (!findGreatest && number < greatesValue) {
//       findGreatest = number;
//     } else if (number < greatesValue && number > findGreatest) {
//       findGreatest = number;
//     }
//   });
//   return `${findLowest} ${findGreatest}`;
// };
