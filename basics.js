// 1. Assign the message "Hello, World!" to a variable.
var message = 'Hello, World!'
// 2. Assign a different string to a different variable.
var aDifferentVariable = 'a different string'
// 3. Assign a number to a variable.
var number = 37
// console.log("Message: " + message + ", Different variable: " + a_different_variable + ", Number: " + number)
// 4. Use string concatenation to display the number from #3 in a string.
console.log('The number is: ' + number)
// 5. Make an array of at least four of your favorite movies or books or bands.
var movies = ['Deadpool', 'Interstellar', 'Thor, the Dark World', 'Eurotrip']
// for(index in movies) {
//   console.log("Movie: " + movies[index] + " ")
// }
// 6. Make a object of information about yourself with at least four properties.
var alanK = {
  height: '6"',
  age: 30,
  dog: 'Finn',
  cat: 'Corky'
}
// console.log(alanK.height + ", " + alanK.age + ", " + alanK.dog + ", " + alanK.cat)

// Adventure Mode
// 7. Make an array of objects containing more information about your favorite movies. The objects should have at least three properties.
var movie1 = {
  star: "Ryan Reynolds",
  rating: "R",
  badGuy: "Ed Skrein"
}

var movie2 = {
  star: "Matthew McConaughey",
  rating: "PG-13",
  badGuy: "Matt Damon"
}

var movie3 = {
  star: "Chris Hemsworth",
  rating: "PG-13",
  badGuy: "Christopher Eccleston"
}

var movie4 = {
  star: "Scott Mechlowicz",
  rating: "R",
  badGuy: "Matt Damon"
}
var movieObjectArray = [movie1, movie2, movie3, movie4]
// 8. Use `for` to loop through the answer from exercise #7 and print only one property from the object. i.e., given `{ title: "Gone with the Wind" }` you print "Gone with the Wind".
function printBadGuys(element) {
  console.log(element.badGuy)
}
movieObjectArray.forEach (printBadGuys)

// EPIC MODE
function sum(number1, number2) {
  return number1 + number2
}

console.assert(sum(8, 11) === 19)
console.assert(sum(4, 100) === 104)

/*
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(arr) {
  var sum = 0
  arr.forEach (function(element){ sum += element })
  return sum
}

console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 * Hint: You can access the indivdual characters
 * of a string like an array: `str[0]`
 */

function reverse(str) {
  var reverseStr = ''
  strLength = str.length
  for (var i = 0; i < strLength; i++) {
    reverseStr += str.charAt(str.length - i - 1)
  }

  return reverseStr
}

console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")
console.log("passed reverseStr")

/*
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 * Hint: Strings have a function called: `split()`, look it up on MDN
 */

function findLongestWord(sentence) {
  var words = sentence.split(" ")
  var longestWord = ''
  for (index in words) {
    words[index] = words[index].replace("'", '')
    if (words[index].length > longestWord.length) {
      longestWord = words[index]
    }
  }

  return longestWord
}

console.assert(findLongestWord('book dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')
console.log("passed longestWord")

/*
 * --- ADVENTURE MODE ---
 */

/*
 * Write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

function GCD(a, b) {
  if (a === 0) {
    return b
  } else if (b === 0) {
    return a
  }

  for(var i = Math.min(a,b); ; i--) {
    if (a % i === 0 && b % i === 0) {
      return i
    }
  }
}

console.assert(GCD(5, 1) === 1)
console.assert(GCD(15, 3) === 3)
console.assert(GCD(15, 5) === 5)
console.assert(GCD(50, 20) === 10)
console.log('passed GCD')

/*
 * Write a function that prints out the Least Common Multiple of two numbers
 */

const LCM = (a, b) => {
  if (a === 0) {
    return b
  } else if (b === 0) {
    return a
  }

  return Math.abs(a * b) / GCD(a, b)
}

console.assert(LCM(10, 10) === 10)
console.assert(LCM(2, 5) === 10)
console.assert(LCM(3, 6) === 6)
console.assert(LCM(0, 1) === 1)
console.log('passed LCM')
