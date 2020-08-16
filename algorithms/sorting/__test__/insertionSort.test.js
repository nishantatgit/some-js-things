import { insertionSort } from '../insertionSort';
import { testData, expectedResult } from './data';

describe('insertion sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(insertionSort(testData[key])).toEqual(expectedResult[key]);
  });
});