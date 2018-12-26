function removeLoop(list) {
  function findNodeInCycle(list) {
    function inner(pointerA, pointerB) {
      if (pointerA === pointerB) return pointerA
      return inner(pointerA.next, pointerB.next.next)
    }

    return inner(list, list.next)
  }

  function loopSize(startNode) {
    function inner(curr, len) {
      if (startNode === curr) return len
      return inner(curr.next, len + 1)
    }

    return inner(startNode.next, 1)
  }

  function _removeLoop(pointer1, pointer2) {
    if (pointer1.next === pointer2.next) pointer2.next = null
    else _removeLoop(pointer1.next, pointer2.next)
  }

  _removeLoop(list, list.drop(loopSize(findNodeInCycle(list))))

  return list
}

export default removeLoop
