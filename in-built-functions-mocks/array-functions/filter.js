(function(){
  Array.prototype.myFilter = function(fn, thisArg){
    
    if(typeof fn !== 'function'){
      throw new TypeError(fn + ' is not a valid function');
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

  function testMyFilter(){
    console.log([1,2,3,-1,0,-2].myFilter(v => v > 0)); // [1,2,3];
  }

  testMyFilter();

  delete Array.prototype.myFilter; 
})()