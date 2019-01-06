import subArraySum from '../src/subArraySum'

describe('Find a subarray with given sum', () => {
  test('it returns an array whose sum of elements equals given value', () => {
    expect(subArraySum([5,6,7,8,10,14,19,44,9,1,2,3], 54)).toEqual([44,9,1])
  })
})
