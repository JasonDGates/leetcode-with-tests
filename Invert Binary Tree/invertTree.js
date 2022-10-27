var invertTree = function(root) {
  if (root === null) return root;

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
};

module.exports = invertTree;