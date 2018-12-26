import LinkedList from '../src/LinkedList'
import removeLoop from '../src/removeLoop'

describe('remove a loop from a linked list', () => {
  test('it returns the list minus the loop', () => {
    const list = new LinkedList.fromArray([2,3,4,5,6,7,8,9])
    list.drop(7).next = list.drop(2)
    expect(removeLoop(list).toArray()).toEqual([2,3,4,5,6,7,8,9])
  })
})
