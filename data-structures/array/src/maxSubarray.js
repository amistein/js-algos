// Using Kadane's algorithm

// Returns sum of subarray with greatest sum of all elements
export function maxSubArraySum(arr) {
  let runningMaxSum = -Infinity
  let maxSumSoFar = -Infinity

  for (let n of arr) {
    runningMaxSum = Math.max(n, runningMaxSum + n)
    maxSumSoFar = Math.max(runningMaxSum, maxSumSoFar)
  }

  return maxSumSoFar
}

// returns the indexes of the subarray with greatest sum of all elements
export function maxSubArrayIndexes(arr) {
  let runningMaxSum = -Infinity
  let maxSumSoFar = -Infinity
  let runningStartIndex = 0
  let startIndexSoFar = 0
  let endIndexSoFar = 0

  arr.forEach((n, i) => {
    if (runningMaxSum > 0) runningMaxSum += n
    else {
      runningMaxSum = n
      runningStartIndex = i
    }

    if (runningMaxSum > maxSumSoFar) {
      maxSumSoFar = runningMaxSum
      startIndexSoFar = runningStartIndex
      endIndexSoFar = i
    }
  })

  return [startIndexSoFar, endIndexSoFar]
}
