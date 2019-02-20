function quickSort(arr) {
  function swap(first, second) {
    const temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
  }

  function partition(start, end) {
    const pivot = arr[end]
    let pIndex = start
    for (let i = start; i < end; i++) {
      if (arr[i] <= pivot) {
        swap(i, pIndex)
        pIndex++
      }
    }

    swap(end, pIndex)
    return pIndex
  }

  function qs(start, end) {
    if (start >= end) return
    const p = partition(start, end)
    qs(start, p - 1)
    qs(p + 1, end)
  }

  qs(0, arr.length - 1)
}

export default quickSort
