// General recursive solution
function longestIncreasingSubsequence(arr) {
    function longestUntilHere(arr) {
      const next = Math.max(...arr.slice(0, -1).filter(e => e < arr[arr.length - 1]).map(e => longestUntilHere(arr.slice(0, arr.indexOf(e) + 1))))
  
      return 1 + (next > 0 ? next : 0)
    }
  
    return Math.max(...arr.map((_, i) => longestUntilHere(arr.slice(0, i + 1))))
  }

// Dynamic programming solution
// Time complexity: O(n^2)
function lisDynamic(arr) {
  const allLongest = []

  for (let e of arr) {
    const longestUntilHere = Math.max(...allLongest.filter((_, i) => arr[i] < e))
    allLongest.push(1 + (longestUntilHere > 0 ? longestUntilHere : 0))
  }

  return Math.max(...allLongest)
}

export default lisDynamic
