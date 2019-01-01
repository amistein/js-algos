import Graph from './Graph'
import pairs from '../../../utils/pairs'

export default class UndirectedGraph extends Graph {
  static fromEdgeList(arr) {
    const adjList = pairs(arr).reduce((graph, [first, second]) => {
      graph[first]  = graph[first] || []
      graph[second] = graph[second] || []
      graph[first].push(second)
      graph[second].push(first)

      return graph
    }, {})

    return new UndirectedGraph(adjList)
  }
}
