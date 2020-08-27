function linkedList(){
  var root = null;

  function insertAtRoot(node){
    var tmp = root.next;
    root.next = node;
    node.next = tmp;
  }

  function deleteFromRoot(node){
    var deletedNode = root.next;
    deletedNode.next = null;
    root.next = root.next.next;
    return deletedNode;
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
  }

  function deleteNode(node){
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
    return deletedNode;
  }

  return {
    insertAtRoot: insertAtRoot,
    deleteFromRoot: deleteFromRoot,
    insertAfter: insertAfter,
    insertBefore: insertBefore,
    deleteNode: deleteNode
  }
}