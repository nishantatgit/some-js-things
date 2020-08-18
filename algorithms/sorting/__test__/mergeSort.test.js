import { mergeSort } from '../mergeSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('merge sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(mergeSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});