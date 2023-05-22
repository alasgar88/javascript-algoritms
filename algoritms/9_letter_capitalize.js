export const letterCapitalize = (str) => {
  let newStr = [];
  str.split(' ').forEach((word) => {
    newStr.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return newStr.join(' ');
};

/*
Letter Capitalize
Using the JavasScript language,have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word

Words will be separated buy  only one space
*/
