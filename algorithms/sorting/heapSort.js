function heapSort(array, sortFunction){
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

  function maxHeapify(len,nodeIndex){
    for(var i = nodeIndex ; i <= len ; i = max){
      var leftNodeIndex = i * 2 + 1;
      var rightNodeIndex = i * 2 + 2;
      var max = i;
      if(leftNodeIndex <= len){
        max = sortFunction(array[max],array[leftNodeIndex]) > 0 ? max : leftNodeIndex;
      }
      if(rightNodeIndex <= len){
        max = sortFunction(array[max],array[rightNodeIndex]) > 0 ? max : rightNodeIndex;
      }
      if(max === i) break;
      var tmp = array[i];
      array[i] = array[max];
      array[max] = tmp;
      
    }
  }

  var mid = Math.floor(len/2);

  //build max heap;
  for(var i = mid; i >=0 ; i--){
    maxHeapify(len-1,i);
  }

  for(var i = len - 1; i > 0; i--){
    maxHeapify(i,0);
    var tmp = array[0];
    array[0] = array[i];
    array[i] = tmp;
  }

  return array;
}

module.exports = heapSort;