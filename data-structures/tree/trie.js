function trie(list){
  if(list && Object.prototype.toString.call(list) !== '[object Array]'){
    throw new TypeError('list must be an array');
  }

  if(list && list.length <= 0){
    throw new Error('list cannot be empty');
  }

  var root = {};

  function check(){

  }

  function createNode(value){
    return {
      value : value,
      next : {}
    }
  }

  function insert(str){
    var strArray = str.split('');
    var currentNode = root;
    for(var i = 0; i < length; i++){
      var char = strArray[i];
      if(currentNode.next[char]){
        currentNode =  currentNode.next;
      } else {
        currentNode.next[char] = createNode();
      }
    }
  }

  function check(str){
    var hasString = true;
    var strArray = str.split('');
    var currentNode = root;
    for(var i = 0; i < strArray.length && currentNode !== undefined; i++){
      var char = strArray[i];
      if(!currentNode.next[char]){
        break
      }
    }
    if(i < strArray.length){
      hasString = false;
    }
    return hasString;
  }

  if(list && list.length > 0){
    for(var i = 0; i < list.length; i++){
      insert(list[i]);
    }
  }

  return {
    insert: insert,
    check: check,
  }
}

export { trie }