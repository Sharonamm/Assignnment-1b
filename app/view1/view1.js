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

var gen = " ";
var bdate = " ";
var thing = " ";

function sharon ($scope){
	
	$scope.birthday = bdate;
	//$scope.birthday = "01/03/1993";
	$scope.day = function(){
		var dayy = $scope.birthday;
		return getTheDay(dayy);
		// console.log(dayy);
	};

    $scope.gender =  gen;
    console.log($scope)
    // $scope.gender = "";
    $scope.akan_name= function(){ 
     var y =$scope;
    	return first(y.bdate,y.gen);
    };
}

function first(birthday,gender){
	var akan_name;
	if(birthday == "Monday" || birthday == "monday"){
		if(gender == "male" || gender == "Male"){
			akan_name = monday_boy;
		}else if(gender == "female"|| gender == "Female"){
			akan_name = monday_girl;
		}
	}
	if(birthday == "Tuesday" || birthday == "tuesday"){
		if(gender == "male" || gender == "Male"){
			akan_name = tuesday_boy;
		}else if(gender == "female" || gender == "Female"){
			akan_name = tuesday_girl;
		}
	}
	if(birthday == "Wednesday" || birthday == "wednesday"){
		if(gender == "male" || gender == "Male"){
			akan_name = wednesday_boy;
		}else if(gender == "female" || gender == "Female") {
			akan_name = wednesday_girl;
		}
	}
	if(birthday == "Thursday" || birthday == "thursday" ){
		if(gender == "male" || gender == "Male"){
			akan_name = thursday_boy;
		}else if(gender == "female" || gender == "Female") {
			akan_name = thursday_girl;
		}
	}
	if(birthday == "Friday" || birthday == "friday"){
		if(gender == "male" || gender == "Male"){
			akan_name = friday_boy;
		}else if(gender == "female" || gender == "Female") {
			akan_name = friday_girl;
		}
	}
	if(birthday == "Saturday" || birthday == "saturday"){
		if(gender == "male" || gender == "Male"){
			akan_name = saturday_boy;
		}else if(gender == "female" || gender == "Female") {
			akan_name = saturday_girl;
		}
	}
	if(birthday == "Sunday" || birthday == "sunday"){
		if(gender == "male" || gender == "Male"){
			akan_name = sunday_boy;
		}else if(gender == "female" || gender == "Female") {
			akan_name = sunday_girl;
		}
	}
	return akan_name;
}

function getTheDay($date)

{

var myDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

var myDate=new Date(eval('"'+$date+'"'))

return myDays[myDate.getDay()]

//document.form1.textDay.value=myDays[myDate.getDay()]

}




    // FB.login(function(){}, {scope: 'publish_actions'});

// {scope: 'publish_actions'});

 //    FB.getLoginStatus(function(response) {
 //  if (response.status === 'connected') {
 //    console.log('Logged in.' + response.name + '.');
 //  }
 //  else {
 //    FB.login();
 //  }
	// });
 //  };





 // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '651745401589954',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.1' // use version 2.1
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('me?fields=id,name,birthday,gender', function(response) {
      console.log('Successful login for: ' + response.name);
      console.log('Successful login for: ' + response.gender);
      console.log('Successful login for: ' + response.birthday);

      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
         document.getElementById('gender').innerHTML = response.gender;
         document.getElementById('birthday').innerHTML = response.birthday;
         gen = response.gender;
         bdate = response.birthday;
        
         console.log(gen);
         console.log(bdate);
         var days = getTheDay(bdate);
         var t = first(days,gen);
         console.log(t);
         thing = t;
         document.getElementById('aname').innerHTML = thing;
         //console.log(thing);
         //$scope.thing = t;
    });
  };
  // document.getElementById('name').innerHTML = response.name ;

        // document.getElementById('birthday').innerHTML = response.birthday ;
     

//   FB.api(
//     "/me/",
//     function (response) {
//       if (response && !response.error) {
//         /* handle the result */
//             }
//     }
// );
