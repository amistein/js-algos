import Queue from '../src/Queue'
import QueueCL from '../src/queueCircularList'

describe('Queue constructed from a linked list', () => {
  test('it returns the value at the head of the queue', () => {
    const q = new Queue()
    const enqueuedValues = [5,7,8,9,1,2]
    const retrievedValues = []
    enqueuedValues.forEach(e => { q.enqueue(e) })
    while (q.head) {
      retrievedValues.push(q.dequeue())
    }
    expect(retrievedValues).toEqual(enqueuedValues)
  })

  test('it returns null if the queue is empty', () => {
    const q = new Queue()
    q.enqueue(5)
    q.dequeue()
    expect(q.dequeue()).toBeNull()
  })
})

describe('Queue constructed from a circular linked list', () => {
  test('it returns the value at the head of the queue', () => {
    const q = new QueueCL()
    const enqueuedValues = [5,7,8,9,1,2]
    const retrievedValues = []
    enqueuedValues.forEach(e => { q.enqueue(e) })
    while (q.tail) {
      retrievedValues.push(q.dequeue())
    }
    expect(retrievedValues).toEqual(enqueuedValues)
  })

  test('it returns null if the queue is empty', () => {
    const q = new QueueCL()
    q.enqueue(5)
    q.dequeue()
    expect(q.dequeue()).toBeNull()
  })
})
