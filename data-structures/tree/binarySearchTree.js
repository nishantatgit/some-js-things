import { binaryTree } from './binaryTree';
import { treeNode } from './treeNode';
import { comparator } from '../../utils/utils';

function binarySearchTree(){
  var bTree = binaryTree;

  function insertNode(value,){
    var inserted = false;
    var treeIterator = bTree.treeIterator();
    var currentNode = treeIterator.currentNode();
    var nodeToInsert = treeNode(value);
    
    while(currentNode){
      if(comparator(currentNode.value, value) > 0){
        if(currentNode.left === null){
          bTree.insertToLeft(currentNode, nodeToInsert);
          inserted = true;
          break;
        }
        currentNode =  currentNode.toLeft();
      } else {
        if(currentNode.right === null){
          bTree.insertToRight(currentNode, nodeToInsert);
          inserted = true;
          break;
        }
        currentNode = currentNode.toRight();
      }
    }
    return inserted;
  }

  function search(node){

  }

  function deleteNode(){

  }

  return {
    insertNode: insertNode,
    search: search,
    deleteNode: deleteNode
  }
}