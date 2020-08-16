import { quickSort } from '../quickSort';
import { testData, expectedResult } from './data';

describe('quick sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(quickSort(testData[key])).toEqual(expectedResult[key]);
  });
});