function depthFirstDisconnected(graph) {
  const visited = new Set()
  const result = []

  function depthFirstAux(startValue) {
    const children = graph.data[startValue] || []

    if (visited.has(startValue)) return
    visited.add(startValue)
    children.forEach(depthFirstAux)
    result.push(startValue)
  }

  Object.keys(graph.data).forEach(key => { depthFirstAux(Number(key)) })

  return result
}

function topologicalSort(graph) {
  return depthFirstDisconnected(graph).reverse()
}

export default topologicalSort
