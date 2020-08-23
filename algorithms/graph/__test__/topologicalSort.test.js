import { graph } from '../../../data-structures/graph/graph';
import { topologicalSort } from '../topologicalSort';
describe('topological sort', function(){
  var grph;
  
  beforeEach(function(){
    grph = graph();
  });

  /* graph1 */
  it('should sort the graph in topological order', function(){
    var grph = graph();
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

    expect(topologicalSort(grph)).toEqual(['a','b','c']);
  });

  /* graph6 */ 
  it('should sort the graph in topological order - graph 6', function(){
    var grph = graph();
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    grph.addVertex('d');
    grph.addVertex('e');
    grph.addVertex('f');
    grph.addVertex('g');
    
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b'
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
      startVertex: 'e',
      endVertex: 'd',
      identifier: 'e_d'
    });
    grph.addEdge({
      startVertex: 'e',
      endVertex: 'f',
      identifier: 'e_f'
    });
    grph.addEdge({
      startVertex: 'e',
      endVertex: 'g',
      identifier: 'e_g'
    });
    grph.addEdge({
      startVertex: 'f',
      endVertex: 'g',
      identifier: 'f_g'
    });

    expect(topologicalSort(grph)).toEqual(['a','c','e','b','d','f','g']);
  });

  /* graph4 */
  it('should throw error if graph has cycle ', function(){
    var grph = graph();
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    grph.addVertex('d');
    grph.addVertex('e');
    grph.addVertex('f');
    grph.addVertex('g');
    
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b'
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
      startVertex: 'e',
      endVertex: 'd',
      identifier: 'e_d'
    });
    grph.addEdge({
      startVertex: 'e',
      endVertex: 'f',
      identifier: 'e_f'
    });
    grph.addEdge({
      startVertex: 'g',
      endVertex: 'e',
      identifier: 'g_e'
    });
    grph.addEdge({
      startVertex: 'f',
      endVertex: 'g',
      identifier: 'f_g'
    });

    expect(function(){topologicalSort(grph)}).toThrowError(/^topological sorting cannot be done for graphs containing cycle$/);
  });
});