import LinkedList from './LinkedList'

class Stack {
  constructor() {
    this.data = null
  }

  push(value) {
    if (!this.data) this.data = new LinkedList(value)
    else this.data = this.data.prepend(value)
  }

  pop() {
    if (!this.data) return null
    const popped = this.data
    this.data = this.data.next
    return popped.value
  }
}

export default Stack
