import chunk from './chunk'

describe('pairs util function', () => {
  test('returns an array of arrays - each containing `n` elements', () => {
    expect(chunk([3,4,5,6,7,8,9,10], 3)).toEqual([[3,4,5],[6,7,8], [9,10]])
  })
})
