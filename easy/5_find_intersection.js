export const findIntersection = (strArr) => {
  let intersection = [];
  // to remove blank spaces
  const set1 = strArr[0].replace(/\s/g, '').split(',');
  const set2 = strArr[1].replace(/\s/g, '').split(',');

  set2.forEach((item) => {
    if (set1.includes(item)) {
      intersection.push(item);
    }
  });

  return intersection.length > 0 ? intersection.toString() : false;
};

/*

Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:the first element will represent a list of comma-separated numbers in ascending order,the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occurs in  elements of the strArr in sorted order. If there is no intersection ,return the string false 
*/

// console.log(findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']));
