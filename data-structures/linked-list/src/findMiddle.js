function findMiddle(list) {
  function loop(pointer1, pointer2) {
    if (!pointer2) return pointer1.value
    return loop(pointer1.next, pointer2.next ? pointer2.next.next : null)
  }

  return loop(list, list.next)
}

export default findMiddle
