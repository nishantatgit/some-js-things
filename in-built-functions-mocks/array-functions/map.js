(function(){
  Array.prototype.myMap = function(fn){
    
    if(typeof fn !== 'Function'){
      throw new TypeError('Not a valid function');
    }

    var len = this.length;
    var mappedArray = [];
    for(var i = 0 ; i < len; i ++){
      mappedArray.push(fn(this[i],i,this));
    }
    return mappedArray;
  };

  function testMyMap(){
    console.log([1,2,3].myMap(v => v + 1)); // [2,3,4];
    var arr = [2,3,4];
    arr[11] = 31;
    console.log(arr.myMap(v => v + 1)); //  [3,4,5, <7 empty slots>, 32];
  }

  testMyMap();

  delete Array.prototype.myMap; 
})()