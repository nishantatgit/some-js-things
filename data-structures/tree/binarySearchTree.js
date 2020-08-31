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
        currentNode =  treeIterator.toLeft();
      } else {
        if(currentNode.right === null){
          bTree.insertToRight(currentNode, nodeToInsert);
          inserted = true;
          break;
        }
        currentNode = treeIterator.toRight();
      }
    }
    return inserted;
  }

  function search(value){
    var treeIterator = btree.treeIterator();
    var currentNode = btree.currentNode;
    while(currentNode){
      if(comparator(currentNode.value, value) === 0){
        return currentNode;
        break;
      } else if(comparator(currentNode.value,value) > 0){
        currentNode = treeIterator.toLeft();
      } else {
        currentNode = treeIterator.toRight();
      }
    }
  }

  function deleteNode(value){
    
  }

  return {
    insertNode: insertNode,
    search: search,
    deleteNode: deleteNode
  }
}