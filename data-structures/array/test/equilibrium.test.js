import equilibrium from '../src/equilibrium'

describe('Equilibrium index of an array', () => {
  test('returns index where sum of element at lower indices is equal to the sum of elements at higher indices', () => {
    expect(equilibrium([1,3,2,5,5,2,2,1,6])).toBe(4)
  })
})
