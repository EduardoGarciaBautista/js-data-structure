class Graph {
    constructor() {
        this.nodes = 0;
        this.adjacentList = {};
    }

    //Nodes
    addVertex(node) {
        this.adjacentList[node] = [];
        this.nodes++;
    }   

    //Borders
    addEdge(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const graph = new Graph();


graph.addVertex(1);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(8);

graph.addEdge(1, 3);

console.log(graph);