import { Graph } from "../models/Graph";

const depthFristSearch = (graph: Graph, vertex: number) => {
  let stack: number[] = [];
  stack.push(vertex);
  while (stack.length > 0) {
    vertex = stack.pop();
    if (graph.visited[vertex] === false) {
      graph.visited[vertex] = true;
      console.log(`vertex ${vertex} was visited`);
      for (let j = 0; j < graph.numberOfVertices; j++) {
        if (graph.vertices[vertex][j] === 1) {
          stack.push(j);
        }
      }
    }
  }
};

const breadthFirstSearch = (graph: Graph, vertex: number) => {
  let queue: number[] = [];
  graph.visited[vertex] = true;
  queue.push(vertex);
  while (queue.length > 0) {
    let visiting = queue.shift();
    console.log(`vertex ${visiting} was visited`);
    for (let j = 0; j < graph.numberOfVertices; j++) {
      if (graph.vertices[visiting][j] === 1 && graph.visited[j] === false) {
        graph.visited[j] = true;
        queue.push(j);
      }
    }
  }
};

export { breadthFirstSearch, depthFristSearch };
