import heapSort from '../src/heapSort'

describe('Heap Sort', () => {
  test('Sorts array in ascending order in place', () => {
    const arr = [10,7,6,8,3,2,4]
    heapSort(arr)
    expect(arr).toEqual([2,3,4,6,7,8,10])
  })
})
