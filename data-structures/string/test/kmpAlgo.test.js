import findSubstr from '../src/kmpAlgo'

describe('KMP algorithm for string matching', () => {
	test('returns index of substring when it is preceding by a suffix of itself', () => {
		expect(findSubstr('abxabcabcaby', 'abcaby')).toBe(6)
	})

	test('returns index of substring that is not preceded by a suffix', () => {
		expect(findSubstr('chair', 'air')).toBe(2)
	})
})
