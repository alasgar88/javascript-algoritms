export const simpleSymbols = (str) => {
  const arr = str.split('');
  let controlArr = [];

  arr.forEach((element) => {
    if (/[a-zA-Z]/.test(element)) {
      if (
        arr[arr.indexOf(element) - 1] === '+' &&
        arr[arr.indexOf(element) + 1] === '+'
      ) {
        controlArr.push(1);
      } else {
        controlArr.push(0);
      }
    }
  });

  if (controlArr.includes(0)) {
    return false;
  } else {
    return true;
  }
};

/*
Simple Symbols

Using the Javascript language, have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false

The str parameter will be composed of  and = symbols with several letters between then (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol

So the string to the left would be false

The string will not be empty and will have at least one letter

*/

// export const simpleSymbols = (str) => {
//   const resultArr = [];
//   const newStr = str.replace(/\=/g, '').split('');
//   newStr.forEach((symbol, index) => {
//     if (symbol !== '+') {
//       const result = newStr[index - 1] === '+' && newStr[index + 1] === '+';
//       resultArr.push(result);
//     }
//   });

//   return resultArr.every((result) => result === true);
// };
