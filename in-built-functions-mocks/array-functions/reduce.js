(function (){
  Array.prototype.myReduce = function (fn,initialValue){
    
    if(typeof fn !== 'Function'){
      throw new TypeError('Not a valid function');
    }
    
    var len = this.length;
    var acc;
    var startIndex = 0;
   
    while(startIndex < len && !(startIndex in this)){
      startIndex += 1;
    }

    acc = arguments.length > 1 ? initialValue : this[startIndex++];
    
    for(var i = startIndex; i< len; i++){
      acc = fn(acc,this[i],i,this)
    }
    return acc;
  }

  function testMyReducer(){
    var arr = [1,2,3,4];
    console.log(arr.myReduce((acc,v) => acc + v)); // 10
    console.log(arr.myReduce(function(acc,v){ return acc + v},5)) // 15

    var arr2 = [];
    arr2[5] = 2;
    arr2[6] = 3;
    arr2[7] = 4;
    console.log(arr2.myReduce((acc,v) => acc + v)); // 9
    console.log(arr2.myReduce(function(acc,v){ return acc + v},31)); // 40
  }

  testMyReducer();

  delete Array.prototype.myReduce;

})();