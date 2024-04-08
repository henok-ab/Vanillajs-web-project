function myTag(strings, ...values) {
    console.log(strings); // Array of string literals
    console.log(values); // Array of values
  }
  
  const name = 'John';
  const age = 30;
  myTag`Name: ${name}, Age: ${age}`; // Output: ["Name: ", ", Age: ", ""] [John, 30]
