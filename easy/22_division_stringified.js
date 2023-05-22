export const divisionStringified = (n1, n2) => {
  return Math.floor(n1 / n2)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

/*
Division Stringified
Using the Javasript language
have the function divisionStringified(num1,num2) take the both parameters being passed , divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the  number no commas (ie. 2/3 should return output "1" )

For example 
if num1 is 3 and num2 is 1000 the output should be "12,345"

*/

// export const divisionStringified = (n1, n2) => {
//   let result = Math.floor(n1 / n2).toString();
//   console.log(result);
//   let arrayResult = result.split('');
//   let forMattedArray = [];
//   let lengthRemainder = result.length % 3;
//   console.log(lengthRemainder);
//   if (result > 999) {
//     arrayResult.forEach((element, index) => {
//       if (index === lengthRemainder && [1, 2].includes(lengthRemainder)) {
//         forMattedArray.push(',');
//         forMattedArray.push(element);
//       } else if (
//         (index + 1 - lengthRemainder) % 3 === 0 &&
//         index + 1 - lengthRemainder !== 0 &&
//         index !== 0 &&
//         index + 1 !== arrayResult.length
//       ) {
//         forMattedArray.push(element);
//         forMattedArray.push(',');
//       } else {
//         forMattedArray.push(element);
//       }
//     });
//     return forMattedArray.join('');
//   } else {
//     return result;
//   }
// };

// export const divisionStringified = (n1, n2) => {
//   const division = Math.floor(n1 / n2).toString();
//   if (division.length <= 4) return division;

//   let arr = [];
//   let j = 0;

//   const divisionArr = division.split('');
//   const backwordsArr = divisionArr.reverse();

//   for (let i = 0; i < backwordsArr.length; i++) {
//     if (i !== 0 && i % 3 === 0) {
//       arr.push(',');
//       arr.push(backwordsArr[i]);
//     } else {
//       arr.push(backwordsArr[i]);
//     }
//   }

//   return arr.reverse().join('');
// };
