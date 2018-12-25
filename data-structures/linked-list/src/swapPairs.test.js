import LinkedList from './LinkedList'
import swapPairs from './swapPairs'

describe('swap pairs of elements in a linked list', () => {
  test('when list has even amount of elements', () => {
    const list = LinkedList.fromArray([1,2,3,4,5,6])
    expect(swapPairs(list).toArray()).toEqual([2,1,4,3,6,5])
  })

  test('when list has odd amount of elements', () => {
    const list = LinkedList.fromArray([1,2,3,4,5])
    expect(swapPairs(list).toArray()).toEqual([2,1,4,3,5])
  })
})
