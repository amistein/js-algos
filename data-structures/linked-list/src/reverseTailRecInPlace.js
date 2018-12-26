function reverse(list) {
  function _reverse(head, newList) {
    if (!head) return newList
    const next = head.next
    head.next = newList
    return _reverse(next, head)
  }

  return _reverse(list, null)
}

export default reverse
