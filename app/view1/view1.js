'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

var monday_boy = "Kojo";
var monday_girl = "Adjoa";
var tuesday_boy = "Kwabena";
var tuesday_girl = "Abena";
var wednesday_boy = "Kwaku";
var wednesday_girl = "Akua";
var thursday_boy = "Yaw";
var thursday_boy = "Yaa";
var friday_boy = "Kofi";

function sharon ($scope){
	
    $scope.day_of_birth = "";
    $scope.gender = "";
    $scope.akan_name= function(){ 
     var y =$scope;
    	return first(y.day_of_birth,y.gender);
    }
}

function first(day_of_birth,gender){
	var akan_name;
	if(day_of_birth == "Monday"){
		if(gender == "m" || gender == "M"){
			akan_name = monday_boy;
		}else if(gender == "f"|| gender == "F"){
			akan_name = monday_girl;
		}
	}
	if(day_of_birth == "Tuesday"){
		if(gender == "m" || gender == "M"){
			akan_name = tuesday_boy;
		}else if(gender == "f" || gender == "F"){
			akan_name = tuesday_girl;
		}
	}
	if(day_of_birth == "Wednesday"){
		if(gender == "m" || gender == "M"){
			akan_name = wednesday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = wednesday_girl;
		}
	}
	return akan_name;
}

