
import { assertEquals } from '../../deps.js'
import getShortestPath from './get-shortest-path.js'
import adjacencyList from './adjacency-list.js'

Deno.test('consuming dijkstra shortest path algo', () => {
  const start = 'A'
  const end = 'C'
  const getShortestPathLoaded = getShortestPath(adjacencyList)

  const result = getShortestPathLoaded(start, end)
  const expected = 'A -> D -> E -> C (7)'
  assertEquals(result, expected)
})
