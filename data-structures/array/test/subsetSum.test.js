import subsetSum, { subsetSumAll } from '../src/subsetSum'

describe('find subset of array that sums to given amount', () => {
	test('return shortest subset', () => {
		expect(subsetSum([10,1,2,6,5], 8)).toEqual([2,6])
	})

	test('return all subsets', () => {
		expect(subsetSumAll([10,1,2,7,6,5], 8)).toEqual([ [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ])
	})
})