

## 01. Solve Me First
**Understand:** Take two numbers and return their sum.
**Plan:**
1. Receive `a` and `b`.
2. Add them.
3. Return the result.

```javascript
var solveMeFirst = function(a, b) {
  return a + b;
};

console.log(solveMeFirst(2, 3)); // 5
```

---

## 02. Multiply
**Understand:** Return the product of two numbers.
**Plan:**
1. Receive `a` and `b`.
2. Multiply them with `*`.
3. Return the result.

```javascript
var multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20
```

---

## 03. Even or Odd
**Understand:** Return `"Even"` or `"Odd"`.
**Plan:**
1. An even number divides by 2 with no remainder, so check `number % 2`.
2. If the remainder is 0, return `"Even"`.
3. Otherwise return `"Odd"`.

```javascript
var evenOrOdd = function(number) {
  if (number % 2 === 0) {
    return "Even";
  }
  return "Odd";
};

console.log(evenOrOdd(7)); // "Odd"
console.log(evenOrOdd(4)); // "Even"
```

---

## 04. Return Negative
**Understand:** Positive numbers become negative, and negative numbers stay negative.
**Plan:**
1. Get the absolute value (always positive) with `Math.abs`.
2. Put a minus sign in front.

```javascript
var makeNegative = function(number) {
  return -Math.abs(number);
};

console.log(makeNegative(8));  // -8
console.log(makeNegative(-5)); // -5
```

---

## 05. Opposite Number
**Understand:** Flip the sign of the number.
**Plan:**
1. Put a minus sign in front of the number. Positive becomes negative, and negative becomes positive.

```javascript
var opposite = function(number) {
  return -number;
};

console.log(opposite(-7)); // 7
console.log(opposite(3));  // -3
```

---

## 06. Simple Array Sum
**Understand:** Add up all numbers in an array.
**Plan:**
1. Start a total at 0.
2. Go through each element and add it to the total.
3. Return the total.

```javascript
var simpleArraySum = function(ar) {
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
};

console.log(simpleArraySum([1, 2, 3, 4])); // 10
```

---

## 07. sleepIn
**Understand:** You can sleep in if it's not a weekday, or if you're on vacation.
**Plan:**
1. Condition 1: `!weekday`
2. Condition 2: `vacation`
3. Return true if either is true, using `||`.

```javascript
var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};

console.log(sleepIn(true, false));  // false
console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, true));   // true
```

---

## 08. monkeyTrouble
**Understand:** Trouble happens when both smile or both don't smile.
**Plan:**
1. Both smiling means `true, true`, and neither smiling means `false, false`.
2. In both cases the two values are equal, so compare them.

```javascript
var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};

console.log(monkeyTrouble(true, true));   // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false));  // false
```

---

## 09. sumDouble
**Understand:** Return the sum, but double it if the numbers are equal.
**Plan:**
1. Check whether `a === b`.
2. If equal, return `(a + b) * 2`.
3. Otherwise return `a + b`.

```javascript
var sumDouble = function(a, b) {
  if (a === b) {
    return (a + b) * 2;
  }
  return a + b;
};

console.log(sumDouble(3, 3)); // 12
console.log(sumDouble(1, 2)); // 3
```

---

## 10. diff21
**Understand:** Find the distance between `n` and 21. If `n` is greater than 21, double it.
**Plan:**
1. Calculate `Math.abs(n - 21)`.
2. If `n > 21`, return double that value.
3. Otherwise return it as is.

```javascript
var diff21 = function(n) {
  const diff = Math.abs(n - 21);
  if (n > 21) {
    return diff * 2;
  }
  return diff;
};

console.log(diff21(25)); // 8
console.log(diff21(19)); // 2
console.log(diff21(21)); // 0
```

---

