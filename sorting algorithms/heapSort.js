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
    console.log('array' ,array);
  }

  var mid = Math.floor(len/2);

  //build max heap;
  for(var i = mid; i >=0 ; i--){
    console.log('i',i);
    maxHeapify(len-1,i);
  }

  console.log('array after max heap', array);

  for(var i = len - 1; i > 0; i--){
    maxHeapify(i,0);
    var tmp = array[0];
    array[0] = array[i];
    array[i] = tmp;
    console.log('maxHeapify ', array);
  }

  return array;
}

// 0, 1, 2, 3, 4 , 5, 6, 7, 8 

// 0 2n + 1 = 2 * 0 + 1 = 1
//   2n + 2 = 2 * 0 + 2 = 2

// 1 2n + 1 = 2 * 1 + 1 = 3
//   2n + 2 = 2 * 1 + 2 = 4

// 2 2n + 1 = 2 * 2 + 1 = 5
//   2n + 2 = 2 * 2 + 2 = 6

// 3 2n + 1 = 2 * 3 + 1 = 7
//   2n + 2 = 2 * 3 + 2 = 8

// 4 2n + 1 = 2 * 4 + 1 = 9
//   2n + 2 = 2 * 4 + 2 = 10

// 5 2n + 1 = 2 * 5 + 1 = 11
//   2n + 2 = 2 * 5 + 2 = 12
