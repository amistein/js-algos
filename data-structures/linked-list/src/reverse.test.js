import LinkedList from './LinkedList'
import reverseStack from './reverseStack'
import reverseRecursive from './reverseRecursive'
import reverseTailRecursiveInPlace from './reverseTailRecInPlace'
import reverseTailRecursive from './reverseTailRec'

describe('reverse a linked list', () => {
  test('in place using a stack and return new head', () => {
    const ll = LinkedList.fromArray([4,5,6,7,8,9])
    const secondNode = ll.drop(1)
    const reversed = reverseStack(ll)
    expect(reversed.toArray()).toEqual([9,8,7,6,5,4])
    expect(secondNode).toBe(reversed.drop(4))
  })

  test('in place recursively and return new head', () => {
    const ll = LinkedList.fromArray([4,5,6,7,8,9])
    const secondNode = ll.drop(1)
    const reversed = reverseRecursive(ll)
    expect(reversed.toArray()).toEqual([9,8,7,6,5,4])
    expect(secondNode).toBe(reversed.drop(4))
  })

  test('in place using tail recursion and return new head', () => {
    const ll = LinkedList.fromArray([4,5,6,7,8,9])
    const secondNode = ll.drop(1)
    const reversed = reverseTailRecursiveInPlace(ll)
    expect(reversed.toArray()).toEqual([9,8,7,6,5,4])
    expect(secondNode). toBe(reversed.drop(4))
  })

  test('using tail recursion and do not mutate original list', () => {
    const ll = LinkedList.fromArray([4,5,6,7,8,9])
    const secondNode = ll.drop(1)
    const reversed = reverseTailRecursive(ll)
    expect(reversed.toArray()).toEqual([9,8,7,6,5,4])
    expect(secondNode).not.toBe(reversed.drop(4))
  })
})
