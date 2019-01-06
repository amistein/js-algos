/*
 * An equilibrium index of an array is an index in the array such that the sum of elements
 * at lower indices is equal to the sum of elements at higher indices.
 */

function equilibrium(arr) {
  const sum = arr => arr.reduce((a, b) => a + b)
  let sumFirstHalf = 0
  let sumSecondHalf = sum(arr.slice(1))
  let i = 0

  while (sumFirstHalf !== sumSecondHalf) {
    sumFirstHalf += arr[i]
    sumSecondHalf -= arr[i + 1]
    i++
  }

  return i
}


/*********
Recursive
**********/
function equilibriumRec(arr) {
  const sum = arr => arr.reduce((a, b) => a + b)
  function loop(sum1, sum2, i) {
    if (sum1 === sum2) return i
    return loop(sum1 + arr[i], sum2 - arr[i + 1], i + 1)
  }

  return loop(0, sum(arr.slice(1)), 0)
}

export default equilibrium
