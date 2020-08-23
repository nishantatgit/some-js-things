/* kahn's algorithm*/
function topologicalSort(graph){
  if(Object.prototype.toString.call(graph) !== '[object Object]'){
   throw new Error('graph is of invalid type');
  }

  function getEdgeID(fromVertex,toVertex){
    return fromVertex + '_' + toVertex;
  }

  function getIndegrees(adjList){
    var keys = Object.keys(adjList);
    var indegrees = {}
    for(var i =0 ; i < keys.length; i++){
      indegrees[keys[i]] = 0;
    }
    for(var i = 0; i < keys.length; i++){
      var neighbours = adjList[keys[i]];
      for(var j = 0; j < neighbours.length; j++){
        var vertex = neighbours[j];
        indegrees[vertex] = indegrees[vertex] + 1;
      }
    }
    return indegrees;
  }

  function getViewedState(adjList){
    var keys = Object.keys(adjList);
    var viewed = {};
    for(var i = 0; i< keys.length; i++){
      var vertex = keys[i];
      var neighbours = adjList[vertex];
      for(var j = 0; j < neighbours.length; j++){
        var eID = getEdgeID(vertex,neighbours[j]); 
        viewed[eID] = false;
      }
    }
    return viewed;
  }
 
  var adjacencyList = graph.getAdjacencyList();
  var indeg = getIndegrees(adjacencyList);

  var keys = Object.keys(adjacencyList);
  var s = [];
  var l = [];
  var viewed = getViewedState(adjacencyList);
  var totalNoOfNotViewedEdges = Object.keys(viewed).length; 

  /* initialize s with vertices having 0 indegree*/  
  for(var i = 0; i< keys.length; i++){
    var vertex = keys[i];
    if(indeg[vertex] === 0){
      s.push(vertex);
    }
  }

  while(s.length !== 0){
    var vertex = s.shift();
    l.push(vertex);
    var neighbours = adjacencyList[vertex];
    
    for(var i = 0; i < neighbours.length; i++){
      var neighbourVertex = neighbours[i];
      var eID = getEdgeID(vertex,neighbourVertex);
      if(!viewed[eID]){
        indeg[neighbourVertex] = indeg[neighbourVertex] - 1;
        viewed[eID] = true;
        if(indeg[neighbourVertex] === 0){
          s.push(neighbourVertex);
        }
        totalNoOfNotViewedEdges = totalNoOfNotViewedEdges - 1;
      }
    }
  }
  if(totalNoOfNotViewedEdges !== 0){
    throw new Error('topological sorting cannot be done for graphs containing cycle');
  }
  return l;
}

export { topologicalSort };