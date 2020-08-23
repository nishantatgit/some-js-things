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
      var currentChar = strArray[i];
      if(currentNode.next[currentChar]){
        currentNode =  currentNode.next;
      } else {
        currentNode.next[currentChar] = createNode();
      }
    }
  }

  function check(str){
    
  }

  return {
    insert: insert,
    check: check,
  }
}

export { trie }