function findMiddle(list) {
  let curr = list
  let middle;

  function _findMiddle(list) {
    if (!list) return
    _findMiddle(list.next)

    if (curr.next === list || curr === list) middle = list.value
    curr = curr.next
  }

  _findMiddle(list)
  return middle
}

export default findMiddle
