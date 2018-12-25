function pairs(arr) {
  function _pairs(arr, acc) {
    if (!arr.length) return acc
    return _pairs(arr.slice(2), acc.concat([arr.slice(0, 2)]))
  }
  
  if (arr.length & 1) throw Error('Odd number of elements')
  return _pairs(arr, [])
}

export default pairs
