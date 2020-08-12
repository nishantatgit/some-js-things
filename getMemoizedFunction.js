function getMemoizedFunction(fn){
  
  if(typeof fn !== 'Function'){
    throw new TypeError('Not a valid function');
  }

  var results = {};

  return function memoized(){
    var args = Array.prototype.slice.call(arguments,0);
    var argsKey = args.join('');
    if(!results[argsKey]){
      results[argsKey] = fn.apply(null,argsKey);
    }
    return results[argsKey]; 
  }
  
}