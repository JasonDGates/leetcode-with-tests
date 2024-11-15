function evalRPN(tokens) {
    const stack = [];
  
    for (let token of tokens) {
      if (isOperator(token)) {
        const b = stack.pop();
        const a = stack.pop();
        const result = evaluate(a, b, token);
        stack.push(result);
      } else {
        stack.push(parseInt(token));
      }
    }
  
    return stack[0];
  }
  
  function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
  }
  
  function evaluate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return Math.trunc(a / b); // Use truncation to handle integer division
    }
  }
  