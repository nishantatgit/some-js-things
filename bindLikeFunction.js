/* below code is polyfill for bind */
(function (){

  /* first implementation */
  Function.prototype.myBind = function (context){
    var fn = this;
    return function(){
      var args = Array.prototype.slice.call(arguments,0);
      return fn.apply(context,args);
    }
  }

  function testMyBind(){
    function greet(greeting,punctuation){
      return `${greeting} ${this.name}${punctuation}`;
    }

    var person = { name : 'Nishant' };

    var  boundGreet = greet.myBind(person);
    console.log(boundGreet('Hi','!')); // Hi Nishant!

    var curriedGreet = greet.myBind(person,'Hi');
    console.log(curriedGreet('!')); // ! Nishantundefined 
  }

  console.log('\n--- testing myBind ---\n');
  testMyBind();

  /* As evident the first implementation doesnot support currying so 
     second implementation */

  Function.prototype.myBind2 = function (context){
    var fn = this;
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
      var restArgs = Array.prototype.slice.call(arguments,0);
      var allArgs = args.concat(restArgs);
      return fn.apply(context,allArgs);
    }
  }

  function testMyBind2(){
    function greet(greeting,punctuation){
      return `${greeting} ${this.name}${punctuation}`;
    }

    var person = { name : 'Nishant' };

    var  boundGreet = greet.myBind2(person);
    console.log(boundGreet('Hi','!')); // Hi Nishant!

    var curriedGreet = greet.myBind2(person,'Hi');
    console.log(curriedGreet('!')); // Hi Nishant! 
  }

  console.log('\n--- testing myBind 2---\n');
  testMyBind2();

})()