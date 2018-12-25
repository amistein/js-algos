import flatten from '../../../utils/flatten'

export default class Graph {
  constructor(data) {
    this.data = data
  }

  depthFirst(start) {
    const data = this.data
    
    function _depthFirst(start, visited) {
      const adjList = data[start] || []
      const newVisited = visited.concat(adjList)
      const children = adjList
        .filter(e => !visited.includes(e))
        .map(e => _depthFirst(e, newVisited))

      return [start].concat(flatten(children))
    }

    return _depthFirst(start, [start])
  }

  breadthFirst(start) {
    const data = this.data
    function _breadthFirst(queue, visited) {
      if (!queue.length) return [...visited]
      const newQueue = flatten(queue.filter(e => !visited.has(e)).map(e => data[e]))

      queue.forEach(e => { visited.add(e) })

      return _breadthFirst(newQueue, visited)
    }

    return _breadthFirst([start], new Set())
  }
}
