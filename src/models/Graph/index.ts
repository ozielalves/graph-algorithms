class Graph {
  vertices: number[][];
  visited: boolean[];
  numberOfVertices: number;

  constructor(maxVertex: number) {
    this.numberOfVertices = maxVertex;
    this.vertices = new Array(maxVertex);
    this.visited = new Array(maxVertex);
    this.resetVisited();
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i] = new Array(maxVertex);
    }
    for (let i = 0; i < this.vertices.length; i++) {
      for (let j = 0; j < this.vertices[i].length; j++) {
        this.vertices[i][j] = 0;
      }
    }
  }

  resetVisited() {
    for (let i = 0; i < this.visited.length; i++) {
      this.visited[i] = false;
    }
  }

  print() {
    console.table(this.vertices);
  }

  insertGraph(a: number, b: number) {
    for (let i = 0; i < this.vertices.length; i++) {
      for (let j = 0; j < this.vertices[i].length; j++) {
        if (i === a && j === b) {
          this.vertices[i][j] = 1;
          this.vertices[j][i] = 1;
        }
      }
    }
  }
}

export { Graph };
