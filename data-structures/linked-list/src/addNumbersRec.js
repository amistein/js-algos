/* 
 * This function handles linked lists where most significant digit is first node of the 
 * list and least significant digit is last node. e.g. 5 -> 4-> 7 represents the number 547
 */

 import LinkedList from './LinkedList'

 function addNumbers(list1, list2) {
  if (list1.size() < list2.size()) {
    const temp = list1
    list1 = list2
    list2 = temp
  }
  
  const lengthDiff = list1.size() - list2.size()
  const rest = list1.take(lengthDiff)
  let carry = 0
  let head = null

  function _addNumbers(list1, list2) {
    if (!list1) return
    const sum = list1.value + list2.value
    
    _addNumbers(list1.next, list2.next)
    head = new LinkedList((sum % 10) + carry, head)
    carry = Math.floor(sum / 10)
  }

  _addNumbers(list1.drop(lengthDiff), list2)
  if (rest && carry) return addNumbers(rest, new LinkedList(carry)).concat(head)
  if (rest) return rest.concat(head)
  if (carry) return new LinkedList(carry, head)

  return head
}

export default addNumbers
