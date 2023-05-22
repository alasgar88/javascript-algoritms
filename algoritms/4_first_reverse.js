// verilen stringi ters cevirmek

export const firstReverse = (string) => {
  let reverse = string.split('').reverse().join('');
  return reverse;
};
