export const timeConvert = (totalMinutes) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);
  return `${hours}:${minutes}`;
};

/*
2 - hours and minutes the parameter
3 - should be 1:3).Separate the number

Using then Javascript,have the function TimeConverter(num) take the sum 
parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 the output should be 1:3).Separate the number of hours and minutes with a colon

*/
