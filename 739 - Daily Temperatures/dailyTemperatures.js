const dailyTemperatures = (temperatures) => {
    const result = Array(temperatures.length).fill(0);
    const stack = []; // Stores indices of temperatures in decreasing order

    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
        const index = stack.pop();
        result[index] = i - index;
      }
      stack.push(i);
    }

    return result;
  }

  export default dailyTemperatures;