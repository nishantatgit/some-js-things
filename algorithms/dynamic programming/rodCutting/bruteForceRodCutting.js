function rodCutting(priceArray,size){

  if(Object.prototype.toString.call(array) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type, number array expected');
  }

  var totalAmountArray = [];
  
  if(size === 0){
    return 0;
  }
  if(size === 1){
    return array[0];
  }

  for(var i = size ; i > 0; i--){
    totalAmountArray.push(array[i-1] + rodCutting(array,size - i));
  }

  return Math.max.apply(null,totalAmountArray);
}