import { maxSubArraySum, maxSubArrayIndexes } from '../src/maxSubarray'

describe('Contiguous subarray with largest sum', () => {
  describe('return the sum of the subarray with greatest sum of all elements', () => {
    test('returns the sum', () => {
      expect(maxSubArraySum([-2,-3,4,-1,-2,1,5,-3])).toBe(7)
    })

    test('in an array of all negative elements, will return greatest element', () => {
      expect(maxSubArraySum([-4,-5,-2,-9,-6])).toBe(-2)
    })

    test('in array with all positive elements, will return sum of entire array', () => {
      expect(maxSubArraySum([2,3,4,5])).toBe(14)
    })
  })

  describe('return the indexes of the subarray with greatest sum of all elements', () => {
    test('returns the starting and ending indexes', () => {
      expect(maxSubArrayIndexes([-2,-3,4,-1,-2,1,5,-3])).toEqual([2,6])
    })

    test('in an array of all negative elements, will return subarray with greatest element', () => {
      expect(maxSubArrayIndexes([-4,-5,-2,-9,-6])).toEqual([2,2])
    })

    test('in array with all positive elements, will return starting and ending indexes of original array', () => {
      expect(maxSubArrayIndexes([2,3,4,5])).toEqual([0,3])
    })
  })
})
