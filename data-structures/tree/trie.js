function trie(list){
  if(list && Object.prototype.toString.call(list) !== '[object Array]'){
    throw new TypeError('input must be an Array');
  }

  function createNode(value){
    return {
      value : value,
      next : {},
      subTreeCount : 0,
      completeWordCount: 0,
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
    currentNode.completeWordCount = currentNode.completeWordCount + 1;
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

  if(list && list.length > 0){
    for(var i = 0; i < list.length; i++){
      insert(list[i].string,list[i].value);
    }
  }

  return {
    insert: insert,
    check: check,
    getTraversalIterator: getTraversalIterator
  }
}

export { trie }