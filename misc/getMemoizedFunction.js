function getMemoizedFunction(fn){
  
  if(typeof fn !== 'function'){
    throw new TypeError(fn + ' is not a valid function');
  }

  var results = {};

  return function memoized(){
    var args = Array.prototype.slice.call(arguments,0);
    var argsKey = args.join('');
    if(!results[argsKey]){
      results[argsKey] = fn.apply(null,args);
    }
    return results[argsKey]; 
  }

}