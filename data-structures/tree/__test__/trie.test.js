import { trie } from '../trie';

describe('trie', function(){
  it('should test successful retrieval of information from trie' , function(){
    var prefixTree = trie(
      {'preload' : 43, 'prefetch' :  1, 'preface': 8}
    );
    expect(prefixTree.check('pre')).toEqual(true);
    expect(prefixTree.check('prefetch')).toEqual(true);
    expect(prefixTree.check('prefetchk')).toEqual(false);
    expect(prefixTree.check('pret')).toEqual(false);
  });
  it('should test getTraversalIterator function ' , function(){
    var prefixTree = trie(
      {'preload' : 43, 'prefetch' :  1, 'preface': 8, 'paramount': 0, 'popular' : 32}
    );
    var itr = prefixTree.getTraversalIterator();
    var node = itr.next('p');
    expect(Object.prototype.toString.call(node) === '[object Object]');
    expect(node.next.r).toBeDefined();
    expect(node.next.r.subTreeCount).toEqual(3);
    expect(node.subTreeCount).toEqual(5);
  });
});