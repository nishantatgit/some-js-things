import { quickSort } from '../quickSort';
import { testData, expectedResult } from './data';
import { comparators } from './comparator';

describe('quick sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%s: should sort array is non decreasing order ', function(key){
    expect(quickSort(testData[key],comparators[key])).toEqual(expectedResult[key]);
  });
});