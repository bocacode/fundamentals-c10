// The keyword "async" can be added to any function. This function will now
// automagically return a Promise.

// In other words, async turns a regular (synchronous) function into an
// asynchronous one.

async function multiplyTwoNumbers(a, b) {
  return a * b;
}

// const answer = multiplyTwoNumbers(10, 30) // 300
// console.log(answer)

// multiplyTwoNumbers(10, 30)
//   .then(answer => console.log(answer));

// Now, we use the keyword "await" (similar to .then() above) to wait
// for the answer (for the Promise to resolve).

const answer = await multiplyTwoNumbers(10, 30)
console.log(answer)

// IN A FUNCTION... We HAVE to be in an async function in order to use
// await.

async function testStuffOut() {
  const answer = await multiplyTwoNumbers(10, 30)
  console.log(answer)
}

testStuffOut()
