/* 
 * This function handles linked lists where least significant digit is first node of the 
 * list and most significant digit is last node. e.g. 5 -> 4-> 7 represents the number 748
 */

import LinkedList from './LinkedList'

function addNumbers(list1, list2) {
  let resultList
  let curr
  let carry = 0

  while (list1 || list2) {
    const sum = list1 && list2 ? list1.value + list2.value : (list1 ? list1.value : list2.value)
    const next = new LinkedList((sum % 10) + carry)

    if (!resultList) {
      resultList = next
      curr = next
    } else {
      curr.next = next
      curr = curr.next
    }

    list1 = list1 ? list1.next : null
    list2 = list2 ? list2.next : null
    carry = Math.floor(sum / 10)
  }

  if (carry === 1) curr.next = new LinkedList(1)

  return resultList
}

export default addNumbers
