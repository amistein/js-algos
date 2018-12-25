import pairs from './pairs'

describe('pairs util function', () => {
  test('throws an error if called with an array containing an odd number of elements', () => {
    expect(() => { pairs([3,4,5,6,7]) }).toThrow('Odd number of elements')
  })

  test('returns an array of arrays - each containing two elements', () => {
    expect(pairs([3,4,5,6,7,8])).toEqual([[3,4],[5,6],[7,8]])
  })
})
