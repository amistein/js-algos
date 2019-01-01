function bottomView(tree) {
  const table = {}
  const byDistance = ([d1], [d2]) => d1 - d2
  const flatten = arr => arr.reduce((a, b) => a.concat(b), [])
  const doesChildExist = ([node]) => Boolean(node)
  const childrenWithDistance = ([node, distance]) => [[node.left, distance - 1], [node.right, distance + 1]].filter(doesChildExist)
  let queue = [[tree, 0]]

  while (queue.length) {
    queue.forEach(([node, distance]) => table[distance] = node.value)
    queue = flatten(queue.map(childrenWithDistance))
  }

  return Object.entries(table).sort(byDistance).map(([_, n]) => n)
}

export default bottomView
