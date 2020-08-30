function binaryTree(){
  var root = null;
  var size = 0;

  function _decSize(){
    size = size ? size - 1 : size;
  }

  function _incSize(){
    size = size + 1;
  }

  function size(){
    return size;
  }

  function contains(){
    //Determines if a particular element is in the tree
  }

  function find(){
    // Returns a reference to the specified target, if found
  }

  function inOrderTraversalIterator(){

  }

  function preOrderTraversalIterator(){

  }

  function postOrderTraversalIterator(){

  }

  function levelOrderTraversalIterator(){

  }

  function levelOrderAlternateTraversalIterator(){

  }

  function treeIterator(){
    var currentNode = root;

    function toRight() {
      currentNode = currentNode.right;
      return currentNode;
    }

    function toLeft(){
      currentNode = currentNode.left;
      return currentNode;
    }

    function getCurrentNode(){
      return currentNode;
    }

    return {
      toRight : toRight,
      toLeft: toLeft
      currentNode : getCurrentNode
    }
  }

  function isEmpty(){
    return root === null;
  }

  function insertToLeft(targetNode,node){
    targetNode.left = node;
    _incSize();
  }

  function insertToRight(targetNode,node){
    targetNode.right = node;
    _incSize();
  }

  return {
    isEmpty: isEmpty,
    size: size,
    contains: contains,
    find: find,
    inOrderTraversalIterator: inOrderTraversalIterator,
    preOrderTraversalIterator: preOrderTraversalIterator,
    postOrderTraversalIterator: postOrderTraversalIterator,
    levelOrderTraversalIterator: levelOrderTraversalIterator,
    levelOrderAlternateTraversalIterator: levelOrderAlternateTraversalIterator,
    treeIterator: treeIterator
  }
}

export { binaryTree }