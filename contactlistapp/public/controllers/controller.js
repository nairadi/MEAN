// function AppCtrl() {
// 	console.log("Hello world from controller");
// }
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

    // $http.get('/contactlist').success(function(response){
    // 	console.log("I got the data I requested");
    // 	$scope.contactlist = response;
    // });

	$http({
      method: 'GET',
      url: '/contactlist'
    })
    .then(function(response) {
    	console.log("I got the data I requested");
      $scope.contactlist =  response.data;
    });


    
    $scope.addContact = function(){
      console.log($scope.contact);
      $http.post('/contactlist',$scope.contact);
    }    
    // $scope.contactlist = contactlist;

}]);
