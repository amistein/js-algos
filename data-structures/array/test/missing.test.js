import missing from '../src/missing'

describe('find missing element in array of 1 to n', () => {
  test('it returns the missing element', () => {
    expect(missing([1,2,3,5,6,7])).toBe(4)
  })
})
