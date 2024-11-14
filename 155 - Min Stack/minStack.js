export class MinStack {
    constructor() {
      this.stack = [];       // Primary stack to store all values
      this.minStack = [];     // Stack to store the minimums
    }
  
    push(val) {
      this.stack.push(val);
      if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val); // Update the min stack
      }
    }
  
    pop() {
      if (this.stack.pop() === this.getMin()) {
        this.minStack.pop(); // Remove from min stack if it's the minimum
      }
    }
  
    top() {
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      return this.minStack[this.minStack.length - 1];
    }
  }
  