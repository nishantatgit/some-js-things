function disjointSet(list,rank,key){
  function isValidArray(array){
    return !!(Object.prototype.toString.call(array) === '[object Array]' && array.length);
  }

  var disjointSets = {};
  var isValidList = isValidArray(list);
  var isValidRank = isValidArray(rank);
  var isObjectList = isValidList && typeof list[0] === 'object';
  
  if(isValidList && !isValidRank){
    throw new Error('rank cannot be ' + rank);
  }

  if(isValidRank && !isValidList){
    throw new Error('list of sets cannot be ' + list);
  }

  if(isValidList && isValidRank){
    if(rank.length < list.length){
      throw new Error('length of rank is less than that of list of sets');
    }
    if(isObjectList && !key){
      throw new Error('key cannot be ' + key + ' for sets of objects');
    }
    makeSet();
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
    if(!element){
      throw new Error('element can not be ' + element);
    }

    while(element !== disjointSets[element]) {
      element = disjointSets[element]
    }
    return element;
  }

  function union(elementA, elementB){
    if(!elementA || !elementB){
      throw new Error('invalid input');
    }

    var rootA = find(elementA);
    var rootB = find(elementB);

    if(rootA !== rootB){
      if(rank[rootA] > rank[rootB]){
        disjointSets[rootA] = rootB;
      } else {
        disjointSets[rootB] = rootA;
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