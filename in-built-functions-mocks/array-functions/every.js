(function(){

  Array.prototype.myEvery = function myEvery(fn){

    if(typeof fn !== 'function'){
      throw new TypeError(fn + ' is not a valid function');
    }

    var len = this.length;
    var result = true;

    for(var i = 0; i < len; i++){
      result = fn(this[i],i,this);
      if(!result){
        break;
      }
    }

    return result;
  }

  function testMyEvery(){
    var arr = [-1,2,3,4];
    console.log(arr.myEvery(v => v < 0)); // false
    console.log(arr.myEvery(v => v >= -1)); // true
  }

  testMyEvery();

})();