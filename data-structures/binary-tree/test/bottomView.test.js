import BinaryTree from '../src/BinaryTree'
import bottomView from '../src/bottomView'

describe('bottom view of a binary tree', () => {
  test('one bottom per distance', () => {
    const tree = BinaryTree.fromString('20 8 L 20 22 R 8 5 L 8 3 R 3 10 L 3 14 R 22 25 R')
    expect(bottomView(tree)).toEqual([5,10,3,14,25])
  })

  test('multiple bottoms per distance', () => {
    const tree = BinaryTree.fromString('20 8 L 20 22 R 8 5 L 8 3 R 3 10 L 3 14 R 22 4 L 22 25 R')
    expect(bottomView(tree)).toEqual([5,10,4,14,25])
  })
})
