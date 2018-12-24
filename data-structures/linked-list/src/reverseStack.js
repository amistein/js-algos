function reverse(list) {
  const stack = []
  while (list) {
    const temp = list
    list = list.next
    temp.next = null
    stack.push(temp)
  }

  const head = stack.pop()
  let tail = head

  while (stack.length) {
    tail.next = stack.pop()
    tail = tail.next
  }

  return head
}

export default reverse
