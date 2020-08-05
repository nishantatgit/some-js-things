function bruteForceKnapSack(val,weight,capacity,bag={}){
  if( capacity <= 0){
    return 0;
  }

  var len = val.length;
  var maxTotal = -Infinity;

  for(var i = 0 ; i < len; i++){
    if(!bag[i]){
      bag[i] = true;
      var totalWeight = 0
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