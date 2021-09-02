
const adjacencyList = new Map()

adjacencyList
  .set('A', [['B', 6], ['D', 1]])
  .set('B', [['A', 6], ['C', 5], ['D', 2], ['E', 2]])
  .set('C', [['B', 5], ['E', 5]])
  .set('D', [['A', 1], ['B', 2], ['E', 1]])
  .set('E', [['B', 2], ['C', 5], ['D', 1]])

export default adjacencyList
