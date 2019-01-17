import permutations from '../src/permutations'

describe('find all permutations of a string', () => {
  test('returns correct result', () => {
    const allPermutations = ['cat', 'act', 'atc', 'cta', 'tca', 'tac']
    expect(permutations('cat').every(p => allPermutations.includes(p))).toEqual(true)
  })
})