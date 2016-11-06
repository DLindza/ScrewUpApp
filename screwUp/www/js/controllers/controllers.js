angular.module('screwUpApp.controllers', ['screwUpApp.services'])


.controller('newScrewUpCtrl', function($scope, $state, $http,userService, budgetService){

   $scope.user = {
      "username": "",
      "password": ""
      
    }
  userService.setUser($scope.user);
  
  $scope.message = "",
 
	$scope.backToLogin = function() {
		$state.transitionTo("login");
	}

	$scope.submitNewUser = 
  function() {
		console.log($scope.user);

		$http.post('http://localhost:8080/user' , $scope.user)
	    .then(function (response) {
        $scope.message = response.data.message;
	    })
	  }, 
    function() {
		$scope.message = "Sorry there was a server error.";
	  }

     $scope.toCreateAccount = function() {
       $scope.submitNewUser();
       $state.transitionTo('editAccount');
     }
   
   $scope.billtotal = budgetService.getBillTotal();

  
});




