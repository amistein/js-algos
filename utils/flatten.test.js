import flatten from './flatten'

describe('flatten util function', () => {
  test('it returns an empty array if called with an empty array', () => {
    expect(flatten([])).toEqual([])
  })

  test('it return a flat array if called with a 2D array', () => {
    expect(flatten([[4,5],[3],[9,7]])).toEqual([4,5,3,9,7])
  })
})
