import Bst from './Bst'

function bstFromPostOrder(arr) {
  if (!arr.length) return null

  const last = arr[arr.length - 1]
  const rest = arr.slice(0, -1)
  const less = rest.filter(e => e < last)
  const more = rest.filter(e => e >= last)

  return new Bst(last, bstFromPostOrder(less), bstFromPostOrder(more))
}

export default bstFromPostOrder
