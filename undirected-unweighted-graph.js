
const getUndirectedGraph = (adjacencyList = {}) => {
  const addVertex = vertex => {
    if (adjacencyList[vertex])
      throw new Error(`Vertex "${vertex}" import failed, Vertex already exists.`)
    adjacencyList[vertex] = []
    console.log(`Vertex "${vertex}" has been added.`)
  }

  const removeVertex = vertex => {
    if (!adjacencyList[vertex])
      throw new Error(`Vertex "${vertex}" removal has been failed, Vertex does not exist.`)
    while (adjacencyList[vertex].length) {
      const adjacent = adjacencyList[vertex].pop()
      adjacencyList[adjacent] = adjacencyList[adjacent].filter(x => x !== vertex)
    }
    delete adjacencyList[vertex]
    console.log(`Vertex "${vertex}" has been removed.`)
  }

  const addEdge = (v1, v2) => {
    if (adjacencyList[v1] && adjacencyList[v2]) {
      adjacencyList[v1].push(v2)
      adjacencyList[v2].push(v1)
      console.log(`Edge "${v1} - ${v2}" has been added.`)
    } else {
      throw new Error(`Edge "${v1} - ${v2}" import has been failed.`)
    }
  }

  const removeEdge = (v1, v2) => {
    if (adjacencyList[v1] && adjacencyList[v2]) {
      adjacencyList[v1] = adjacencyList[v1].filter(x => x !== v2)
      adjacencyList[v2] = adjacencyList[v2].filter(x => x !== v1)
      console.log(`Edge "${v1} - ${v2}" has been removed.`)
    } else {
      throw new Error(`Edge "${v1} - ${v2}" removal has been failed.`)
    }
  }

  const dfsRecursive = root => {
    const discovered = [];
    (function dfs(vertex) {
      discovered.push(vertex)
      for (const adjacent of adjacencyList[vertex])
        if (!discovered.includes(adjacent))
          dfs(adjacent)
    })(root)

    return discovered
  }

  const dfs = root => {
    const discovered = []
    const stack = [root]
    while (stack.length) {
      const vertex = stack.pop()
      if (!discovered.includes(vertex)) {
        discovered.push(vertex)
        for (const neighbor of adjacencyList[vertex])
          stack.push(neighbor)
      }
    }

    return discovered
  }

  const bfs = root => {
    const discovered = [root]
    const queue = [root]
    while (queue.length) {
      const vertex = queue.shift()
      for (const neighbor of adjacencyList[vertex]) {
        if (!discovered.includes(neighbor)) {
          discovered.push(neighbor)
          queue.push(neighbor)
        }
      }
    }

    return discovered
  }

  const inspectAdjList = () => {
    console.log('Adjacency List:', adjacencyList)
  }

  return {
    addVertex,
    removeVertex,
    addEdge,
    removeEdge,
    dfsRecursive,
    dfs,
    bfs,
    inspectAdjList,
  }
}

