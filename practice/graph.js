class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    for (let [key, value] of Object.entries(this.adjacentList)) {
      console.log(`${key}: ${value.join(" ----> ")}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);
myGraph.addVertex(5);
myGraph.addVertex(6);
myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 2);
myGraph.addEdge(1, 3);
myGraph.addEdge(2, 4);
myGraph.addEdge(3, 4);
myGraph.addEdge(4, 5);
myGraph.addEdge(5, 6);
myGraph.showConnections();
