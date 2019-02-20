function heapSort(arr) {
  let size = 0

  function swap(first, second) {
    const temp = arr[first]
    arr[first] = arr[second]
    arr[second] = temp
  }

  function addToHeap(val) {
    arr[size] = val
    heapifyUp()
    size++
  }

  function deleteMax() {
    size--
    swap(0, size)
    heapifyDown()
  }

  function heapifyUp() {
    let current = size
    let parent = getParent(current)
    while (arr[current] > arr[parent]) {
      swap(current, parent)
      current = parent
      parent = getParent(current)
    }
  }

  function heapifyDown() {
    let current = 0
    let maxChild = getMaxChild(current)
    while (arr[current] < arr[maxChild]) {
      swap(current, maxChild)
      current = maxChild
      maxChild = getMaxChild(current)
    }
  }

  function getParent(i) {
    if (i === 0) return null
    return i & 1 ? Math.floor(i / 2) : i / 2 - 1
  }

  function getMaxChild(i) {
    const leftChild = i * 2 + 1
    const rightChild = leftChild + 1
    if (leftChild >= size) return null
    if (rightChild === size) return leftChild
    return arr[leftChild] > arr[rightChild] ? leftChild : rightChild
  }

  arr.forEach(e => {
    addToHeap(e)
  })

  arr.forEach(() => {
    deleteMax()
  })
}

export default heapSort
