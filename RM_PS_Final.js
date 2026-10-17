
**Basics (01–06)**
- **01 solveMeFirst:** `a + b`.
- **02 multiply:** `a * b`.
- **03 evenOrOdd:** `number % 2 === 0` gives "Even", otherwise "Odd".
- **04 makeNegative:** `-Math.abs(number)` handles both positive and already-negative input (8 → -8, -3 → -3).
- **05 opposite:** `-number`.
- **06 simpleArraySum:** `reduce` adds all elements, starting from 0.

**Boolean logic (07–15)**
- **07 sleepIn:** `!weekday || vacation`.
- **08 monkeyTrouble:** trouble when both smile or neither does, which means the values are equal: `aSmile === bSmile`.
- **09 sumDouble:** if `a === b` return `2 * (a + b)`, else `a + b` (3, 3 → 12).
- **10 diff21:** if `n > 21` return `2 * (n - 21)`, else `21 - n` (25 → 8).
- **11 parrotTrouble:** `talking && (hour < 7 || hour > 20)`.
- **12 makes10:** `a === 10 || b === 10 || a + b === 10`.
- **13 nearHundred:** `Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10`.
- **14 posNeg:** if `negative` is true, both numbers must be below 0. Otherwise exactly one must be positive and the other negative.
- **15 notString:** add "not " unless the string is "not" or already starts with "not ". This avoids wrongly treating a word like "nothing" as already negated.

**Arrays and strings (16–25)**
- **16 compareTriplets:** loop through both arrays and give a point to whoever has the higher value at each position.
- **17 aVeryBigSum:** the same `reduce` as problem 06. JS numbers are exact up to about 9 quadrillion, so 3,000,000,006 is fine.
- **18 staircase:** row `i` is `(n-i)` spaces followed by `i` hashes, joined with `\n`.
- **19 gradingStudents:** grades below 38 stay the same. Otherwise find the next multiple of 5 and use it only if it is less than 3 above the grade.
- **20 timeConversion:** take the hour modulo 12 (so 12 becomes 0), add 12 for PM, and pad to two digits. This handles 12AM → 00 and 12PM → 12 correctly.
- **21 repeatStr:** `s.repeat(n)`.
- **22 Reversed Strings:** `split("")`, `reverse()`, then `join("")`.
- **23 positiveSum:** filter for values above 0 and sum them. An empty result gives 0.
- **24 summation:** the formula `n * (n + 1) / 2` avoids a loop (n = 8 → 36).
- **25 booleanToString:** `String(b)`.

const assert = require("assert");

// 01. Add the two numbers.
var solveMeFirst = (a, b) => a + b;

// 02. Multiply the two numbers.
var multiply = (a, b) => a * b;

// 03. A number is even when dividing by 2 leaves remainder 0.
var evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");

// 04. -Math.abs(n) gives a negative for both positive and negative input.
var makeNegative = (number) => -Math.abs(number);

// 05. Unary minus flips the sign.
var opposite = (number) => -number;

// 06. Add every element with reduce (start the total at 0).
var simpleArraySum = (ar) => ar.reduce((sum, x) => sum + x, 0);

// 07. You sleep in if it's not a weekday OR you're on vacation.
var sleepIn = (weekday, vacation) => !weekday || vacation;

// 08. Trouble when both smile or neither smiles, i.e. the values are equal.
var monkeyTrouble = (aSmile, bSmile) => aSmile === bSmile;

// 09. Double the sum if the numbers are equal.
var sumDouble = (a, b) => (a === b ? 2 * (a + b) : a + b);

// 10. Absolute difference from 21; doubled if n > 21.
var diff21 = (n) => (n > 21 ? 2 * (n - 21) : 21 - n);

// 11. Trouble if talking and the hour is before 7 or after 20.
var parrotTrouble = (talking, hour) => talking && (hour < 7 || hour > 20);

// 12. Either is 10, or the sum is 10.
var makes10 = (a, b) => a === 10 || b === 10 || a + b === 10;

// 13. Within 10 of 100 or of 200 (inclusive).
var nearHundred = (n) => Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;

// 14. If `negative`, both must be < 0; otherwise exactly one positive, one negative.
var posNeg = (a, b, negative) =>
  negative ? a < 0 && b < 0 : (a < 0 && b > 0) || (a > 0 && b < 0);

