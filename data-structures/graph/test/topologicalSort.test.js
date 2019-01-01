import DirectedGraph from '../src/DirectedGraph'
import topologicalSort from '../src/topologicalSort'

describe('topological sort of disconnected acyclical graph', () => {
  test('it returns elements in topologically sorted order', () => {
    const graph = DirectedGraph.fromEdgeList([5,2,2,3,3,1,5,0,4,0,4,1])
    const sorted = topologicalSort(graph)
    expect(sorted.length).toBe(6)
    expect(sorted.every(e => [0,1,2,3,4,5].includes(e))).toBe(true)
    expect(sorted.indexOf(5)).toBeLessThan(sorted.indexOf(0))
    expect(sorted.indexOf(5)).toBeLessThan(sorted.indexOf(2))
    expect(sorted.indexOf(5)).toBeLessThan(sorted.indexOf(3))
    expect(sorted.indexOf(5)).toBeLessThan(sorted.indexOf(1))
    expect(sorted.indexOf(4)).toBeLessThan(sorted.indexOf(0))
    expect(sorted.indexOf(4)).toBeLessThan(sorted.indexOf(1))
    expect(sorted.indexOf(2)).toBeLessThan(sorted.indexOf(3))
    expect(sorted.indexOf(2)).toBeLessThan(sorted.indexOf(1))
    expect(sorted.indexOf(3)).toBeLessThan(sorted.indexOf(1))
  })
})
