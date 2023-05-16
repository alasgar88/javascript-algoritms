export const questionMark = (str) => {
  const myArray = str.replace(/[a-zA-Z]/g, '').split('');
  console.log(myArray, ',myArray');
  let count = 0;
  let number = null;
  let resultArray = [];
  let pair = false;

  myArray.forEach((item) => {
    // first stage
    if (item === '?') {
      count += 1;
    } else if (number === null) {
      count = 0;
      number = Number(item);
    } else {
      count = 0;
      pair = !pair;

      let newItem = Number(item);
      if (pair) {
        number + newItem >= 10 && count === 3
          ? resultArray.push(true)
          : resultArray.push(false);
      }
      number = newItem;
    }
  });

  return resultArray.every((item) => item === true);
};

/* 

Have the function QuestiosMarks (str) take the str string parameter, which will contain single digit numbers,letters and question marks,and check if there are exactly 3 question mars between every pair of the numbers that add up to 10. if so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then  your program should return false as well

For example: if str is "arrb6???4xxxbl5???eee5" the your program should return true because there are exactly 3 questions marks between 6 and 4 ,and 3 questions marks between 5 and 5 at the end of the string
*/

/*

"aa6?9"
"acc?7??sss?3ee1??????5"
"arrb6???4ccbl5???eee5"

*/
