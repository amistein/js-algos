export default class LinkedList {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  // Time complexity: O(1)
  prepend(value) {
    return new LinkedList(value, this)
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
