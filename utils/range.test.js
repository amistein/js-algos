import range from './range'

describe('range function', () => {
	it('returns an array starting and ending at the given parameters', () => {
		expect(range(10, 20)).toEqual([10,11,12,13,14,15,16,17,18,19])
	})
})
