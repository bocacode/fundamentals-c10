// V. Objects

// Like other variables, objects are used to store data. THERE IS NO ORDER.

// Instead of having multiple variables to represent a single entity, we can store
// key-value pairs in an object, collected in curly braces like so:

const person = {
  firstName: "Jiho",
  lastName: "Sohn",
  age: 46,
  ethnicity: "Korean",
  awesome: true,
}

// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age
// const ethnicity = person.ethnicity
// const awesome = person.awesome

const { firstName, lastName, age, ethnicity, awesome } = person // destructuring


// We refer to each key-value pair as a property. For example, the person above has a
// firstName property that is equal to "Jiho".

// We can reference each property with bracket notation, like we do an array, or with
// dot notation. Dot notation is the most common, but occasionally, we need to use brackets.

console.log(person.firstName) // dot notation (most common)

console.log(person["lastName"]) // bracket notation (used rarely)

// We can add a new property to an object using either notation:

person.hair = "black"

// we can CHANGE a property the same way:

person.lastName = "SOHN"

console.log(person)
