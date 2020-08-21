/* test if graph has cycle */
function detectCycle(graph){
  function doDFS(vertex){
    viewed[vertex] = true;
    
    var neighbors = adjacencyList[vertex];
    
    for(var i = 0; i < neighbors.length; i++){
      var neighbourVertex = neighbors[i];
      if(neighbourVertex === startVertex){
        graphHasCycle = true;
        break;
      }
      if(!viewed[neighbourVertex]){
        doDFS(neighbourVertex);
      } 
    }
  }

  if(!graph){
    throw new Error('graph cannot be empty');
  }

  if(Object.prototype.toString.call(graph) !== '[object Object]'){
    throw new Error('graph is of invalid type');
  }

  var adjacencyList = graph.getAdjacencyList();
  
  if(!adjacencyList){
    throw new Error('adjacencyList not found');
  }

  var keys = Object.keys(adjacencyList);
  var graphHasCycle = false;
  var viewed = {}

  for(var i = 0 ; i < keys.length; i++){
    var vertex = keys[i];
    if(!viewed[vertex]){
      var startVertex = vertex;
      doDFS(vertex, {});
      if(graphHasCycle){
        break;
      }
    }
  }
  return graphHasCycle;
}

export { detectCycle }