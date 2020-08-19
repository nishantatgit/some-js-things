import { graph } from '../../../data-structures/graph/graph';
import { dfs } from '../dfs';
import { expectedResult } from '../../sorting/__test__/data';

describe('depth first search ', function(){
  var grph;
  beforeEach(function(){
    grph = graph();
  });

  it(' should return path based on depth first search ', function(){
    
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b'
    });
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'c',
      identifier: 'a_c'
    });
    grph.addEdge({
      startVertex: 'b',
      endVertex: 'c',
      identifier: 'b_c'
    });

    expect(dfs(grph, 'a')).toEqual(['a','b','c']);
    expect(dfs(grph, 'b')).toEqual(['b','c', 'a']);
  });

  it(' should return path based on depth first search when a vertex has path to itself', function(){
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    grph.addVertex('d');
    
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b'
    });
    grph.addEdge({
      startVertex: 'b',
      endVertex: 'c',
      identifier: 'b_c'
    });
    grph.addEdge({
      startVertex: 'b',
      endVertex: 'd',
      identifier: 'b_d'
    });
    grph.addEdge({
      startVertex: 'c',
      endVertex: 'c',
      identifier: 'c_c'
    });
    grph.addEdge({
      startVertex: 'd',
      endVertex: 'a',
      identifier: 'd_a'
    });
    grph.addEdge({
      startVertex: 'd',
      endVertex: 'b',
      identifier: 'd_b'
    });

    expect(dfs(grph, 'a')).toEqual(['a','b','c','d']);
    expect(dfs(grph, 'b')).toEqual(['b','c','d','a']);
    expect(dfs(grph, 'c')).toEqual(['c','a','b', 'd']);
    expect(dfs(grph, 'd')).toEqual(['d','a','b', 'c']);
  });
})