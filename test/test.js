var assert = require("chai").assert;
const app = require("../src/js/app");


describe('App',function(){
   it('app should return hello',function(){
       assert.equal(sayHello(),'hello');
   });

   it('should return type of string',function(){
       assert.typeOf(sayHello(),'number');
   });
});