/*415. Add Strings
Q3: Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134" */

const addStrings = (num1, num2) => {
    let sum = ""; // Variable to store the result sum
    let carry = 0; // Carry value for addition
    let i, j; // Indices for traversing num1 and num2
    
    // Iterate through num1 and num2 from right to left, or until carry is 0
    for ( i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry !== 0;
      i--, j--
    ) {
    
      const digit1 = i >= 0 ? parseInt(num1[i]) : 0;
      const digit2 = j >= 0 ? parseInt(num2[j]) : 0;
      
      // Calculate the sum of the digits and the carry value
      const currentSum = digit1 + digit2 + carry;
      const digitSum = currentSum % 10; // Sum of the current digit
      carry = Math.floor(currentSum / 10); // Calculate the new carry
     
      sum = digitSum.toString() + sum;
    }
    
    return sum; // Return the final sum as a string
  };
  
  const num1 = "11";
  const num2 = "123";
  const str = addStrings(num1,num2);
  console.log(str);// Output: "134"


