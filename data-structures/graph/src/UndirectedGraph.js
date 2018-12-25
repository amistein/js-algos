import Graph from './Graph'
import flatten from '../../../utils/flatten'

export default class UndirectedGraph extends Graph {
  static fromEdgeList(arr) {
    function pairs(arr) {
      function _pairs(arr, acc) {
        if (!arr.length) return acc
        return _pairs(arr.slice(2), acc.concat([arr.slice(0, 2)]))
      }
      
      if (arr.length & 1) throw Error('Odd number of elements')
      return _pairs(arr, [])
    }

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
