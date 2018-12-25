import LinkedList from '../src/LinkedList'
import addNumbers from '../src/addNumbers'

describe('add two numbers represented by a linked list', () => {
  test('equal amount of nodes', () => {
    const list1 = LinkedList.fromArray([5,4,7])
    const list2 = LinkedList.fromArray([5,4,3])
    expect(addNumbers(list1, list2).toArray()).toEqual([0,9,0,1])
  })
})
