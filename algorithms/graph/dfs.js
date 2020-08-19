/* depth first search algorithm */
function dfs(graph, startVertex){

  function doDFS(startVertex){
    viewed[startVertex] = true;
    path.push(startVertex);
    var neighbors = adjacencyList[startVertex];
    for(var i = 0; i < neighbors.length; i++){
      if(!viewed[neighbors[i]]){
        doDFS(neighbors[i])
      }
    }
  }

  if(!startVertex){
    throw new Error('start vertex cannot be empty ');
  }
  
  if(typeof startVertex !== 'string'){
    throw new TypeError('start vertex is of invalid type');
  }

  if(!graph.hasVertex(startVertex)){
    throw new Error('startVertex is not present in graph');
  }
  
  if(!graph){
    throw new Error('graph cannot be empty ');
  }

  if(Object.prototype.toString.call(graph) !== '[object Object]' ){
    throw new TypeError('graph is of invalid type');
  }

  var adjacencyList = graph.getAdjacencyList();

  if(!adjacencyList){
    throw new Error('adjacencyList not found');
  }
  var keys = Object.keys(adjacencyList);
  var viewed = {};
  var path = [];
  
  doDFS(startVertex);
  for(var i = 0; i < keys.length; i++){
    var vertex = keys[i];
    if(!viewed[vertex]){
      doDFS(vertex);
    }
  }

  return path;
}

export { dfs };