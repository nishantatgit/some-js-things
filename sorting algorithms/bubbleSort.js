function bubbleSort(array, sortFunction){
  function defaultSortFunction(a,b){
    return a-b;
  }
  
  if(Object.prototype.toString.call(array) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type');
  }

  if(!array){
    throw new TypeError( array + ' is of invalid type');
  }

  var len = array.length;

  if(len === 0 || len === 1) {
    return array;
  }

  sortFunction = sortFunction || defaultSortFunction;

  for(var i = len - 1; i > 0; i--){
    var swapped = false;
    for(var j = 0; j < i; j++){
      if(sortFunction(array[j],array[j+1]) > 0){
        var tmp = array[j+1];
        array[j+1] = array[j]
        array[j] = tmp;
        swapped = true;
      }
    }

    if(!swapped){
      break;
    }
  }

  return array;
}