import {
  breadthFirstSearch,
  depthFristSearch,
} from "../../src/GraphRouteAlgorithms";
import { Graph } from "../../src/models/Graph";

describe("Given a graph", () => {
  it("Should walk through it using bfs", () => {
    const testGraph = new Graph(5);
    testGraph.insertGraph(0, 1);
    testGraph.insertGraph(0, 2);
    testGraph.insertGraph(1, 3);
    testGraph.insertGraph(1, 4);
    testGraph.insertGraph(4, 2);
    breadthFirstSearch(testGraph, 0);
    expect(testGraph.visited.every((i) => i === true)).toBe(true);
  });

  it("Should walk through it using dfs", () => {
    const testGraph = new Graph(5);
    testGraph.insertGraph(0, 1);
    testGraph.insertGraph(0, 2);
    testGraph.insertGraph(1, 3);
    testGraph.insertGraph(1, 4);
    testGraph.insertGraph(4, 2);
    depthFristSearch(testGraph, 0);
    expect(testGraph.visited.every((i) => i === true)).toBe(true);
  });
});
