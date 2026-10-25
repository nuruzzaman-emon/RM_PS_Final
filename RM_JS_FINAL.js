// 1 solveMeFirst
const solveMeFirst = (a, b) => {
  const result = a + b;
  return result;
};

// 2 Multiply
const Multiply = (a, b) => {
  const result = a * b;
  return result;
};

// 3 Even or Odd
const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even";
  }
  return "odd";
};

// 4 makeNegative
const makeNegative = (number) => {
  return -Math.abs(number);
};

// 5 opposite
const opposite = (number) => {
  return -number;
};

// 6 simpleArraySum
const simpleArraySum = (ar) => {
  let sum = 0;
  for (const num of ar) {
    sum = sum + num;
  }
  return sum;
};

// 7 sleepIn
const sleepIn = (weekday, vacation) => {
  if (!weekday || vacation) {
    return true;
  }

  return false;
};

// 8 monkeyTrouble
const monkeyTrouble = (asmile, bsmile) => {
  if ((asmile && bsmile) || (!asmile && !bsmile)) {
    return true;
  }

  return false;
};

// 9 sumDouble
const sumDouble = (a, b) => {
  if (a === b) {
    return a + b * 2;
  }
  return a + b;
};

// 10 diff21
const diff21 = (n) => {
  const diff = n - 21;
  const absDiff = Math.abs(diff);
  if (n > 21) {
    return absDiff * 2;
  }
  return absDiff;
};

//11. parrotTrouble
const parrotTrouble = (talking, hours) => {
  if (talking === true && (hours < 7 || hours > 20)) {
    return true;
  }
  return false;
};

// 12. makes10
const makes10 = (a, b) => {
  if (a === 10 || b === 10 || a + b === 10) {
    return true;
  }
  return false;
};

// 13. nearHundred
const nearHundred = (n) => {
  if ((n >= 91 && n <= 110) || (n >= 191 && n <= 210)) {
    return true;
  }
  return false;
};

//14. posNeg
const posNeg = (a, b, negetive) => {
  if (negetive) {
    if (a < 0 && b < 0) {
      return true;
    }
    return false;
  } else {
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
      return true;
    }
    return false;
  }
};

//15 notString
const notString = (str) => {
  if (!str.startsWith("not")) {
    return "not " + str;
  }
  return str;
};

//16 compareTriplets
const compareTriplets = (a, b) => {
  let pointsOfA = 0;
  let pointsOfB = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pointsOfA++;
    } else if (a[i] < b[i]) {
      pointsOfB++;
    }
  }
  return [pointsOfA, pointsOfB];
};

// 17  aVeryBigSum
const aVeryBigSum = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum = sum + element;
  }
  return sum;
};

// 18 gradingStudents
const staireCase = (n) => {
  for (let i = 1; i <= n; i++) {
    const spaces = " ".repeat(n - i);
    const hashes = "#".repeat(i);
    console.log(spaces + hashes, i);
  }
};

//19 gradingStudents
const gradingStudents = (arr) => {
  let newArr = [];
  arr.map((num) => {
    const nextMultiple = Math.ceil(num / 5) * 5;
    const difference = nextMultiple - num;
    num < 38
      ? newArr.push(num)
      : difference < 3
        ? newArr.push(nextMultiple)
        : newArr.push(num);
  });
  return newArr;
};

//20 timeConversion
const timeConversion = (s) => {
  const [hours, minutes, secPeriodd] = s.split(":");
  const second = secPeriodd.slice(0, 2);
  const period = secPeriodd.slice(2);
  const h = Number(hours);
  let newHours;

  if (period === "PM") {
    if (h === 12) {
      newHours = h;
    } else {
      newHours = 12 + h;
    }
    return `${String(newHours).padStart(2, 0)}:${minutes}:${second}`;
  } else if (period === "AM") {
    if (h === 12) {
      newHours = 0;
    } else {
      newHours = h;
    }
    return `${String(newHours).padStart(2, 0)}:${minutes}:${second}`;
  } else {
    return "Please provide correct time";
  }
};

//21 repeatStr
const repeatStr = (n, s) => {
  return s.repeat(n);
};

//22 solution
const solution = (s) => {
  const spiltedArr = s.split("");
  const revArr = spiltedArr.reverse();
  const revtext = revArr.join("");
  return revtext;
};

//23 positiveSum
const positiveSum = (arr) => {
  let sum = 0;
  for (const num of arr) {
    if (num > 0) {
      sum = sum + num;
    }
  }
  return sum;
};

// 24 summation
const summation = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
};

//25  booleanToString
const booleanToString = (b) => {
  return String(b);
};
