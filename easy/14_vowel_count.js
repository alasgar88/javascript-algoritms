export const vowelCount = (str) => {
  //   const arr = str.split('');
  let i = 0;
  const arr = [...str].forEach((letter) => {
    if (/[a/e/i/o/u/A/E/I/O/U]/.test(letter)) {
      i += 1;
    }
  });

  return i;
};

/*

Vowel Count
Using the Javascript language, have the function VowelCount(str) take the str string parameter being passed and return  the number of vowels the string contains 
(ie. "All cows eat grass would return 5")
Do not count y as a vowel for this challenge
*/

// export const vowelCount = (str) => {
//   let i = 0;
//   const vowelArr = ['a', 'e', 'i', 'o', 'u'];
//   [...str.toLowerCase()].forEach((letter) => {
//     if (vowelArr.includes(letter)) {
//       i += 1;
//     }
//   });

//   return i;
// };
