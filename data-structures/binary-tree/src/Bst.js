import BinaryTree from './BinaryTree'

export default class Bst extends BinaryTree {
  add(val) {
    const left = val < this.value ? (!this.left ? new Bst(val) : this.left.add(val)) : this.left
    const right = val >= this.value ? (!this.right ? new Bst(val) : this.right.add(val)) : this.right
    return new Bst(this.value, left, right)
  }

  static fromArray(arr) {
    const [first] = arr
    const rest = arr.slice(1)

    return rest.reduce((a, b) => a.add(b), new Bst(first))
  }
}