// 15. Prefix "not " unless the string already starts with the word "not".
var notString = (str) =>
  str === "not" || str.startsWith("not ") ? str : "not " + str;

// 16. Compare element by element; give a point to whoever is higher.
var compareTriplets = (a, b) => {
  let alice = 0, bob = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }
  return [alice, bob];
};

// 17. Same as simple sum; JS numbers are safe up to 2^53, so this is fine.
var aVeryBigSum = (ar) => ar.reduce((sum, x) => sum + x, 0);

// 18. Row i has (n-i) spaces then i hashes. Join rows with "\n".
var staircase = (n) => {
  const rows = [];
  for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
  return rows.join("\n");
};

// 19. Grades < 38 stay. Else round up to next multiple of 5 if gap < 3.
var gradingStudents = (grades) =>
  grades.map((g) => {
    if (g < 38) return g;
    const next = Math.ceil(g / 5) * 5;
    return next - g < 3 ? next : g;
  });

// 20. 12AM -> 00, 12PM -> 12, other PM hours get +12.
var timeConversion = (s) => {
  const period = s.slice(-2);
  let [h, m, sec] = s.slice(0, -2).split(":");
  h = parseInt(h, 10) % 12; // 12 becomes 0
  if (period === "PM") h += 12;
  return `${String(h).padStart(2, "0")}:${m}:${sec}`;
};

// 21. Built-in String.repeat.
var repeatStr = (n, s) => s.repeat(n);

// 22. Split into characters, reverse, join back.
var solution = (str) => str.split("").reverse().join("");

// 23. Keep only positives and add them; empty -> 0.
var positiveSum = (arr) => arr.filter((x) => x > 0).reduce((s, x) => s + x, 0);

// 24. Gauss formula n(n+1)/2.
var summation = (num) => (num * (num + 1)) / 2;

// 25. String(true) -> "true".
var booleanToString = (b) => String(b);

// ---------- Tests ----------
const tests = [
  ["01 solveMeFirst", () => solveMeFirst(2, 3), 5],
  ["02 multiply", () => multiply(4, 5), 20],
  ["03 evenOrOdd", () => evenOrOdd(7), "Odd"],
  ["04 makeNegative", () => makeNegative(8), -8],
  ["04b makeNegative(-3)", () => makeNegative(-3), -3],
  ["05 opposite", () => opposite(-7), 7],
  ["06 simpleArraySum", () => simpleArraySum([1, 2, 3, 4]), 10],
  ["07 sleepIn", () => sleepIn(true, false), false],
  ["08 monkeyTrouble", () => monkeyTrouble(true, true), true],
  ["09 sumDouble", () => sumDouble(3, 3), 12],
  ["10 diff21", () => diff21(25), 8],
  ["11 parrotTrouble", () => parrotTrouble(true, 6), true],
  ["12 makes10", () => makes10(4, 6), true],
  ["13 nearHundred", () => nearHundred(91), true],
  ["14 posNeg", () => posNeg(-1, 1, false), true],
  ["15 notString", () => notString("bad"), "not bad"],
  ["16 compareTriplets", () => compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]],
  ["17 aVeryBigSum", () => aVeryBigSum([1000000001, 1000000002, 1000000003]), 3000000006],
  ["18 staircase", () => staircase(4), "   #\n  ##\n ###\n####"],
  ["19 gradingStudents", () => gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]],
  ["20 timeConversion", () => timeConversion("07:05:45PM"), "19:05:45"],
  ["20b timeConversion 12AM", () => timeConversion("12:00:00AM"), "00:00:00"],
  ["21 repeatStr", () => repeatStr(3, "ha"), "hahaha"],
  ["22 reverse", () => solution("world"), "dlrow"],
  ["23 positiveSum", () => positiveSum([1, -4, 7, 12]), 20],
  ["24 summation", () => summation(8), 36],
  ["25 booleanToString", () => booleanToString(true), "true"],
];

let pass = 0;
for (const [name, fn, expected] of tests) {
  const got = fn();
  try {
    assert.deepStrictEqual(got, expected);
    pass++;
    console.log(`PASS  ${name} -> ${JSON.stringify(got)}`);
  } catch {
    console.log(`FAIL  ${name} -> got ${JSON.stringify(got)}, expected ${JSON.stringify(expected)}`);
  }
}
console.log(`\n${pass}/${tests.length} tests passed`);
