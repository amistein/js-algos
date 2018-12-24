/* 
 * Find the differece in size between the the two lists. d = difference
 * Traverse both lists, starting at the `d`th node on the longer list, and at the 
 * beginning of the shorter list. Return the value of the first common node encountered.
 */


function intersection(list1, list2) {
  function identicalNode(head1, head2) {
    if (head1 === head2) return head1.value
    return identicalNode(head1.next, head2.next)
  }

  const size1 = list1.size()
  const size2 = list2.size()
  const difference = Math.abs(size1 - size2)
  const [longer, shorter] = size1 > size2 ? [list1, list2] : [list2, list1]

  return identicalNode(longer.drop(difference), shorter)
}

export default intersection
