function mergeSort(array, sortFunction){
  function defaultSortFunction(a,b){
    return a-b;
  }
  
  if(Object.prototype.toString.call(array) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type');
  }

  var len = array.length;

  if(len === 0 || len === 1) {
    return array;
  }

  sortFunction = sortFunction || defaultSortFunction;

  var sortedCopy = [];

  function merge(start,middle,end){
    const leftArray = [];
    const rightArray = [];
    for(var i = start; i <= end; i++){
      if(i <= middle){
        leftArray[i] = array[i];
      } else {
        rightArray[i] = array[i];
      }
    }
    for(var i = start, j = middle +1, k = start; i <= middle && j <=end; k++){
      if(sortFunction(leftArray[i],rightArray[j]) > 0){
        array[k] = rightArray[j++];
      } else {
        array[k] = leftArray[i++];
      }
    }

    while(i <= middle){
      array[k++] = leftArray[i++];
    }

    while(j <= end){
      console.log('j ',j);
      array[k++] = rightArray[j++];
    }
  }

  function mergeSortArray(start,end){
    if(start >= end) return;
    var middle = Math.floor((start + end) / 2);
    mergeSortArray(start,middle);
    mergeSortArray(middle+1,end);
    merge(start,middle,end);
  }

  mergeSortArray(0,len-1);

  return array;
}