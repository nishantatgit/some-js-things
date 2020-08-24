function trie(list){
  if(list && Object.prototype.toString.call(list) !== '[object Object]'){
    throw new TypeError('input must be an object');
  }

  function createNode(value){
    return {
      value : value,
      next : {},
      subtreeCount : 0
    }
  }

  function insert(str,value){
    var strArray = str.split('');
    var currentNode = root;
    for(var i = 0; i < strArray.length; i++){
      var char = strArray[i];
      if(currentNode.next[char]){
        currentNode.subtreeCount = currentNode.subtreeCount + 1;
      } else {
        currentNode.next[char] = createNode();
      }
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

  var root = { next : {}, subtreeCount: 0 };

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
  }
}

export { trie }