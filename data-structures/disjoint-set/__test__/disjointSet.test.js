import { disjointSet } from '../disjointSet';

describe('disjoint set', function(){
  it('should create disjoint set ', function(){
    var list = ['a','b','c','d','e','f'];
    var rank = [1,2,3,4,5,6];
    var dSet = disjointSet(list,rank);
    dSet.union('a','b');
    dSet.union('c','d');
    dSet.union('e','f');
    dSet.union('a','d');
    expect(dSet.find('c')).toEqual('a');
    expect(dSet.find('f')).toEqual('e');
  });
});