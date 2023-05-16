export const longestWord = (sen) => {
  const arr = sen.replace(/[^a-zA-Z ]/g, '').split(' ');
  // sort mutates original array
  arr.sort((a, b) => b.length - a.length);
  return arr[0];
};

/*

- return the largest word
- if there are two or more words with the same length, return the first word from the string with that length

- ignore punctuations and assume that function cant not get empty string as parameter

*/
