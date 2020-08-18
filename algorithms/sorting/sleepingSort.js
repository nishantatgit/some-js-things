/* 
    - This sort works only for non negative numbers 
*/

function sleepingSort(array, sortFunction){
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

  var sorted = false;
  var sleepingArray = [];

  for(var i = 0 ; i < len; i++){
    (function(j){
      setTimeout(function(){
        sleepingArray.push(array[j]);
        if(j === len - 1){
          array = sleepingArray;
          sorted = true;
        }
      },array[i])
    })(i);
  }

  while(!sorted)

  // var interval = Math.max.apply(null,array);
  // console.log('interval  ',interval);

  // while(!sorted){
  //   var sortedCheck = setTimeout(function(){
  //     if(array.length === sleepingArray.length){
  //       array = sleepingArray;
  //       sorted = true;
  //       clearTimeout(sortedCheck);
  //     }
  //   },interval);
  // }

  return array;
}