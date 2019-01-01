function hasCycle(graph) {
  function _hasCycle(queue, visited) {
    if (!queue.length) return false
    if (queue.some(e => visited.includes(e))) return true
    
    const flatten = arr => arr.reduce((a, b) => a.concat(b), [])
    const newQueue = flatten(queue.map(e => graph.data[e] || []))
    const newVisited = visited.concat(queue)

    return _hasCycle(newQueue, newVisited)
  }

  const randomNode = graph.data[Object.keys(graph.data)[0]][0]

  return _hasCycle([randomNode], [])
}

export default hasCycle
