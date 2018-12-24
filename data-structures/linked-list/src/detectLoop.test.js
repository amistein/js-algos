import LinkedList from './LinkedList'
import detectLoop from './detectLoop'
import detectLoopFloyd from './detectLoopFloyd'

describe('detect loop in a linked list', () => {
  test('marking visited nodes - algorithm returns false if list does not contain cycle ', () => {
    const list = LinkedList.fromArray([4,5,6,7,8,9])
    expect(detectLoop(list)).toBe(false)
  })

  test('marking visited nodes - algorithm returns true if list contains cycle ', () => {
    const list = LinkedList.fromArray([4,5,6,7,8,9])
    const lastNode = list.drop(5)

    lastNode.next = list.drop(2)
    expect(detectLoop(list)).toBe(true)
  })

  test('using Floyd’s cycle-finding algorithm returns false if list does not contain cycle ', () => {
    const list = LinkedList.fromArray([4,5,6,7,8,9])
    expect(detectLoopFloyd(list)).toBe(false)
  })

  test('using Floyd’s cycle-finding algorithm returns true if list contains cycle ', () => {
    const list = LinkedList.fromArray([4,5,6,7,8,9])
    const lastNode = list.drop(5)

    lastNode.next = list.drop(2)
    expect(detectLoopFloyd(list)).toBe(true)
  })
})