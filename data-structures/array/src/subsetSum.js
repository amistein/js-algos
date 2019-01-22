function subsetSum(arr, sum, acc = []) {
  if (!arr.length && sum !== 0) return []
  if (sum === 0) return acc

  const includeCurrent = subsetSum(arr.slice(1), sum - arr[0], acc.concat(arr[0]))
  const excludeCurrent = subsetSum(arr.slice(1), sum, acc)

  if (!includeCurrent.length) return excludeCurrent
  if (!excludeCurrent.length) return includeCurrent

  return includeCurrent.length < excludeCurrent.length ? includeCurrent : excludeCurrent
}

export function subsetSumAll(arr, sum, acc = []) {
  if (!arr.length && sum !== 0) return []
  if (sum === 0) return [acc]
  return subsetSumAll(arr.slice(1), sum - arr[0], acc.concat(arr[0]))
    .concat(subsetSumAll(arr.slice(1), sum, acc))
}

export default subsetSum
