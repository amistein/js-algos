export default class Graph {
  constructor(data) {
    this.data = data
  }

  depthFirst(start) {
    const data = this.data
    const visited = new Set()

    function _depthFirst(start) {
      if (!data[start]) data[start] = []
      visited.add(start)
      data[start].filter(e => !visited.has(e)).forEach(e => _depthFirst(e))
    }

    _depthFirst(start)
    return [...visited]
  }

  breadthFirst(start) {
    const data = this.data
    const flatten = arr => arr.reduce((a, b) => a.concat(b), [])
    function _breadthFirst(queue, visited) {
      if (!queue.length) return [...visited]
      queue.forEach(e => { visited.add(e) })

      const newQueue = flatten(queue.map(e => (data[e] || []).filter(e => !visited.has(e))))

      return _breadthFirst(newQueue, visited)
    }

    return _breadthFirst([start], new Set())
  }
}
