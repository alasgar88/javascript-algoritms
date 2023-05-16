export const userValidation = (str) => {
  if (
    str.length >= 4 &&
    str.length <= 25 &&
    /[a-zA-Z]/.test(str.slice(0, 1)) &&
    /^[\w]+$/.test(str) &&
    !str.endsWith('_')
  ) {
    return true;
  }

  return false;
};

/* Rules
1. The username is between 4 and 25 characters
2. It must start with a letter
3. It can only contain letters,numbers, and the underscore character
4. It can not end with underscore character

If the username is valid your program should return the true

*/

// Reg Exp
// .charAt(0) .slice(0,1)  to get last element .slice(-1) .charAt(.length - 1)
// .test()

// const a = 'Alasgar';

// console.log(a.charAt(a.length - 1));
// console.log(a.slice(-1));
