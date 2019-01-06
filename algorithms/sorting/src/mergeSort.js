function mergeSort(arr) {
    function merge(arr1, arr2) {
      if (!arr1.length) return arr2
      const [lower, higher] = arr1[0] < arr2[0] ? [arr1, arr2] : [arr2, arr1] 
  
      return [lower[0]].concat(merge(lower.slice(1), higher))
    }
  
    if (arr.length === 1) return arr
    const middle = Math.floor(arr.length / 2)
  
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}


/*************************************************************
Same approach as above, except that `merge` is tail recursive
**************************************************************/
function mergeSortTailRec(arr) {
    function merge(arr1, arr2) {
        function _merge(arr1, arr2, acc) {
            if (!arr1.length) return acc.concat(arr2)
            const [lower, higher] = arr1[0] < arr2[0] ? [arr1, arr2] : [arr2, arr1] 

            return _merge(lower.slice(1), higher, acc.concat(lower[0]))
        }

        return _merge(arr1, arr2, [])
    }

    if (arr.length === 1) return arr
    const middle = Math.floor(arr.length / 2)

    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))
}

export default mergeSort
