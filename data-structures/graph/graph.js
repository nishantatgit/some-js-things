function createGraph(v, e){
  if(Object.prototype.toString.call(v) !== '[object Object]'){
    throw new TypeError(vertices + 'is of invalid type ');
  }

  if(Object.prototype.toString.call(e) !== '[object Object]'){
    throw new TypeError(edges + 'is of invalid type');
  }

  var vertices = v;
  var edges = e;
  var vIndex = 0;

  function adjacent(){

  }

  function neighbors(){

  }

  function _addVertex(identifier,value){
    
    if(vertices[identifier]){
      throw new Error('duplicate vertex. vertex ' + identifier + ' already exists');
    }

    var vertex = {
      identifier : identifier,
      value: value,
    };
    
    vertices[identifier] = vertex;
  }
  
  function addVertex(name,value){
    if(!vertices){
      vertices = {};
      _addVertex(name,value);
    }
  }

  function removeVertex(identifier){
    delete vertices[identifier];
  }

  function addEdge(edge){
    if(!edge.startVertex){
      throw new Error('Edge must have start vertex');
    }
    if(!edge.endVertex){
      throw new Error('Edge must have end vertex');
    }

    if(!vertices[edge.startVertex.identifier]){
      addVertex(edge.startVertex);
    }

    if(!vertices[edge.endVertex.identifier]){
      addVertex(edge.endVertex);
    }

    if(!edges){
      edges = {};
    }

    edges[edge.identifier] = edge;
  }

  function removeEdge(identifier){
    delete edges[identifier];
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