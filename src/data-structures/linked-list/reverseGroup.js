function reverseGroup(list, k) {
  const stack = []
  let head;
  let tail;

  while (list) {
    const temp = list
    list = list.next
    temp.next = null
    stack.push(temp)

    if (stack.length === k || !list) {
      const tempHead = stack.pop()
      let tempTail = tempHead
      if (!head) head = tempHead
      while (stack.length) {
        tempTail.next = stack.pop()
        tempTail = tempTail.next
      }
      if (tail) tail.next = tempHead
      tail = tempTail
    }
  }

  return head
}

export default reverseGroup
