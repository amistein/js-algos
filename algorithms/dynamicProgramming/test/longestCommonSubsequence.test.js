import lcs from '../src/longestCommonSubsequence'

describe('find the longest common subsequence of two string', () => {
  test('returns the length of the lcs', () => {
    expect(lcs('AGGTAB', 'GXTXAYB')).toBe(4)
  })
})	
