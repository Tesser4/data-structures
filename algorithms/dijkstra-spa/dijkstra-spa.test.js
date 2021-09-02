
import { assertEquals } from '../../deps.js'
import spa from './dijkstra-spa.js'
import adjacencyList from './adjacency-list.js'

const spaLoaded = spa(adjacencyList)

Deno.test('dijkstra shortest path algo - Starting node A', () => {
  const result = spaLoaded('A')
  const expected = [
    { nodeName: "A", totalDistance: 0, previousNodeName: null },
    { nodeName: "B", totalDistance: 3, previousNodeName: "D" },
    { nodeName: "C", totalDistance: 7, previousNodeName: "E" },
    { nodeName: "D", totalDistance: 1, previousNodeName: "A" },
    { nodeName: "E", totalDistance: 2, previousNodeName: "D" }
  ]
  assertEquals(result, expected)
})

Deno.test('dijkstra shortest path algo - Starting node C', () => {
  const result = spaLoaded('C')
  const expected = [
    { nodeName: "A", totalDistance: 7, previousNodeName: "D" },
    { nodeName: "B", totalDistance: 5, previousNodeName: "C" },
    { nodeName: "C", totalDistance: 0, previousNodeName: null },
    { nodeName: "D", totalDistance: 6, previousNodeName: "E" },
    { nodeName: "E", totalDistance: 5, previousNodeName: "C" }
  ]
  assertEquals(result, expected)
})
