import LinkedList from '../src/LinkedList'
import deleteNode from '../src/deleteNoHead'

describe('delete a node from a list without access to head of list', () => {
  test('node is deleted', () => {
    const list = LinkedList.fromArray([5,6,7,8,9])
    const node = list.drop(3)

    deleteNode(node)
    expect(list.toArray()).toEqual([5,6,7,9])
  })

  test('if node is tail of list it is not deleted', () => {
    const list = LinkedList.fromArray([5,6,7,8,9])
    const node = list.drop(4)

    deleteNode(node)
    expect(list.toArray()).toEqual([5,6,7,8,9])
  })
})
