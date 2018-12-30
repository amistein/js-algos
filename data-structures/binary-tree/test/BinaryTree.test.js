import BinaryTree from '../src/BinaryTree'
import Bst from '../src/Bst'

describe('binary search tree', () => {
  const bst = Bst.fromArray([8,3,10,1,6,14,4,7,13])

  test('inorder traversal', () => {
    expect(bst.inOrder()).toEqual([1,3,4,6,7,8,10,13,14])
  })

  test('preorder traversal', () => {
    expect(bst.preOrder()).toEqual([8,3,1,6,4,7,10,14,13])
  })

  test('postorder traversal', () => {
    expect(bst.postOrder()).toEqual([1,4,7,6,3,13,14,10,8])
  })

  test('breadth first traversal', () => {
    expect(bst.breadthFirst()).toEqual([8,3,10,1,6,14,4,7,13])
  })

  test('construct a binary tree from a string', () => {
    const tree = BinaryTree.fromString('10 12 L 10 5 R 5 7 R 5 3 L 3 11 R')
    expect(tree.breadthFirst()).toEqual([10,12,5,3,7,11])
    expect(tree.inOrder()).toEqual([12,10,3,11,5,7])
    expect(tree.preOrder()).toEqual([10,12,5,3,11,7])
  })
})
