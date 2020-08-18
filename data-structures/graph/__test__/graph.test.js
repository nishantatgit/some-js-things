import { graph } from '../graph';
import { expectedResult } from '../../../algorithms/sorting/__test__/data';

describe('graph', function(){
  var grph;
  
  beforeEach(function(){
    grph = graph();
  });

  it('should add vertex to graph ', function(){
    grph.addVertex('a',11);
    expect(grph.getVertexValue('a')).toEqual(11);
  });

  it('should add edge to the graph', function(){
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b',
      value: 11
    });
    expect(grph.getEdgeValue('a_b')).toEqual(11);
  });

  it('should check if vertices in the graph are adjacent ', function(){
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b',
      value: 11
    });
    expect(grph.adjacent('a','b')).toEqual(true);
    expect(grph.adjacent('b','a')).toEqual(false);
  });

  it('sould return all the adjacent vertices of the graph', function(){
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
    expect(grph.neighbors('a')).toEqual(['b','c']);
  });

  it('should return adjacency list', function(){
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
    expect(grph.neighbors('a')).toEqual(['b','c']);
    expect(grph.getAdjacencyList()).toEqual({
      'a': ['b','c'],
      'b': ['c'],
      'c': []
    });
  });

  it('should return adjacency matrix', function(){
    grph.addVertex('a');
    grph.addVertex('b');
    grph.addVertex('c');
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a_b',
      value: 1
    });
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'c',
      identifier: 'a_c',
      value: 2
    });
    grph.addEdge({
      startVertex: 'b',
      endVertex: 'c',
      identifier: 'b_c',
      value: 3
    });
    expect(grph.neighbors('a')).toEqual(['b','c']);
    expect(grph.getAdjacencyMatrix()).toEqual([
      [0,1,2],
      [0,0,3],
      [0,0,0]
    ]);
  });
  

});


