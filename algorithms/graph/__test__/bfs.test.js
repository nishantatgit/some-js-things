import { graph } from '../../../data-structures/graph/graph';
import { bfs } from '../bfs';

describe('depth first search ', function(){
  var grph;
  beforeEach(function(){
    grph = graph();
  });

  /* graph1 */
  it(' should return path based on breadth first search ', function(){
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

    expect(bfs(grph, 'a')).toEqual(['a','b','c']);
    expect(bfs(grph, 'b')).toEqual(['b','c', 'a']);
  });

  /* graph2 */
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

    expect(bfs(grph, 'a')).toEqual(['a','b','c','d']);
    expect(bfs(grph, 'b')).toEqual(['b','c','d','a']);
    expect(bfs(grph, 'c')).toEqual(['c','a','b', 'd']);
    expect(bfs(grph, 'd')).toEqual(['d','a','b', 'c']);
  });

  /* graph3 */
  it(' should return path based on depth first search when a there is cycle in graph', function(){
    
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    grph.addVertex('d');
    grph.addVertex('e');

    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b'
    });
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'd',
      identifier: 'a_d'
    });
    grph.addEdge({
      startVertex: 'b',
      endVertex: 'a',
      identifier: 'b_a'
    });
    grph.addEdge({
      startVertex: 'c',
      endVertex: 'b',
      identifier: 'c_b'
    });
    grph.addEdge({
      startVertex: 'c',
      endVertex: 'd',
      identifier: 'c_d'
    });
    grph.addEdge({
      startVertex: 'd',
      endVertex: 'e',
      identifier: 'd_e'
    });
    grph.addEdge({
      startVertex: 'e',
      endVertex: 'b',
      identifier: 'e_b'
    });
    grph.addEdge({
      startVertex: 'e',
      endVertex: 'c',
      identifier: 'e_c'
    });

    expect(bfs(grph, 'a')).toEqual(['a','b','d','e','c']);
    expect(bfs(grph, 'b')).toEqual(['b','a','d','e','c']);
    expect(bfs(grph, 'c')).toEqual(['c','b','d','a','e']);
    expect(bfs(grph, 'd')).toEqual(['d','e','b','c','a']);
    expect(bfs(grph, 'e')).toEqual(['e','b','c','a','d']);
  });
})