import { insertionSort } from '../insertionSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('insertion sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(insertionSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});