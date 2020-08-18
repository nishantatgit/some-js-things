import { selectionSort } from '../selectionSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('selection sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(selectionSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});