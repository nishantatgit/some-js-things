function createGraph(v, e){
  if(Object.prototype.toString.call(v) !== '[object Object]'){
    throw new TypeError(vertices + 'is of invalid type ');
  }

  if(Object.prototype.toString.call(e) !== '[object Object]'){
    throw new TypeError(edges + 'is of invalid type');
  }

  var vertices = v;
  var edges = e;

  function adjacent(){

  }

  function neighbors(){

  }

  function _addVertex(){

  }

  function addVertex(vertex){
    if(!vertices){
      vertices = {};
      vertices[vertex.id] = vertex;
    }
  }

  function removeVertex(){

  }

  function addEdge(){

  }

  function removeEdge(){

  }

  function getVertexValue(){

  }

  function setVertexValue(){

  }

  function getEdgeValue(){

  }

  function setEdgeValue(){

  }

  function getAdjacencyList(){

  }

  function getAdjacencyMatrix(){

  }

  return {
    adjacent: adjacent,
    neighbors: neighbors,
    addVertex: addVertex,
    removeVertex: removeVertex,
    addEdge: addEdge,
    removeEdge: removeEdge,
    getVertexValue: getVertexValue,
    setVertexValue: setVertexValue,
    getEdgeValue: getEdgeValue,
    setEdgeValue: setEdgeValue,
    getAdjacencyList: getAdjacencyList,
    getAdjacencyMatrix: getAdjacencyMatrix
  }
}