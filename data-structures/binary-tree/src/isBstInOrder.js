function isBst(tree) {
  let last = -Infinity

  function _isBst(tree) {
    if (!tree) return true
    if (!_isBst(tree.left) || tree.value < last) return false
    last = tree.value
    if (!_isBst(tree.right)) return false
    return true
  }

  return _isBst(tree)
}

export default isBst
