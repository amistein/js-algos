import LinkedList from './LinkedList'
import merge from './merge'

describe('merge two sorted linked lists', () => {
  test('it returns one sorted linked list containing all elements', () => {
    const list1 = LinkedList.fromArray([10,20,30])
    const list2 = LinkedList.fromArray([15,17])
    const list3 = LinkedList.fromArray([9,11])
    const list4 = LinkedList.fromArray([10,12,14])
    expect(merge(list1, list2).toArray()).toEqual([10,15,17,20,30])
    expect(merge(list3, list4).toArray()).toEqual([9,10,11,12,14])
  })
})