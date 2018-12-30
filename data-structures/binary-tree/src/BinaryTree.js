import chunk from '../../../utils/chunk'

export default class BinaryTree {
  constructor(value, left = null, right = null) {
    this.value = value
    this.left = left
    this.right = right
  }

  preOrder() {
    const leftPreOrder = this.left ? this.left.preOrder() : []
    const rightPreOrder = this.right ? this.right.preOrder() : []
    return [this.value].concat(leftPreOrder).concat(rightPreOrder)
  }

  inOrder() {
    const leftInOrder = this.left ? this.left.inOrder() : []
    const rightInOrder = this.right ? this.right.inOrder() : []
    return leftInOrder.concat(this.value).concat(rightInOrder)
  }

  postOrder() {
    const leftPostOrder = this.left ? this.left.postOrder() : []
    const rightPostOrder = this.right ? this.right.postOrder() : []
    return leftPostOrder.concat(rightPostOrder).concat(this.value)
  }

  breadthFirst() {
    function _breadthFirst(queue, acc) {
      if (!queue.length) return acc

      const newQueue = queue.map(n => [n.left, n.right].filter(Boolean)).reduce((a, b) => a.concat(b))
      const newAcc = acc.concat(queue.map(n => n.value))
      return _breadthFirst(newQueue, newAcc)
    }

    return _breadthFirst([this], [])
  }

  static fromString(str) {
    function add(tree, rootValue, insertValue, direction) {
      const dir = direction === 'L' ? 'left' : 'right'
      if (tree.value === rootValue) tree[dir] = new BinaryTree(insertValue)
      else {
        if (tree.left) add(tree.left, rootValue, insertValue, direction)
        if (tree.right) add(tree.right, rootValue, insertValue, direction)
      }
    }

    const nodes = chunk(str.split(' '), 3)
    const tree = new BinaryTree(Number(nodes[0][0]))

    nodes.forEach(([rootVal, insertVal, dir]) => add(tree, Number(rootVal), Number(insertVal), dir))

    return tree
  }
}
