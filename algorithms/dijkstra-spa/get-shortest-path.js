
import spa from './dijkstra-spa.js'

const getShortestPath = (adjacencyList) => (start, end) => {
  const spaLoaded = spa(adjacencyList)
  const spaResult = spaLoaded(start)

  const [totalDistance] = spaResult
    .filter(({ nodeName }) => nodeName === end)
    .map(({ totalDistance }) => totalDistance)

  let name = end
  const path = [end]
  while (name !== start) {
    [name] = spaResult
      .filter(({ nodeName }) => nodeName === name)
      .map(({ previousNodeName }) => previousNodeName)
    path.unshift(name)
  }

  return `${path.join(' -> ')} (${totalDistance})`
}

export default getShortestPath
