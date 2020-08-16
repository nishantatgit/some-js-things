import { selectionSort } from '../selectionSort';
import { testData, expectedResult } from './data';

describe('selection sort ', function(){
  var testDataKeys = Object.keys(testData);
  test.each(testDataKeys)('%i should sort number array is non decreasing order ', function(key){
    expect(selectionSort(testData[key])).toEqual(expectedResult[key]);
  });
});