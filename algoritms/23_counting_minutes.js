export const countingMinutes = (time) => {
  const times = time.split('-');
  let time1 = {};
  let time2 = {};
  // time1
  time1.meridiem = times[0].slice(-2);
  time1.hours = parseInt(times[0].split(':')[0]);
  time1.minute = parseInt(times[0].slice(-4, -2));
  // time2
  time2.meridiem = times[1].slice(-2);
  time2.hours = parseInt(times[1].split(':')[0]);
  time2.minute = parseInt(times[1].slice(-4, -2));

  let minutes = 0;
  let result = 0;

  if (time1.meridiem === time2.meridiem) {
    minutes =
      time2.hours * 60 + time2.minute - (time1.hours * 60 + time1.minute);
    result = minutes > 0 ? minutes : 24 * 60 + minutes;
  } else {
    minutes =
      time2.hours * 60 + time2.minute - (time1.hours * 60 + time1.minute);
    result = 12 * 60 + minutes;
  }

  return result;
};

/*
Counting Minutes
Using the Javascript language, have the function CountingMinutes(str) take the str parameter begin passed which will be two times (each property formatted fullWith a colon and am or pm) separated by a hyphen and the total number of minutes between two times 

The time will be in a 12 hour clock format
For example:
if str is 9:00am-10:00am then the output should be 60

if str is 1:00pm-11:00am
the output should be 1320

A.M = Ante Meridion -> Ogleden Once
P.M = Post Meridian => Ogleden Sonra
*/
