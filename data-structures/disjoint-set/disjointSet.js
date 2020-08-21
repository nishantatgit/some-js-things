function disjointSet(list,rank,key){
  

  var disjointSets = {};
  var isObjectList = typeof list === 'object';
  
  if(!list){
    throw new Error('list cannot be empty');
  }

  if(!rank){
    throw new Error('rank cannot be empty');
  }

  if(isObjectList && !key){
    throw new Error('key is required for list of objects as a second parameter to function');
  }

  function _makeSet(){
    for(var i = 0; i < list.length; i++){
      disjointSets[list[i]] = list[i];
    }
  }

  function _makeSetObject(){
    for(var i = 0; i < list.length; i++){
      disjointSets[list[i][key]] = list[i];
    }
  }

  function find(element){
    while(disjointSets[element] !== element){
      element = disjointSets[element]
    }
  }

  function union(elementA, elementB){
    var rootA = find(elementA);
    var rootB = find(elementB);

    if(rootA !== rootB){
      if(rank[rootA] > rank[rootB]){
        disjointSets[rootA] = rootB;
      }
    }
  }

  function makeSet(){
    if(isObjectList){
      _makeSetObject();
    } else {
      _makeSet();
    }
  }

  return {
    find : find,
    union: union,
    makeSet: makeSet 
  }
}

export { disjointSet };