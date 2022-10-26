var isBalanced = function(root) {
  let maxSeenSoFar = 0;
  let result = true;

  function maxDepth(root) {
      if (root === null) return 0;
      let maxDepthLeft = maxDepth(root.left);
      let maxDepthRight = maxDepth(root.right);
      if (Math.abs(maxDepthLeft - maxDepthRight) > 1) {
          console.log(Math.abs(maxDepthLeft - maxDepthRight))
          result = false;
      }

      return 1 + Math.max(maxDepthLeft, maxDepthRight);
  }
  maxDepth(root);
  return result;
};

module.exports = isBalanced;