export default class LinkedList {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  prepend(value) {
    return new LinkedList(value, this)
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
