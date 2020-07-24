(function (){
  Array.prototype.myReduce = function (fn,initialValue){
    var len = this.length;
    var acc = initialValue || this[0];
    var startIndex = initialValue ? 0 : 1;
    for(var i = startIndex; i< len; i++){
      acc = fn(acc,this[i],i,this)
    }
    return acc;
  }

  function testMyReducer(){
    var arr = [1,2,3,4];
    console.log(arr.myReduce((acc,v) => acc + v)); // 10
    console.log(arr.myReduce(function(acc,v){ return acc + v},5)) // 15
  }

  testMyReducer();

})();