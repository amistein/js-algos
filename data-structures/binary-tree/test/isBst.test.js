import BinaryTree from '../src/BinaryTree'
import isBst from '../src/isBst'
import isBstInOrder from '../src/isBstInOrder'

describe('determine if a binary tree is a BST', () => {
  describe('by traversing the tree and keeping track of max and min allowed', () => {
    test('returns false if tree is not a BST', () => {
      const tree = BinaryTree.fromString('5 3 L 5 6 R 3 4 R 6 4 L')
      expect(isBst(tree)).toBe(false)
    })
    test('returns true if tree is a BST', () => {
      const tree = BinaryTree.fromString('3 2 L 3 5 R 2 1 L 5 4 L')
      expect(isBst(tree)).toBe(true)
    })
  })

  describe('by traversing the tree in order and ensuring that no encountered value is less than the previous', () => {
    test('returns false if tree is not a BST', () => {
      const tree = BinaryTree.fromString('5 3 L 5 6 R 3 4 R 6 4 L')
      expect(isBstInOrder(tree)).toBe(false)
    })
    test('returns true if tree is a BST', () => {
      const tree = BinaryTree.fromString('3 2 L 3 5 R 2 1 L 5 4 L')
      expect(isBstInOrder(tree)).toBe(true)
    })
  })
})