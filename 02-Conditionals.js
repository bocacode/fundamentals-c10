// II. Conditionals

// Conditionals are just a way to do one thing under certain conditions
// and (optionally) something else otherwise.

// A. The simplest type of conditional statement is the "if" statement.

const grade = 87; // here we set a variable, grade, and set it to 87

if(grade >= 60) { // here we check if grade is 60 or more
  console.log("You passed!") // we write out "You passed!" to the screen
}

// if has the form if(condition) {  }

// B. Sometimes we want to handle the opposite condition, too...
// so we use else { }

if(grade >= 60) {
  console.log("You passed!") // if grade >= 60
} else {
  console.log("Please try again.") // if grade < 60
}

// with an if...else (like above), we will ALWAYS get inside ONE of the
// conditions, so it will EITHER say "You passed!" OR "Please try again."

// C. There is also an if... else if ... else, but we SELDOM use that.

if(grade >= 90) {
  console.log("A")
} else if (grade >= 80) {
  console.log("B")
} else if (grade >= 70) {
  console.log("C")
} else if (grade >= 60) {
  console.log("D")
} else {
  console.log("F")
}

// D. In the case where there are a lot of possible conditions, we can use
// a switch statement.

const flower = "tulip";

switch(flower) {
  case "rose":
    console.log("Roses cost 1.99 each")
    break
  case "tulip":
    console.log("Tulips cost 3.99 each")
    break
  case "daffodil":
    console.log("Daffodils cost 0.89 each")
    break
  case "daisy":
    console.log("Daisies cost 0.99 each")
    break
  default:
    console.log("Assorted flowers cost 1.49 each")
}

// E. The final conditional is the ternary, which is what I call an "acquired taste",
// meaning that most people don't like them right away, but you will learn to love them.

// A ternary is SHORTHAND for an if...else.

const age = 43;

// Instead of:
if(age >= 18) {
  console.log("Adult")
} else {
  console.log("Minor")
}
// We can write:

(age >= 18) ? console.log("Adult") : console.log("Minor")

// A ternary looks like (__) ? __ : __


// ~~~~ PRACTICE ~~~~

// 1. Create a immutable variable named didHomework and set it to true or false.

// 2. Check if didHomework is true, then print "You can play".

// 3. Create an immutable variable called age and give it a value.

// 4. Check if age is 55 or over and say "You qualify for AARP", otherwise say "You do NOT qualify."
