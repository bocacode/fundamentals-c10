// ARROW FUNCTIONS
// An arrow function is just an alternative way to write a function.

// We write a regular function like:

function someFunction() {
  console.log("Hi")
}

// We can write this using big-arrow notation like this:

const someArrowFunction = () => {
  console.log("Hi")
}

// ANONYMOUS FUNCTIONS 
// when we plan to use a function over and over, we give it a name
// so we can call it again and again.
// BUT we often use a function JUST ONCE, so we don't need a name.

// old way: // THESE ARE NOT ALLOWED ON THEIR OWN LIKE THIS //
function() {
  console.log("Hi")
}

// new way:
() => {
  console.log("Hi")
}

const nameGoesHere = () => {
  console.log("Hi")
}


// Now, let's rewrite both of the above, but give each one a name.

// old function:
function nameGoesHere() {
  console.log("Hi")
}

// new (arrow) function:
const nameGoesHere = () => {
  console.log("Hi")
}

// old anonymous: // THESE ARE NOT ALLOWED ON THEIR OWN LIKE THIS //
function() {
  console.log("Hi")
}

// new anonymous:
() => {
  console.log("Hi")
}
