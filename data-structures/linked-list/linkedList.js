function linkedList(){
  var root = null;
  var size = 0;

  function _incSize(){
    size = size + 1;
  }

  function _decSize(){
    size = size ? size - 1 : size;
  }

  function _initRoot(){
    root = {
      next : null
    };
  }

  function _resetSize() {
    size = 0;
  }

  function insertAtRoot(node){
    if(!root) _initRoot();
    var tmp = root.next;
    root.next = node;
    node.next = tmp;
    _incSize();
  }

  function deleteFromRoot(node){
    if(!root) return;
    var deletedNode = root.next;
    deletedNode.next = null;
    root.next = root.next.next;
    _decSize();
    return deletedNode;
  }

  function size(){
    return size;
  }

  function insertAfter(targetNode, node){
    var currentNode = root;
    while(currentNode.next !== null){
      if(currentNode.value === targetNode.value){
        var tmp = currentNode.next;
        currentNode.next = node;
        node.next = tmp;
      }
      currentNode = currentNode.next;
    }
    _incSize();
  }

  function insertBefore(targetNode, node){
    var currentNode = root;
    while(currentNode.next !== null){
      if(currentNode.next.value === targetNode.value){
        var tmp = currentNode.next;
        currentNode.next = node;
        node.next = tmp;
      }
    }
    _incSize();
  }

  function deleteNode(node){
    if(!root) return;
    var currentNode = root;
    var deletedNode;
    while(currentNode.next !== null){
      if(currentNode.next.value === node.value){
        var deletedNode = currentNode.next;
        deletedNode.next = null;
        currentNode.next = currentNode.next.next;
        break;
      }
    }
    _decSize();
    return deletedNode;
    
  }

  function insertAtEnd(node){
    if(!root) _initRoot();
    var currentNode = root;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }
    currentNode.next = node;
  }

  function deleteFromEnd(){
    if(!root) return;
    var currentNode = root;
    while(currentNode.next.next !== null){
      currentNode = currentNode.next;
    }
    var deletedNode = currentNode.next;
    currentNode.next = null;
    _decSize();
    return deletedNode;
  }

  function getIterator(){
    if(!root) return;
    var currentNode = root;
    function next(){
      currentNode = currentNode.next;
      return currentNode;
    }
    return {
      next: next
    }
  }

  function removeAll(){
    root = null;
    _resetSize();
  }

  function indexOf(node){
    var index = -1;
    if(!root) return index;
    var currentNode = root;
    do {
      currentNode = currentNode.next;
      index = index + 1;
    } while(currentNode.value !== node.value && currentNode !== null);
    return currentNode ? index : -1;
  }

  function insertAt(index,node){
    if(index < 0){
      throw new Error('Index cannot be negative ');
    }

    var inserted = false;
    
    if(!root) return inserted;
    
    var currentIndex = 0;
    var currentNode = root;
    
    while(currentIndex !== index && currentNode !== null){
      currentNode = currentNode.next;
      currentIndex = currentIndex + 1;
    }

    if(currentIndex === index){
      var tmp = currentNode.next;
      currentNode.next = node;
      node.next = tmp;
      inserted = true;
    } 

    return inserted;
  }

  function deleteAt(index){
    if(index < 0){
      throw new Error('Index cannot be negative ');
    }

    var deleted;
    var currentIndex = 0;
    var currentNode = root;
    do(
      if(currentIndex === index){
        deleted = currentNode.next;
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    ) while(currentIndex !== index && currentNode !== null);
    return deleted;
  }

  function reverse(){
    var currentNode = root.next;
    var nextNode = root.next.next;
    while(nextNode !== null){
      var nextToNextNode = nextNode.next;
      nextNode.next = currentNode;
      currentNode = nextNode;
      nextNode = nextToNextNode;
    }
    root.next = nextNode;
  }

  function atIndex(index){
    if(index < 0){
      if(index < 0){
        throw new Error('Index cannot be negative ');
      }
    }
    var currentNode = root.next;
    var currentIndex = 0;
    while(currentNode !== null){
      if(index === currentIndex){
        return currentNode;
      }
    }
  }

  return {
    insertAtRoot: insertAtRoot,
    deleteFromRoot: deleteFromRoot,
    insertAfter: insertAfter,
    insertBefore: insertBefore,
    deleteNode: deleteNode,
    deleteFromEnd: deleteFromEnd,
    getIterator: getIterator,
    size: size,
    indexOf: indexOf,
    insertAt: insertAt,
    deleteAt: deleteAt,
    atIndex: atIndex,
    removeAll: removeAll
  }
}