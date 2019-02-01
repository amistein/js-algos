import removeDupes from '../src/removeDupes'

describe('Recursively remove substrings of adjacent duplicate characters from the string', () => {
  it('return the new string', () => {
    expect(removeDupes('acaaabbbacdddd')).toBe('acac')
  })
})
