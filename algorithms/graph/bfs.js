/* breadth first search algorithm */
function bfs(graph, startVertex){
  function doBFS(startVertex){
    var queue = [startVertex];

    while(queue.length > 0){
      var currentVertex = queue.shift();
      
      if(!viewed[currentVertex]){
        viewed[currentVertex] = true;
        path.push(currentVertex);
        var neighbours = adjacencyList[currentVertex];
        for(var i = 0; i < neighbours.length; i++){
          queue.push(neighbours[i]);
        }
      }
    }

    var neighbours = adjacencyList[startVertex];

    for(var i = 0; i < neighbours.length; i++){
      queue.push(neighbours[i]);
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

  var viewed = {};
  var path = [];
  var keys = Object.keys(adjacencyList);

  doBFS(startVertex);
  for(var i = 0; i < keys.length; i++){
    var vertex = keys[i];
    if(!viewed[vertex]){
      doBFS(vertex);
    }
  }
  
  return path;
}

export { bfs }