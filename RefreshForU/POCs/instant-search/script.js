// Define a new module for our app
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

	// All filters must return a function. The first parameter
	// is the data that is to be filtered, and the second is an
	// argument that may be passed with a colon (searchFor:searchString)

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		// Using the forEach helper method to loop through the array
		angular.forEach(arr, function(item){

			if(item.Title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

// The controller

function InstantSearchController($scope, $http) {

	// The data model. These items would normally be requested via AJAX,
	// but are hardcoded here for simplicity. See the next example for
	// tips on using AJAX.

    $http({ method: 'GET', url: 'http://miapgkhematarwd.msad.ms.com/RefreshLiveConfig/api/Values/' })
 .success(function(data, status, headers, config){
     //Logic to be executed upon successful completion of the request
     //Will be called asynchronousy
     $scope.items = data;
 })
 .error(function(data, status, headers, config){
     //Logic to be executed when the request is unsuccessful
     //Will be called asynchronously
 });
    
    //$scope.items = [
    //	{
    //		url: 'http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/',
    //		title: '50 Must-have plugins for extending Twitter Bootstrap',
    //	},
    //	{
    //		url: 'http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/',
    //		title: 'Making a Super Simple Registration System With PHP and MySQL',
    //	},
    //	{
    //		url: 'http://tutorialzine.com/2013/08/slideout-footer-css/',
    //		title: 'Create a slide-out footer with this neat z-index trick',
    //	}
    //];


}
