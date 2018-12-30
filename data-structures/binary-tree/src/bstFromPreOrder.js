import Bst from './Bst'

function bstFromPreOrder(arr) {
  if (!arr.length) return null

  const [first] = arr
  const rest = arr.slice(1)
  const less = rest.filter(e => e < first)
  const more = rest.filter(e => e >= first)
  return new Bst(first, bstFromPreOrder(less), bstFromPreOrder(more))
}

export default bstFromPreOrder
