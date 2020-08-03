function rodCutting(priceArray,size){

  if(Object.prototype.toString.call(priceArray) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type, number array expected');
  }

  var totalAmountArray = [];

  if(size === 0){
    return 0;
  }
  if(size === 1){
    return priceArray[0];
  }

  var maxValue = -Infinity;

  for(var i = size ; i > 0; i--){
     var currentValue = priceArray[i-1] + rodCutting(priceArray,size - i);
     if(maxValue < currentValue){
       maxValue = currentValue;
     } 
  }

  return maxValue;
}