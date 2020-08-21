import { graph } from '../../../data-structures/graph/graph';
import { detectCycle } from '../detectCycle';

describe('detect cycle ', function(){
  var grph;
  beforeEach(function(){
    grph = graph();
  });

  it('should return true if graph has cycle ', function(){
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

    expect(detectCycle(grph)).toEqual(true);
  });

  it('should return false if graph does not have cycle', function(){
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
    expect(detectCycle(grph)).toEqual(false);
  });

});