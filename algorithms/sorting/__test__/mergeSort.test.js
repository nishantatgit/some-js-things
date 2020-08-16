import { mergeSort } from '../mergeSort';
import { testData, expectedResult } from './data';

describe('merge sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(mergeSort(testData[key])).toEqual(expectedResult[key]);
  });
});