import { linkedList } from '../linkedList';
import { node } from '../node';

describe('linked list ', function(){
  var list;
  beforeEach(function(){
    list = linkedList();
  });

  it('should test insertAtRoot ', function(){
    expect(list.getSizeOf()).toEqual(0);
    var linkNode = node('node1');
    list.insertAtRoot(linkNode);
    expect(list.atIndex(0).value).toEqual('node1');
    expect(list.getSizeOf()).toEqual(1);
  });

  it('should test deleteFromRoot', function(){
    expect(list.getSizeOf()).toEqual(0);
    var linkNode = node('node1');
    list.insertAtRoot(linkNode);
    expect(list.getSizeOf()).toEqual(1);
    list.deleteFromRoot();
    expect(list.getSizeOf()).toEqual(0);
  });

  it('should test insertAfter' , function(){
    expect(list.getSizeOf()).toEqual(0);
    var linkNode1 = node('node1');
    list.insertAtRoot(linkNode1);
    var linkNode2 = node('node2');
    list.insertAtRoot(linkNode2);
    var linkNode3 = node('node3');
    list.insertAtRoot(linkNode3);
    var linkNode4 = node('node4');
    list.insertAtRoot(linkNode4);
    var linkNode5 = node('node5');
    list.insertAtRoot(linkNode5);
    expect(list.getSizeOf()).toEqual(5);
    var nodeInBetween = node('node-in-between');
    list.insertAfter(linkNode3,nodeInBetween);
    expect(list.getSizeOf()).toEqual(6);
    expect(list.indexOf(nodeInBetween)).toEqual(3);
  });

  it('should test deleteNode', function(){
    expect(list.getSizeOf()).toEqual(0);
    var linkNode1 = node('node1');
    list.insertAtRoot(linkNode1);
    var linkNode2 = node('node2');
    list.insertAtRoot(linkNode2);
    var linkNode3 = node('node3');
    list.insertAtRoot(linkNode3);
    var linkNode4 = node('node4');
    list.insertAtRoot(linkNode4);
    var linkNode5 = node('node5');
    list.insertAtRoot(linkNode5);
    expect(list.getSizeOf()).toEqual(5);

    var deletedNode = list.deleteNode(linkNode2);
    
    expect(linkNode2 === deletedNode);
    expect(list.getSizeOf()).toEqual(4);
  });

  it('should test insertAt', function(){
    expect(list.getSizeOf()).toEqual(0);
    var linkNode1 = node('node1');
    list.insertAtRoot(linkNode1);
    var linkNode2 = node('node2');
    list.insertAtRoot(linkNode2);
    var linkNode3 = node('node3');
    list.insertAtRoot(linkNode3);
    var linkNode4 = node('node4');
    list.insertAtRoot(linkNode4);
    var linkNode5 = node('node5');
    list.insertAtRoot(linkNode5);
    expect(list.getSizeOf()).toEqual(5);
    var nodeInBetween = node('node-in-between');
    list.insertAt(2, nodeInBetween); 
    expect(list.getSizeOf()).toEqual(6);
    expect(list.atIndex(2)).toEqual(nodeInBetween);
  });


});