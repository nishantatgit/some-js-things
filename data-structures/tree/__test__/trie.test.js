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
});