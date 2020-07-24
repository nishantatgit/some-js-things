(function(){
 
  'use strict';

  var x = {
    a : 1,
    isX : true
  }

  var y = {
    b: 2,
    isY : true
  }

  Object.defineProperty(x,'nonEnumerableC', {
    writable : true,
    inumerable: false,
    configurable: false,
    value: 3
  });

  Object.defineProperty(y, 'nonEnumerableD', {
    writable: true,
    inumerable: false,
    configurable: false,
    value : 4
  });

  Object.setPrototypeOf(y,x);

  // "in" operator is used to check if  a property exists in the object or at any level in its 
  //  prototypal chain. If it exists it returns true. It checks for non-iumerable properties as well
 
  console.log('x ',x);
  console.log('y ', y);

  console.log("'a' in x", 'a' in x); // true;
  console.log("'b' in y", 'b' in y); // true;
  console.log("'isX' in y", 'isX' in y); // true;
  console.log("'nonEnumerableC' in x",'nonEnumerableC' in x); // true
  console.log("'nonEnumerableC' in y", 'nonEnumerableC' in y); // true
  console.log("'nonEnumerableD' in y", 'nonEnumerableD' in y); // true
  console.log("'hasOwnProperty' in y", 'hasOwnProperty' in y); // true as hasOwnProperrty is present at Object.prototype
  console.log("'someNonExistingThing' in y", 'someNonExistingThing' in y); // false

  // for-in loop in javascript returns all the properties of the object that are enumerable. It 
  // returns all the enumerable properties that are present in the object as well as at the heigher
  // level in the prototypal chain of the given object
  console.log('\nfor-in loop in y');

  for(var i in y){
    console.log(i,y[i]);
  }

  // hasOwnProperty can be used to determine if the property belongs to the object
  
  // prints only the properties that belong to y and not to the higher object in the prototypal 
  // chain
  
  console.log('\nfor-in loop with check for hasOwnProperty');

  for(var i in y){
    if(y.hasOwnProperty(i)){
      console.log(i,y[i]);
    }
  }
  // Object.keys returns all the eumerable properties of the object that are owned by the object
  // So using object.keys above code i example 2 can also be written as
  console.log('\niterating over object.keys');

  var yKeys = Object.keys(y);
  for(var i = 0 ; i < yKeys.length; i++){
    console.log(yKeys[i],y[yKeys[i]]);
  }

  // Object.getOwnPropertyNames returns an array of all the properties
  // which are owned by the object. This includes non-enumerable properties as well
  console.log('\nterating over object.getOwPropertyNames');
  
  var allYKeys = Object.getOwnPropertyNames(y);
  for(var i = 0 ; i < allYKeys.length; i++){
    console.log(allYKeys[i],y[allYKeys[i]]);
  }

  console.log();
})()