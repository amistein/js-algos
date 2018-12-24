/* 
 * This algorithm uses two pointers to traverse the linked list. We move the first
 * one node at a time, and the second two nodes at a time. If the list contains a 
 * cycle, the two pointer will definitely meet at some point.
 */

function detectLoop(list) {
  function _detectLoop(pointerA, pointerB) {
    if (!pointerB || !pointerB.next) return false
    if (pointerA === pointerB) return true
    return _detectLoop(pointerA.next, pointerB.next.next)
  }

  return _detectLoop(list, list.next)
}

export default detectLoop
