import { bubbleSort } from '../bubbleSort';
import { testData, expectedResult } from './data';

describe('bubble sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(bubbleSort(testData[key])).toEqual(expectedResult[key]);
  });
});