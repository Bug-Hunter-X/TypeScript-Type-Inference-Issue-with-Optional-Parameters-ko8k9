function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

// Solution: Provide a default value for the optional parameter
function calculate(a: number, b: number = 0): number {
  return b === 0 ? a * 2 : a + b;
}

const result3 = calculate(5); // Correct: result3 is 10
const result4 = calculate(5, 3); // Correct: result4 is 8

//Alternative solution: using type assertion (less preferred)
//function calculate(a: number, b?: number): number {
//  if (b === undefined) {
//    return a * 2;
//  } else {
//    return a + b;
//  }
//}

//const result3 = calculate(5) as number; //Type Assertion used here
//const result4 = calculate(5, 3); 