function swapPairs(head) {
  if (!head) return null
  if (!head.next) return head

  const newHead = head.next

  head.next = swapPairs(newHead.next)
  newHead.next = head

  return newHead
}

export default swapPairs
