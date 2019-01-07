function missing(arr) {
  const len = arr.length
  const sum = (len + 1) * (len + 2) / 2
  return arr.reduce((a, b) => a - b, sum)
}

export default missing
