function leftView(tree) {
  if (!tree) return []
  if (tree.left) return [tree.value].concat(leftView(tree.left))
  return [tree.value].concat(leftView(tree.right))
}

export default leftView
