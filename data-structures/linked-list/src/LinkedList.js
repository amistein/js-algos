export default class LinkedList {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  // Time complexity: O(1)
  prepend(value) {
    return new LinkedList(value, this)
  }

  size() {
    if (!this.next) return 1
    return 1 + this.next.size()
  }

  //Selects all elements except first `n` ones.
  drop(n) {
    let i = 0;
    let curr = this
    while (i < n) {
      if (!curr) return null
      curr = curr.next
      i++
    }
    return curr
  }

  // Selects first `n` elements
  // Mutates the linked list
  take(n) {
    if (n === 0) return null
    if (!this.next) return this
    this.next = this.next.take(n - 1)
    return this
  }

  toArray() {
    const result = []
    let curr = this
    while (curr) {
      result.push(curr.value)
      curr = curr.next
    }
    return result
  }

  static fromArray(arr) {
    const reversed = arr.reverse()
    const [first] = reversed
    return reversed.slice(1).reduce((a, b) => a.prepend(b), new LinkedList(first))
  }
}
