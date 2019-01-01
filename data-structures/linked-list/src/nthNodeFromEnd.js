function nthNodeFromEnd(list, n) {
  let pointer1 = list.drop(n)
  let pointer2 = list

  while (pointer1) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }

  return pointer2.value
}

export default nthNodeFromEnd
