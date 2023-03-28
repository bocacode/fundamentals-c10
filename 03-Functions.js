// III. Functions

// A function is a set of instructions (block of code) that can be called/invoked and reused.

// First, we define the function. Then we can invoke it when needed.

function sayHello() {
  console.log("Hello There.")
}

// Now, my function is "defined". But nothing is telling the computer to actually
// run the function.

// Now, to call or "invoke" the function, we use it's name with parentheses.

sayHello()

// You've seen this at performances, perhaps...

function iSayHey() { // If I say "Hey"
  console.log("Ho!") // You say "Ho"
}

iSayHey()
iSayHey()
iSayHey()

// Functions sometimes require a parameter (they need additional information to run).

function sayHelloToPerson(firstName) {
  console.log("Hello " + firstName)
}

// Now, when we invoke the function, we can pass in a firstName, like:

sayHelloToPerson("Meghann")
// When we invoke the function above with "Meghann", inside the function, firstName = "Meghann"
// The line above and the 2 lines below do the same
const firstName = "Meghann"
sayHelloToPerson(firstName)

sayHelloToPerson("Todd")
// This time we invoke it again with "Todd", so now firstName = "Todd" this time

// sometimes we use a variable...

const dogName = "Ryder"
sayHelloToPerson(dogName) // this is the same as: sayHelloToPerson("Ryder")


function cleanDish(dish) {
  console.log(dish + " is now clean")
}

cleanDish("mug")

const dirtyDish = "plate"
cleanDish(dirtyDish)


function doubleNumber(num) {
  console.log(2 * num)
}

doubleNumber(11)  // 22

let a = 21
doubleNumber(a) // 42

// Some functions take more than one parameter. We always separate the list with commas.

function addTwoNums(num1, num2) {
  console.log(num1 + num2)
}

addTwoNums(11, 15) // 26

// or...

const x = 11
const y = 15
addTwoNums(x, y) // 26


// ~~~~ PRACTICE ~~~~

// 1. Create a function that takes in a number as a parameter and prints the square of that number.

// 2. Create a function that takes in two numbers and prints which number is larger.

// 3. Write a function that converts weeks into hours. Return the result. Invoke the function.

function convertWeeksToHours(weeks) {
  const days = weeks * 7;
  const hours = days * 24;
  return hours;
}

console.log(convertWeeksToHours(5)); // 840

// OR

const totalHours = convertWeeksToHours(5); // 840
console.log(totalHours);
