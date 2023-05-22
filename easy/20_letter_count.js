export const letterCount = (str) => {
  // remove all the characters except alphabetic
  const arr = str
    .replace(/[^a-zA-Z ]/g, '')
    .toLowerCase()
    .split(' ');

  let kelimeNes = [];

  for (let i = 0; i < arr.length; i++) {
    let obj = {};
    arr[i].split('').forEach((char) => {
      char in obj ? (obj[char] += 1) : (obj[char] = 1);
    });
    kelimeNes.push(obj);
  }

  let maxFrequencies = [];

  kelimeNes.forEach((nesne) => {
    maxFrequencies.push(Math.max(...Object.values(nesne)));
  });

  let maxValue = Math.max(...maxFrequencies);

  return maxValue < 2 ? -1 : arr[maxFrequencies.indexOf(maxValue)];
};

/*
Letter Count 
Have the function LetterCount(str) take the str parameter begin passed and return  the first word with the greatest number of repeated letters.

For example:"Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's

If there are no words with repeating letters return -1 

Words will be separated by spaces

*/

// export const letterCount = (str) => {
//   const sentenceArr = str.toLowerCase().split(' ');
//   let maxValueIndex = null;
//   let globalMaxValue = null;

//   sentenceArr.forEach((word, index) => {
//     let wordCounter = [];
//     const wordArr = word.split('');
//     wordArr.forEach((element) => {
//       const stringCount = wordArr.reduce(function (accum, curr) {
//         if (curr === element) {
//           return accum + 1;
//         }
//         return accum;
//       }, 0);
//       wordCounter.push(stringCount);
//     });
//     const maxValue = Math.max(...wordCounter);
//     if (maxValue > globalMaxValue) {
//       globalMaxValue = maxValue;
//       maxValueIndex = index;
//     }
//   });

//   return sentenceArr[maxValueIndex];
// };
