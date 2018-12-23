import LinkedList from './LinkedList'
import reverseStack from './reverseStack'

describe('reverse a linked list with a stack', () => {
  test('it reverses a linked list in place and returns new head', () => {
    const ll = LinkedList.fromArray([4,5,6,7])
    expect(reverseStack(ll).toArray()).toEqual([7,6,5,4])
  })
})
