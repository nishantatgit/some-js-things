import { graph } from '../graph';
import { expectedResult } from '../../../algorithms/sorting/__test__/data';

describe('graph', function(){
  var grph = graph();

  it('should add vertex to graph ', function(){
    grph.addVertex('a',11);
    expect(grph.getVertexValue('a')).toEqual(11);
  });

  it('should add edge to the graph', function(){
    grph.addEdge({
      startVertex: 'a',
      endVertex: 'b',
      identifier: 'a-b',
      value: 11
    });
    expect(grph.getEdgeValue('a-b')).toEqual(11);
  });
})


