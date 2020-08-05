function bruteForceKnapSack(val,weight,capacity,bag={}){
  if(Object.prototype.toString.call(val) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type, number array expected');
  }
  if(Object.prototype.toString.call(weight) !== "[object Array]"){
    throw new TypeError(array + ' is of invalid type, number array expected');
  }
  var len = val.length;
  var maxTotal = -Infinity;
  var totalWeight = 0;
  for(var i = 0 ; i < len; i++){
    if(!bag[i]){
      bag[i] = true;
      if((capacity - val[i]) >= 0){
        totalWeight = weight[i] + bruteForceKnapSack(val,weight,capacity - val[i],bag);
      }
      if(maxTotal < totalWeight){
        maxTotal = totalWeight;
      }
      delete bag[i];
    }
  }
  return maxTotal;
}