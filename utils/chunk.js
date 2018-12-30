function chunk(arr, n) {
  function _chunk(arr, acc) {
    if (!arr.length) return acc
    return _chunk(arr.slice(n), acc.concat([arr.slice(0, n)]))
  }
  
  return _chunk(arr, [])
}

export default chunk
