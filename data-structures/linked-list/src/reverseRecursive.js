function reverse(list) {
  let head

  function _reverse(list) {
    if (!list) return
    _reverse(list.next)
    if (!list.next) head = list
    else list.next.next = list
    list.next = null
  }

  _reverse(list)
  return head
}

export default reverse
