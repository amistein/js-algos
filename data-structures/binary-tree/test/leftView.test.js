import BinaryTree from '../src/BinaryTree'
import leftView from '../src/leftView'

describe('return the left view of a binary tree', () => {
  test('when a node on the left side is a right subtree', () => {
    const tree = BinaryTree.fromString('1 2 L 1 3 R 2 4 L 2 5 R 3 6 L 3 7 R 4 8 L')
    expect(leftView(tree)).toEqual([1,2,4,8])
  })
})
