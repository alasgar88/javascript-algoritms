export const exOh = (str) => {
  let x = 0;
  let o = 0;

  [...str].forEach((symbol) => {
    symbol === 'x' ? (x += 1) : (o += 1);
  });

  return x === o ? true : false;
};

/*
Ex Oh
Using the Javascript language, have the function ExOh(str) take the str parameter being passed and return the string if there is an equal number of x's and o's, otherwise return the string false

Only these two letters will be entered in the string, np punctuations or numbers.
For example: if str is 'xooxxxxoooxo' then the output should return false because there are 6 x's and 5 o's

*/
