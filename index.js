/**
 * The function cubeNumber takes a number as input and returns the cube of that number, or a message
 * asking for a number if the input is not a number.
 * @param number - The parameter "number" is the input value that the function takes in. It is expected
 * to be a number.
 * @returns The function will return the cube of the input number if it is a number. If the input is
 * not a number, it will return the string "Please enter a number."
 */
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a number.";
  } else {
    let result = number * number * number;
    return result;
  }
}

/**
 * The matchFinder function checks if string2 is present in string1 and returns true if it is,
 * otherwise it returns false.
 * @param string1 - The first string to check for a match.
 * @param string2 - The second string that you want to check if it is present in the first string.
 * @returns true if string2 is found within string1, and false otherwise.
 */
function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please enter a string type variable.";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

/**
 * The function takes an array of two numbers and returns them in ascending order, or "equal" if they
 * are the same.
 * @param arr - The parameter `arr` is an array that contains two numbers.
 * @returns either "Invalid Input" if either of the numbers in the array is less than 0, "please do not
 * enter more than two numbers." if the array length is greater than 2, or it is returning the two
 * numbers in sorted order enclosed in square brackets if they are not equal, or "equal" if the two
 * numbers are equal.
 */
function sortMaker(arr) {
  let firstLargestNumber = arr[0];
  let secondLargestNumber = arr[1];
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr.length > 2) {
    return "please do not enter more than two numbers.";
  } else {
    if (firstLargestNumber > secondLargestNumber) {
      return "[" + firstLargestNumber + "," + secondLargestNumber + "]";
    } else if (secondLargestNumber > firstLargestNumber) {
      return "[" + secondLargestNumber + "," + firstLargestNumber + "]";
    } else if (firstLargestNumber == secondLargestNumber) {
      return "equal";
    }
  }
}

/**
 * The function "findAddress" takes an object as input and returns a string that represents the address
 * by concatenating the values of the "street", "house", and "society" properties.
 * @param obj - The `obj` parameter is an object that contains the following properties:
 * @returns a string that represents an address. The address is formed by concatenating the values of
 * the `street`, `house`, and `society` properties of the `obj` object. If any of these properties are
 * undefined or null, the function will use "__" as a placeholder.
 */
function findAddress(obj) {
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  return street + "," + house + "," + society;
}

/**
 * The function `canPay` checks if the sum of values in an array is greater than or equal to a given
 * total.
 * @param changeArray - An array of numbers representing the change available.
 * @param totalDue - The total amount due for a purchase.
 * @returns The function canPay is returning either true or false, depending on whether the sum of the
 * elements in the changeArray is greater than or equal to the totalDue.
 */
function canPay(changeArray, totalDue) {
  if (changeArray == "") {
    return "This array is empty! Please provide an array.";
  } else {
    let sum = 0;
    for (const item of changeArray) {
      sum += item;
    }
    if (sum >= totalDue) {
      return true;
    } else {
      return false;
    }
  }
}

