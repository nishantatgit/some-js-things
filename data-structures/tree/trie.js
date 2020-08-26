function trie(list){
  if(list && Object.prototype.toString.call(list) !== '[object Object]'){
    throw new TypeError('input must be an object');
  }

  function createNode(value){
    return {
      value : value,
      next : {},
      subTreeCount : 0
    }
  }

  function insert(str,value){
    var strArray = str.split('');
    var currentNode = root;
    for(var i = 0; i < strArray.length; i++){
      var char = strArray[i];
      if(!currentNode.next[char]){
        currentNode.next[char] = createNode();
      }
      currentNode.subTreeCount = currentNode.subTreeCount + 1;
      currentNode =  currentNode.next[char];
    }
    currentNode.value = value;
  }

  function check(str){
    var hasString = true;
    var strArray = str.split('');
    var currentNode = root;
    for(var i = 0; i < strArray.length && currentNode !== undefined; i++){
      var char = strArray[i];
      if(!currentNode.next[char]){
        break;
      }
      currentNode = currentNode.next[char];
    }
    if(i < strArray.length){
      hasString = false;
    }
    return hasString;
  }

  function getTraversalIterator(){
    var currentNode = root;
    function getNextNode(char){
      if(currentNode.next[char]){
        currentNode = currentNode.next[char];
        var returnNode = {};
        return Object.assign({},currentNode);
      }
      else {
        return null;
      }
    }
    return { next : getNextNode}
  }

  var root = { next : {}, subTreeCount: 0 };

  var strings = Object.keys(list);

  if(strings && strings.length > 0){
    for(var i = 0; i < strings.length; i++){
      var currentString = strings[i];
      insert(currentString,list[currentString]);
    }
  }

  return {
    insert: insert,
    check: check,
    getTraversalIterator: getTraversalIterator
  }
}

export { trie }