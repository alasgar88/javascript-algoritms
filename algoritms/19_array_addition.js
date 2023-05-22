export const arrayAddition = (arr) => {
  const maxValue = Math.max(...arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / 2 === maxValue ? true : false;
};

/* 
Array Addition 
Using the Javascript language,have the function ArrayAddition(arr) take the array of number stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array ,otherwise return the string false.

For example: if arr contains [4,6,23,10,1,3] the output should return false because 4 + 6 + 10 + 3 + 1 != 23 (24)

The array will not be empty ,will not contain all the same elements, and may contain negative numbers

*/

// export const arrayAddition = (arr) => {
//   const resultCompare = arr.sort((a, b) => b - a)[0];
//   const remainingArray = arr.slice(1);
//   const result = remainingArray.reduce((accumulator, currElement) => {
//     return (accumulator += currElement);
//   }, 0);

//   return result === resultCompare ? true : false;
// };

// export const arrayAddition = (arr) => {
//   const newArr = [...arr];
//   let sum = 0;
//   const maxValue = Math.max(...arr);
//   newArr.splice(arr.indexOf(maxValue), 1);

//   for (let i = 0; i < newArr.length; i++) {
//     sum += newArr[i];
//   }

//   return maxValue === sum ? true : false;
// };
