angular.module('screwUpApp.controllers', ['screwUpApp.services'])

.controller('loginCtrl', function($scope,$http,$state,userService, budgetService) {
  var password = '';
  $scope.errorMessage = '';

  $scope.userLogin = {
    "username": '',
    "password": '',

  }

  $scope.login = function() {
    var url = 'http://localhost:8080/findByUsername/' + $scope.userLogin.username;
    $http.get(url)
    
    .then(function(response) {
      userService.setUser(response.data);
      console.log("Database User: " + response.data.username);
      console.log("Ionic User: " + $scope.userLogin.username);

      if(response.data.username === $scope.userLogin.username && response.data.password === $scope.userLogin.password){
         $state.transitionTo("budget-outcome");  
      } else {
          $scope.errorMessage = "Username or Password is incorrect." 
      }
    }, function(response){
      $scope.errorMessage = "This page could not load."
    
    })
    
  }

   
   
   $scope.newScrewUp = function() {
     $state.transitionTo("newScrewUp");
   }

})







.controller('editAccountCtrl', function($scope,$http,$state,budgetService, userService){
  $scope.user = userService.getUser(); 

  $scope.post = {
    "paycheck": "",
    "occurrence": "",
  }

 

    var clearPost = function() {
      $scope.post.paycheck ="";
      $scope.post.occurrence = "";
    }



       $scope.toOutcome = function() {
       console.log("show me the money!");
       $state.transitionTo('budget-outcome');
      
     }

 

 $scope.callToAddBudgetInfo= function() {

    budgetService.findMonthlyNet($scope.post.paycheck, $scope.post.occurrence);
    $scope.monthlyNet = budgetService.getMonthlyNet(); 
    console.log("monthlyNet:" + $scope.monthlyNet);

    var url = 'http://localhost:8080/user/' + $scope.user.username;
    $http.post(url, $scope.monthlyNet)
    
    .then(function(response) {
      console.log(response);
    }, function(response){
      $scope.errorMessage = "This page could not load."
    
    })
        clearPost();
        $scope.toOutcome(); 
        
     }

  $scope.expense = {
      "name": "",
      "cost": ""
    }

   var clearExpense = function() {
      $scope.expense.name = "";
      $scope.expense.cost = "";
    }

     $scope.callToAddExpense= function() {

    budgetService.addExpense($scope.expense);
    console.log("posted expense:" + $scope.expense.name + $scope.expense.cost);

    var url = 'http://localhost:8080/expense/' + $scope.user.username;
    $http.post(url, $scope.expense)

    .then(function(response) {
      console.log($scope.expense);
      console.log(response.data);
      console.log(response.data.name + ":" + response.data.cost);
      clearExpense();
    }, function(response){
      $scope.errorMessage = "This page could not load."
    
    })
       
     }

})



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
