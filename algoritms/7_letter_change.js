// Harflarin Alfabeye Göre Değiştirilmesi
// keycode.info

export const letterChange = (str) => {
  let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
    if (char === 'z') {
      return 'A';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1).toLocaleUpperCase();
    }
  });
  return newStr;
};

/*

Using the Javascript, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm

1 - Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
2 - Then capitalize every vowel in this new string (a,e,i,o,u) and finally return this modified string

*/

// export const letterChange = (str) => {
//   let newStr = str.toLowerCase().split('');

//   newStr.forEach((item, index) => {
//     if (item !== ' ' && item !== 'z') {
//       const charCode = item.charCodeAt();
//       newStr[index] = String.fromCharCode(charCode + 1);
//     }
//   });
//   newStr = newStr.join('').replace(/z/g, 'a');
//   return newStr;
// };
