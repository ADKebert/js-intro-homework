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
