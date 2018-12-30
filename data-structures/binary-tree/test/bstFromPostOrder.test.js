import bstFromPostOrder from '../src/bstFromPostOrder'

describe('construct binary search tree from array of pre-order traversal', () => {
  test('return a BST with the correct order', () => {
    const tree = bstFromPostOrder([8,7,15,12,23,32,35,30,20])
    expect(tree.postOrder()).toEqual([8,7,15,12,23,32,35,30,20])
    expect(tree.preOrder()).toEqual([20,12,7,8,15,30,23,35,32])
  })
})
