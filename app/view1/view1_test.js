'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });

 describe("name changer", function(){
     it("gives you your ghanaian name", function(){
     	expect(first("Wednesday","male")).toEqual("Kwaku");
     	});
  	});

 // describe("date", function(){
 //    it("gives you the day of teh week", function(){
 //      expect(getTheDay("03 Jan 1993")).toEqual("Sunday");
 //    });
 // });

});