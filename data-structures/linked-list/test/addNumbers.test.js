import LinkedList from '../src/LinkedList'
import addNumbers from '../src/addNumbers'
import addNumbersRec from '../src/addNumbersRec'

describe('add two numbers represented by a linked list when first node contains least significant digit', () => {
  test('equal amount of nodes', () => {
    const list1 = LinkedList.fromArray([5,4,7])
    const list2 = LinkedList.fromArray([5,4,3])
    expect(addNumbers(list1, list2).toArray()).toEqual([0,9,0,1])
  })

  test('equal amount of nodes with carry', () => {
    const list1 = LinkedList.fromArray([5,1,5])
    const list2 = LinkedList.fromArray([6,3,5])
    expect(addNumbers(list1, list2).toArray()).toEqual([1,5,0,1])
  })

  test('one list is longer than the other', () => {
    const list1 = LinkedList.fromArray([5,6,5])
    const list2 = LinkedList.fromArray([8,4,5,2,5])
    expect(addNumbers(list1, list2).toArray()).toEqual([3,1,1,3,5])
  })
})

describe('add two numbers represented by a linked list when first node contains most significant digit', () => {
  test('equal amount of nodes', () => {
    const list1 = LinkedList.fromArray([3,6,5])
    const list2 = LinkedList.fromArray([2,4,8])
    expect(addNumbersRec(list1, list2).toArray()).toEqual([6,1,3])
  })

  test('equal amount of nodes with carry', () => {
    const list1 = LinkedList.fromArray([5,1,5])
    const list2 = LinkedList.fromArray([5,3,6])
    expect(addNumbersRec(list1, list2).toArray()).toEqual([1,0,5,1])
  })

  test('one list is longer than the other', () => {
    const list1 = LinkedList.fromArray([5,6,5])
    const list2 = LinkedList.fromArray([5,2,5,4,8])
    expect(addNumbersRec(list1, list2).toArray()).toEqual([5,3,1,1,3])
  })
})
