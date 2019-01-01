function nthNodeFromEnd(list, n) {
  let counter = 0
  let result

  function nthNodeAux(list) {
    if (!list) return
    nthNodeAux(list.next)
    counter++
    if (counter === n) result = list.value 
  }

  nthNodeAux(list)

  return result
}

export default nthNodeFromEnd
