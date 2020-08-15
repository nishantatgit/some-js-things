(function(){
  
  Array.prototype.mySome = function mySome(fn){

    if(typeof fn !== 'function'){
      throw new TypeError(fn + ' is not a valid function');
    }

    var len = this.length;
    var result = false;
    
    for(var i = 0; i < len; i++){
      result = fn(this[i],i,this);
      if(result){
        break;
      }
    }

    return result;
  }
  
  function testMySome(){
    var arr = [-1,2,3,4];
    console.log(arr.mySome(v => v < 0)); // true
    console.log(arr.mySome(v => v < -1)); // false
  }

  testMySome();

})()