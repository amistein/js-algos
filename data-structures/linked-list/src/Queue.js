import LinkedList from './LinkedList'

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  enqueue(value) {
    const node = new LinkedList(value)
    if (!this.head) this.head = node
    if (this.tail) this.tail.next = node
    this.tail = node
  }

  dequeue() {
    if (!this.head) return null

    const currHead = this.head
    this.head = this.head.next
    return currHead.value
  }
}

export default Queue
