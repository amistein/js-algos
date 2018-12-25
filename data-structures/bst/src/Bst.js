export default class Bst {
  constructor(n, left = null, right = null) {
    this.value = n
    this.left = left
    this.right = right
  }

  add(n) {
    const left = n < this.value ? (!this.left ? new Bst(n) : this.left.add(n)) : this.left
    const right = n >= this.value ? (!this.right ? new Bst(n) : this.right.add(n)) : this.right
    return new Bst(this.value, left, right)
  }

  inOrder() {
    const leftInOrder = this.left ? this.left.inOrder() : []
    const rightInOrder = this.right ? this.right.inOrder() : []
    return leftInOrder.concat(this.value).concat(rightInOrder)
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

  static fromArray(arr) {
    const [first] = arr
    const rest = arr.slice(1)

    return rest.reduce((a, b) => a.add(b), new Bst(first))
  }
}
