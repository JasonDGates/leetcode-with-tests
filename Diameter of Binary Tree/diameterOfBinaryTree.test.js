var diameterOfBinaryTree = function(root) {
  let maxSeenSoFar = 0;

  function maxDepth(root) {
      if (root === null) return 0;
      let maxDepthLeft = maxDepth(root.left);
      let maxDepthRight = maxDepth(root.right);
      if (maxDepthLeft + maxDepthRight > maxSeenSoFar) {
          maxSeenSoFar = maxDepthLeft + maxDepthRight;
      }
      return 1 + Math.max(maxDepthLeft, maxDepthRight);
  }

  maxDepth(root);

  return maxSeenSoFar;
};

module.exports = diameterOfBinaryTree;