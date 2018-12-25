function flatten(arr) {
  if (!arr.length) return arr
  return arr.reduce((a, b) => a.concat(b))
}

export default flatten
  