import Stack from '../src/Stack'

describe('Stack constructed from a linked list', () => {
  test('it returns the value the popped value', () => {
    const stack = new Stack()
    const pushedValues = [5,7,8,9,1,2]
    const retrievedValues = []
    pushedValues.forEach(e => { stack.push(e) })
    while (stack.data) {
      retrievedValues.push(stack.pop())
    }
    expect(retrievedValues).toEqual(pushedValues.reverse())
  })

  test('it returns null if the stack is empty', () => {
    const stack = new Stack()
    stack.push(5)
    stack.pop()
    expect(stack.pop()).toBeNull()
  })
})
