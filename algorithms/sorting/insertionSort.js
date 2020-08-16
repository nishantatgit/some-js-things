function insertionSort(array, sortFunction){
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

  for(var i = 1; i < len; i++){
    for(var j = 0; j < i; j++){
      if(sortFunction(array[j],array[i]) > 0){
        var tmp = array[i];
        for(var k = i; k >= j; k--){
          array[k] = array[k-1];
        }
        array[j] = tmp;
      }
    }
  }

  return array;
}

export { insertionSort }