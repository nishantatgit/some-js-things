import { heapSort } from '../heapSort';
import { testData, expectedResult } from './data';

describe('heap sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(heapSort(testData[key])).toEqual(expectedResult[key]);
  });
});