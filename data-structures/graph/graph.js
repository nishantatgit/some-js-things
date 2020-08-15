function createGraph(v, e){
  
  var vertices = v || {};
  var edges = e || {};
  var vIndex = 0;
  var adjacencyList;
  var adjacencyMatrix;
  var matrixToVerticesMap;

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

  function _prepareAdjacencyList(){ 
    if(!vertices){
      throw new Error('cannot create adjacency list with empty vertices');
    }

    if(!edges){
      throw new Error('cannot create adjacency list with empty edges');
    }

    if(adjacencyList){
      throw new Error('adjacencyList already exists');
    }
    
    adjacencyList = {};
    var verticesKeys = Object.keys(vertices);
    var edgesKeys = Object.keys(edges);

    for(var i = 0; i < verticesKeys.length; i++){
      vID = verticesKeys[i];
      adjacencyList[vID] = [];

      for(var j = 0; j < edgesKeys.length; j++){
        eID = edgesKeys[j];
        if(edges[eID].startVertex === vertices[vID].identifier){
          adjacencyList[vID].push(edges[eID].endVertex);
        }
      }
    }
  }

  function _prepareAdjacencyMatrix(){
    if(!vertices){
      throw new Error('cannot create adjacency matrix with empty vertices');
    }

    if(!edges){
      throw new Error('cannot create adjacency matrix with empty edges');
    }

    if(adjacencyList){
      throw new Error('adjacencyMatrix already exists');
    }

    adjacencyMatrix = [];
    matrixToVerticesMap = {};
    var verticesKeys = Object.keys(vertices);
    var dim = verticesKeys.length;

    for(var i =0; i < dim; i++){
      var vID = verticesKeys[i];
      matrixToVerticesMap[vID] = i;
      adjacencyMatrix[i] = [];
      for(var j =0; j < dim ; j++){
        adjacencyMatrix[i][j] = 0;
      }
    }

    var edgesKeys = Object.keys(edges);

    for(var i = 0; i < edgesKeys.length; i++){
      var eID = edgesKeys[i];
      var startVertex = edges[eID].startVertex;
      var endVertex = edges[eID].endVertex;
      adjacencyMatrix[matrixToVerticesMap[startVertex]][matrixToVerticesMap[endVertex]] = edges[eID].value;
    }
  }

  function adjacent(){

  }

  function neighbors(){

  }
  
  function addVertex(name,value){
    _addVertex(name,value);
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

    if(!vertices[edge.startVertex]){
      addVertex(edge.startVertex);
    }

    if(!vertices[edge.endVertex]){
      addVertex(edge.endVertex);
    }

    edges[edge.identifier] = edge;
  }

  function removeEdge(identifier){
    delete edges[identifier];
  }

  function getVertexValue(identifier){
    return vertices[identifier].value
  }

  function setVertexValue(value){
    return vertices[identifier].value = value;
  }

  function getEdgeValue(){
    return edges[identifier].value
  }

  function setEdgeValue(){
    return edges[identifier].value = value;
  }

  function getAdjacencyList(){
    if(!adjacencyList){
      _prepareAdjacencyList();
    }
    return adjacencyList;
  }

  function getAdjacencyMatrix(){
    if(!adjacencyMatrix){
      _prepareAdjacencyMatrix();
    }
    return adjacencyMatrix;
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
