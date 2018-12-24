import LinkedList from './LinkedList'

function reverse(list) {
  function _reverse(list, acc) {
    if (!list) return acc
    return _reverse(list.next, !acc ? new LinkedList(list.value) : acc.prepend(list.value))
  }

  return _reverse(list, null)
}

export default reverse
