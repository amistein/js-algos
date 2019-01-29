import lis from '../src/longestIncreasingSubsequence'

describe('find the length of the longest increasing subsuquence in an array', () => {
  test('dynamic programming solution', () => {
    expect(lis([10,11,12,1,2,13,3,4,5,14])).toBe(6)
  })
})
