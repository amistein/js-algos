import LinkedList from '../src/LinkedList'
import nthNodeFromEnd from '../src/nthNodeFromEnd'
import nthNodeFromEndRec from '../src/nthNodeFromEndRec'

describe('find nth node from end of linked list', () => {
  test('using two pointers, one starting n nodes ahead of other', () => {
    const list = LinkedList.fromArray([3,4,5,6,7,8,9,10])
    expect(nthNodeFromEnd(list, 3)).toBe(8)
  })

  test('using recursion', () => {
    const list = LinkedList.fromArray([3,4,5,6,7,8,9,10])
    expect(nthNodeFromEndRec(list, 3)).toBe(8)
  })
})
