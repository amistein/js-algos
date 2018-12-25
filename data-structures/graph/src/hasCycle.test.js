import DirectedGraph from './DirectedGraph'
import hasCycle from './hasCycle'

describe('detect whether or not graph contains a cycle', () => {
  test('returns false if graph does not contain cycle', () => {
    const graph = DirectedGraph.fromEdgeList([0, 1, 1, 2, 2, 3, 3, 4])
    expect(hasCycle(graph)).toBe(false)
  })

  test('returns true if graph contains cycle', () => {
    const graph = DirectedGraph.fromEdgeList([0, 1, 1, 2, 2, 3, 3, 4, 4, 1])
    expect(hasCycle(graph)).toBe(true)
  })
})
