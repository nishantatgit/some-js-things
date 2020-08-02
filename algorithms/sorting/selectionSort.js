function selectionSort(array, sortFunction){
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

  for(var i = 0; i < len - 1; i++){
    for(var j = i+1 ; j < len ; j++){
      if(sortFunction(array[i],array[j]) > 0){
        var tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
      }
    }
  }  

  return array;
}