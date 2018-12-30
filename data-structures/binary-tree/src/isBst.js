function isBst(tree) {
  function _isBst(tree, max, min) {
    if (!tree) return true
    if (tree.value >= max) return false
    if (tree.value < min) return false
    return _isBst(tree.left, tree.value, min) &&
      _isBst(tree.right, max, tree.value)
  }

  return _isBst(tree, Infinity, -Infinity)
}

export default isBst
