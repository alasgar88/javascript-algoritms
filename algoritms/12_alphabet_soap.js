export const alphabetSoup = (str) => {
  const arr = str.split('');
  const sortedArr = arr.sort();
  const newStr = sortedArr.join('');
  return newStr;
};

/*
Alphabet Soup


Have the function AlphabetSoup(str) the string parameter being passed and return the string with letters in alphabetical order (ie. hello becomes ehllo).

Assume numbers and punctuation symbols will not be included in the string

*/

// String.fromCharCode(char.charCodeAt() +

// export const alphabetSoup = (str) => {
//   const strArr = str.split('');
//   const codeConvertedArr = strArr
//     .map((symbol) => {
//       const symbolNumber = symbol.charCodeAt();
//       console.log(symbolNumber);
//       return symbolNumber;
//     })
//     .sort((a, b) => a - b);

//   const resultArr = codeConvertedArr.map((symbolCode) =>
//     String.fromCharCode(symbolCode)
//   );
//   return resultArr.join('');
// };
