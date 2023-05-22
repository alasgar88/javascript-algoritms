// export const abCheck = (str) => {
//   const arr = str.toLowerCase().split('');

//   let control = [];

//   arr.forEach((element) => {
//     if (char === 'a' && arr[indexOf(char) + 4] === 'b') {
//       control.push(true);
//     }
//     return false;
//   });

//   return control.includes(true) ? true : false;
// };

/*
AB Check

Using the Javascript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the character a and b are separated by exactly 3 places anywhere in the string at least one

(i.e "lane borrowed" would result in true because there is exactly three characters between a and b)
Otherwise return the string false

*/

//  short solution

export const abCheck = (str) => {
  return str.search('a...b') > -1 ? true : false;
};
