// validateParentheses.js
export default function validParentheses(s) {
    const stack = [];
    const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
  
    for (const char of s) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char); // Push opening brackets to the stack
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
          return false; // Mismatch or unmatched closing bracket
        }
      }
    }
  
    return stack.length === 0; // True if no unmatched opening brackets remain
  }
  