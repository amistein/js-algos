import Graph from './Graph'
import pairs from '../../../utils/pairs'

export default class DirectedGraph extends Graph {
  static fromEdgeList(arr) {
    const adjList = pairs(arr).reduce((graph, [first, second]) => {
      graph[first]  = graph[first] || []
      graph[first].push(second)

      return graph
    }, {})

    return new DirectedGraph(adjList)
  }
}
