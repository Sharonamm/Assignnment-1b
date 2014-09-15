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
var thursday_girl = "Yaa";
var friday_boy = "Kofi";
var friday_girl = "Afia";
var saturday_boy = "Kwame";
var saturday_girl = "Ama";
var sunday_boy = "Kwesi";
var sunday_girl = "Akosua";

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
	if(day_of_birth == "Monday" || day_of_birth == "monday"){
		if(gender == "m" || gender == "M"){
			akan_name = monday_boy;
		}else if(gender == "f"|| gender == "F"){
			akan_name = monday_girl;
		}
	}
	if(day_of_birth == "Tuesday" || day_of_birth == "tuesday"){
		if(gender == "m" || gender == "M"){
			akan_name = tuesday_boy;
		}else if(gender == "f" || gender == "F"){
			akan_name = tuesday_girl;
		}
	}
	if(day_of_birth == "Wednesday" || day_of_birth == "wednesday"){
		if(gender == "m" || gender == "M"){
			akan_name = wednesday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = wednesday_girl;
		}
	}
	if(day_of_birth == "Thursday" || day_of_birth == "thursday" ){
		if(gender == "m" || gender == "M"){
			akan_name = thursday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = thursday_girl;
		}
	}
	if(day_of_birth == "Friday" || day_of_birth == "friday"){
		if(gender == "m" || gender == "M"){
			akan_name = friday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = friday_girl;
		}
	}
	if(day_of_birth == "Saturday" || day_of_birth == "saturday"){
		if(gender == "m" || gender == "M"){
			akan_name = saturday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = saturday_girl;
		}
	}
	if(day_of_birth == "Sunday" || day_of_birth == "sunday"){
		if(gender == "m" || gender == "M"){
			akan_name = sunday_boy;
		}else if(gender == "f" || gender == "F") {
			akan_name = sunday_girl;
		}
	}
	return akan_name;
}

