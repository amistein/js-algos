function bottomView(tree) {
  const table = {}
  const byDistance = ([d1], [d2]) => d1 - d2

  function loop(queue) {
    if (!queue.length) return
    queue.forEach(([node, distance]) => table[distance] = node.value)

    const flatten = arr => arr.reduce((a, b) => a.concat(b), [])
    const doesChildExist = ([node]) => Boolean(node)
    const childrenWithDistance = ([node, distance]) => [[node.left, distance - 1], [node.right, distance + 1]].filter(doesChildExist)
    const newQueue = flatten(queue.map(childrenWithDistance))

    loop(newQueue)
  }

  loop([[tree, 0]])

  return Object.entries(table).sort(byDistance).map(([_, n]) => n)
}

export default bottomView
