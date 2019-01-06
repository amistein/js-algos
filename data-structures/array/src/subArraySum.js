function subArraySum(arr, k) {
    let start = 0
    let end = 0
    let sum = 0
    
    while (sum !== k) {
      if (sum < k) sum += arr[end++]
      if (sum > k) sum -= arr[start++]
    }
  
    return arr.slice(start, end)
}


/*****************
Using recursion
******************/
function subArraySumRec(arr, k) {
    function loop(start, end, sum) {
        if (sum === k) return arr.slice(start, end)
        if (sum < k) return loop(start, end + 1, sum + arr[end])
        if (sum > k) return loop(start + 1, end, sum - arr[start])
    }

    return loop(0, 0, 0)
}

export default subArraySum
