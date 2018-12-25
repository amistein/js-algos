import Bst from './Bst'

describe('binary search tree', () => {
  test('breadth first traversal', () => {
    const bst = Bst.fromArray([8,3,10,1,6,14,4,7,13])
    expect(bst.breadthFirst()).toEqual([8,3,10,1,6,14,4,7,13])
  })

  test('inorder traversal', () => {
    const bst = Bst.fromArray([8,3,10,1,6,14,4,7,13])
    expect(bst.inOrder()).toEqual([1,3,4,6,7,8,10,13,14])
  })
})
