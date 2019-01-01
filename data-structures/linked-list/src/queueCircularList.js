import LinkedList from './LinkedList'

class Queue {
  constructor() {
    this.tail = null
  }

  enqueue(value) {
    const list = new LinkedList(value)

    if (!this.tail) this.tail = list
    list.next = this.tail.next
    this.tail.next = list
    this.tail = list
  }

  dequeue() {
    if (!this.tail) return null

    const head = this.tail.next

    this.tail.next = head.next
    if (this.tail === head) this.tail = null
    return head.value
  }
}

export default Queue
