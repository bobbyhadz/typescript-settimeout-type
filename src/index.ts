export {};

const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
  console.log('success');
}, 1500);

console.log(timeout);

// ---------------------------------------------------

// EXAMPLE 2

// function sum(a: number, b: number) {
//   return a + b;
// }

// // 👇️ type T = number
// type T = ReturnType<typeof sum>;

// ---------------------------------------------------

// EXAMPLE 3 - using clearTimeout

// const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
//   console.log('success');
// }, 1500);

// clearTimeout(timeout);
