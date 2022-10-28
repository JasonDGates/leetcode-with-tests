var isSubtree = function(root, subRoot) {
  if (!root && !subRoot) return true;
  if (subRoot === null) return true;
  // this helper checks that the two input trees are the same
  const isSameTree = function(tree1, tree2) {
      // !tree1 is the same as if (tree1 === any falsy value)
      if (!tree1 && !tree2) return true;
      if (!tree1 || !tree2 || tree1.val !== tree2.val) return false;
      return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
  };

  // this traverses the root tree, when it finds the matching value, it calls the isSameTree helper
  const dfs = function(root) {
      if (!root) return false;
      if (isSameTree(root, subRoot)) return true;
      return dfs(root.left) || dfs(root.right);
  }

  return dfs(root);
};

module.exports = isSubtree;