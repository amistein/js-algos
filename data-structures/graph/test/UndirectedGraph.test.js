import UndirectedGraph from '../src/UndirectedGraph'

describe('UndirectedGraph', () => {
  test('depth first traversal', () => {
    const graph = UndirectedGraph.fromEdgeList([1,2,1,3,1,4,2,5,3,5,2,7])
    expect(graph.depthFirst(1)).toEqual([1,2,5,3,7,4])
  })

  test('breadth first traversal', () => {
    const graph = UndirectedGraph.fromEdgeList([1,2,1,3,1,4,2,5,3,5,2,7])
    expect(graph.breadthFirst(1)).toEqual([1,2,3,4,5,7])
  })
})
