/* 
 * Hash the value of all nodes in first list,
 * then traverse second list and return first found value.
 * Time complexity: O(n + m)
 */

function intersection(list1, list2) {
  const table = {}

  function hashVisited(list) {
    let curr = list

    while (curr) {
      table[curr.value] = true
      curr = curr.next
    }
  }

  function firstVisited(list) {
    let curr = list

    while (curr) {
      if (table[curr.value]) return curr.value
      curr = curr.next
    }
  }

  hashVisited(list1)
  return firstVisited(list2)
}

export default intersection
