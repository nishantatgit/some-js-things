import { bubbleSort } from '../bubbleSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('bubble sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(bubbleSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});