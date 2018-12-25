import LinkedList from '../src/LinkedList'
import reverseGroup from '../src/reverseGroup'
import reverseGroupRec from '../src/reverseGroupRec'

describe('Reverse a linked list in groups of given size', () => {
  test('using a stack', () => {
    const list = LinkedList.fromArray([9,8,7,6,5,4,3,2])
    expect(reverseGroup(list, 3).toArray()).toEqual([7,8,9,4,5,6,2,3])
  })

  test('using recursion', () => {
    const list = LinkedList.fromArray([9,8,7,6,5,4,3,2])
    expect(reverseGroupRec(list, 3).toArray()).toEqual([7,8,9,4,5,6,2,3])
  })
})
