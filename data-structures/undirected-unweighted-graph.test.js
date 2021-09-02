
import { assertEquals } from '../deps.js'
import getUndirectedGraph from './undirected-unweighted-graph.js'

const graph = getUndirectedGraph();

(() => {
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')
  graph.addEdge('A', 'B')
  graph.addEdge('A', 'C')
  graph.addEdge('B', 'D')
  graph.addEdge('C', 'E')
  graph.addEdge('D', 'E')
  graph.addEdge('D', 'F')
  graph.addEdge('E', 'F')
})()

Deno.test('DFS recursive traversal', () => {
  const result = graph.dfsRecursive('A')
  const expected = ['A', 'B', 'D', 'E', 'C', 'F']
  assertEquals(result, expected)
})

Deno.test('DFS iterative traversal', () => {
  const result = graph.dfs('A')
  const expected = ['A', 'C', 'E', 'F', 'D', 'B']
  assertEquals(result, expected)
})

Deno.test('BFS traversal', () => {
  const result = graph.bfs('A')
  const expected = ['A', 'B', 'C', 'D', 'E', 'F']
  assertEquals(result, expected)
})
