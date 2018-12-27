function deleteNode(node) {
  if (!node.next) return

  node.value = node.next.value
  node.next = node.next.next
}

export default deleteNode
