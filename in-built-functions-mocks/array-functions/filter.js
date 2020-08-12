(function(){
  Array.prototype.myFilter = function(fn, thisArg){
    
    if(typeof fn !== 'Function'){
      throw new TypeError('Not a valid function');
    }

    var len = this.length;
    var filteredArray = [];
    
    var thisVal = thisArg || null;

    for(var i = 0 ; i < len; i ++){
      if(fn.call(thisVal,this[i],i,this)){
        filteredArray.push(this[i]);
      }
    }
    return filteredArray;
  };

  function testMyMap(){
    console.log([1,2,3,-1,0,-2].filter(v => v > 0)); // [1,2,3];
  }

  testMyMap();

  delete Array.prototype.myFilter; 
})()