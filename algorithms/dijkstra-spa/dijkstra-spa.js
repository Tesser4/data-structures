
const spa = (adjacencyList) => (startName) => {
  let unvisitedNodeNames = []
  const result = []

  for (const key of adjacencyList.keys()) {
    unvisitedNodeNames.push(key)
    result.push({
      nodeName: key,
      totalDistance: key === startName ? 0 : +Infinity,
      previousNodeName: null,
    })
  }

  while (unvisitedNodeNames.length) {
    const [smallestDistanceUnvisitedNode] = result
      .filter(({ nodeName }) => unvisitedNodeNames.includes(nodeName))
      .sort((a, b) => a.totalDistance - b.totalDistance)
    const unvisitedNeighbors = adjacencyList
      .get(smallestDistanceUnvisitedNode.nodeName)
      .filter(([neighborName]) => unvisitedNodeNames.includes(neighborName))
    for (const [neighborName, neighborDistance] of unvisitedNeighbors) {
      const neighborCurrentTotalDistance =
        smallestDistanceUnvisitedNode.totalDistance + neighborDistance
      const neighborKnownResult = result
        .find(({ nodeName }) => nodeName === neighborName)
      if (neighborCurrentTotalDistance < neighborKnownResult.totalDistance) {
        neighborKnownResult.totalDistance = neighborCurrentTotalDistance
        neighborKnownResult.previousNodeName = smallestDistanceUnvisitedNode.nodeName
      }
    }
    unvisitedNodeNames = unvisitedNodeNames
      .filter(name => name !== smallestDistanceUnvisitedNode.nodeName)
  }

  return result
}

export default spa
