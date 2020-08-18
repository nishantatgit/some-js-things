import { heapSort } from '../heapSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('heap sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(heapSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});