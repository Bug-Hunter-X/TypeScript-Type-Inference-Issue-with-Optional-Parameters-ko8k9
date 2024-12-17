function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // Correct: result1 is 8
const result2 = subtract(10, 5); // Correct: result2 is 5

// Uncommon Error: Type inference issue with optional parameters
function calculate(a: number, b?: number): number {
  if (b === undefined) {
    return a * 2; // Handle optional parameter
  } else {
    return a + b;
  }
}

const result3 = calculate(5); // Correct: result3 is 10
const result4 = calculate(5, 3); // Correct: result4 is 8

// The problem is that if you don't provide a default value for the optional parameter, the compiler has to do a lot more work to figure out the return type and can sometimes miss something.