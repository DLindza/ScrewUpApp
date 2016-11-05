angular.module('screwUpApp.controllers', ['screwUpApp.services'])













.controller('TermsCtrl', function($scope, $stateParams, $http, getTerms) {

  $scope.terms = getTerms.terms;

})

.controller('ModalCtrl', function($scope, $stateParams,getTerms) {
  $scope.term = getTerms.terms[$stateParams.termid-1];


})

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

  
})

.controller('OutcomeCtrl', function($scope,$state, $http,budgetService,userService){
// var outcomeVM = this; 
    $scope.user = userService.getUser();
    console.log("Outside function:" + $scope.user.username);

   $scope.getMonthlyFromDataBase = function() {
     
     console.log("Outcome User: " + $scope.user.username); 
     var url = 'http://localhost:8080/user/' + $scope.user.username;
     $http.get(url)
    
    .then(function(response) {
      console.log("I am the outcome");
      console.log("MonthlyNet from Database: " + response.data);
      budgetService.setMonthlyNet(response.data);
      $scope.billtotal = budgetService.getBillTotal(); 
      $scope.billgoal = budgetService.getBillGoal();
      $scope.billpercent = budgetService.getBillPercent();
      $scope.monthlyremainder = budgetService.getMonthlyRemainder();
      $scope.funmoney = budgetService.getFunMoney();
      $scope.nestegg = budgetService.getNestEgg();
      $scope.expenses = budgetService.getExpenses();
      console.log("Outcome says Monthly Net is: " + budgetService.getMonthlyNet());
    }, function(response){
      $scope.errorMessage = "This page could not load."
    
    })
  }();
 
 console.log()



 $scope.toHome = function() {
       console.log("show me the money!");
       $state.transitionTo('tab.calculator');
     }
  
})

.controller('ResourcesCtrl', function($scope) {

});
