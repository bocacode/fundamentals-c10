// Destructuring is a way to create new variables from properties within an object
// OR elements within an array.

// Let's do an object example first as these are the most common.

const course = {
  title: 'Software Engineering Career Course',
  hours: 400,
  cost: 15900,
  startDate: 'Mar-20-2023',
  cohort: 'C10',
}

// One way to create a new variable from one of the properties is:

const courseTitle = course.title

// To use destructuring, we could write this:

const { title } = course

// The beauty of above is we can do many at once, like:

const { hours, cost, cohort } = course


// Now, let's destructure an array (which we do only on occasion).

const students = ['Aaron', 'Ilan', 'Brian', 'Jose']

console.log(students[1])

const [stud1, stud2, badAss, stud9] = students

console.log(stud2)
