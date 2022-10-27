var validParentheses = function(s) {
  if (s.length % 2 !== 0) {
      return false;
  }

  var map = {
      ']': '[',
      '}': '{',
      ')': '('
  }
  var stack = [];

  for (let i = 0; i < s.length; i++) {
      let stackTop = stack[stack.length - 1];
      let currStr = s[i]
      if(stackTop === map[currStr] && map[currStr] !== undefined) {
          stack.pop();
      } else {
          stack.push(currStr)
      }
  }
  if (stack.length === 0) {
      return true;
  }
  return false;
};

module.exports = validParentheses;