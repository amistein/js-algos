function reverse(list) {
  function _reverse(list, acc) {
    if (!list) return acc
    const next = list.next
    list.next = acc
    return _reverse(next, list)
  }

  return _reverse(list, null)
}

export default reverse
