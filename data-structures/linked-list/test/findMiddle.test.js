import LinkedList from '../src/LinkedList'
import findMiddle from '../src/findMiddle'
import findMiddleRec from '../src/findMiddleRec'

describe('find the middle element of a linked list using two pointers one moving twice as fast as the other', () => {
  test('list with odd amount of elements', () => {
    const list = LinkedList.fromArray([2,3,4,5,6,7,8])
    expect(findMiddle(list)).toBe(5)
  })

  test('list with odd amount of elements - should return second middle element', () => {
    const list = LinkedList.fromArray([2,3,4,5,6,7,8,9])
    expect(findMiddle(list)).toBe(6)
  })
})

describe('find the middle element of a linked list using recursion', () => {
  test('list with odd amount of elements', () => {
    const list = LinkedList.fromArray([2,3,4,5,6,7,8])
    expect(findMiddleRec(list)).toBe(5)
  })

  test('list with odd amount of elements - should return second middle element', () => {
    const list = LinkedList.fromArray([2,3,4,5,6,7,8,9])
    expect(findMiddleRec(list)).toBe(6)
  })
})
