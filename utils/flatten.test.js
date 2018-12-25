import flatten from './flatten'

describe('flatten util function', () => {
  test('it returns an empty array if called with an empty array', () => {
    expect(flatten([])).toEqual([])
  })

  test('it returns a one dimensional array if called with an array containing on array element', () => {
    expect(flatten([[2,3]])).toEqual([2,3])
  })

  test('it return a flat array if called with a 2D array', () => {
    expect(flatten([[4,5],[3],[9,7]])).toEqual([4,5,3,9,7])
  })
})
