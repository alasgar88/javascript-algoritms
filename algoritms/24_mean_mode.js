export const meanMode = (arr) => {
  const mean = calculateMean(arr);

  let mode = calculateMode(arr);
  return mode === mean ? 1 : 0;
};

const calculateMean = (arr) => {
  let sum = arr.reduce((accum, cur) => {
    return (accum += cur);
  }, 0);
  let mean = sum / arr.length;

  return mean;
};

const calculateMode = (arr) => {
  let freq = {};
  arr.forEach((number) => {
    if (number in freq) {
      freq[number] += 1;
    } else {
      freq[number] = 1;
    }
  });

  let maxValue = Math.max(...Object.values(freq));

  for (let findValue in freq) {
    if (freq[findValue] === maxValue) {
      return maxValue;
    }
  }
};

/*
MeanMode

Have the function MeanMode(arr) take the array of number stored in arr and return the mode equals the mean,0 if they don't equal each other (ie. [5,3,3,3,1]) should return  1 because the mode (3) equals the mean(3). The array will not be empty ,will only contain positive integers , and will not contain more than one mode.

mode is the number which is repeated most in arr

*/
