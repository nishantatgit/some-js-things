function quickSort(array, sortFunction){
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

  function sort(start,end){
    console.log(start,end);
    if(start >= end) return;
    var i = start;
    var j = start - 1;
    var pivot = array[end];
    while(i < end){
      if(sortFunction(array[i],pivot) < 0){
        j++;
        if(array[i] !== array[j]){
          var tmp = array[j];
          array[j] = array[i];
          array[i] = tmp;
        }
      }
      i++;
    }
    
    tmp = array[j+1];
    array[j+1] = array[end];
    array[end] = tmp;

    sort(start,j);
    sort(j+2,end);
  }
  
  sort(0,len-1);
  
  return array;
}

