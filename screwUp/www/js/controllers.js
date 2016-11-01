angular.module('screwUpApp.controllers', ['screwUpApp.services'])



.controller('AdviserCtrl', function($scope, $state, $cordovaGeolocation) {
var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

//wait until the map is loaded
    google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });

            });

            google.maps.event.addListenerOnce($scope.map, 'idle', function () {

                var marker = new google.maps.Marker({
                    map: $scope.map,
                    animation: google.maps.Animation.DROP,
                    position: latLng
                });

                var infoWindow = new google.maps.InfoWindow({
                    content: "Here I am! Number One Financial Advisor - 1105 N. Market Street Wilmington, DE  - Call me at 1-800-SCREWUP"
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open($scope.map, marker);
                });

            });
 
  }, function(error){
    console.log("Could not get location");
  });
})



.controller('CalculatorCtrl', function($scope) {
  $scope.post = {
    age: '',
    salary: '',
    retirement: ''
  };

  $scope.message = '';
  $scope.heading = '';
  $scope.image = '';

  var goalAge = 35;
  var timeToGoal = 17;
  var retirementGoal;
  $scope.retirementDiff;
  var percentAge;
  var percent;


  $scope.calculate = function() {
   percentAge = timeToGoal - (goalAge - $scope.post.age);
   percent = percentAge/timeToGoal;
   retirementGoal = Math.round(percent * $scope.post.salary);

   retirementDiff = $scope.post.retirement - retirementGoal;


    if (retirementGoal <= $scope.post.retirement) {
      $scope.heading = "Congrats! You're already a ScrewUp! ";
      $scope.message = " Meaning you are doing a great job of preparing for your future! You are $" + retirementDiff + " above your goal! Check out Become a financial genius for more information.";
      $scope.image = "img/party-clip-art-party-clip-art-free-downloads.jpg";

    } else {
      $scope.heading = "You are not a ScrewUp ... yet!";
      $scope.message = "  There is still hope for you! You are currently $" + retirementDiff + " away from the goal. Did you know by age 35 you should have a year of your desired salary saved for retirement? It IS possible!!! Money actually can grow on trees - even if you don't think you have " +
        "money to spare!! Check out 'Be a Financial Genius' for more details.";
      $scope.image = "img/notthereyet.jpg";
    }
  };



})



.controller('TermsCtrl', function($scope, $stateParams, $http, getTerms) {

  $scope.terms = getTerms.terms;

})

.controller('ModalCtrl', function($scope, $stateParams,getTerms) {
  $scope.term = getTerms.terms[$stateParams.termid-1];


})

.controller('BudgetCtrl', function($scope, $state, budgetService){
   $scope.post = {
    paycheck: '',
    occurence: ''
   
  };

    $scope.expense = {
      name: '',
      cost: ''
    };
   
     $scope.toOutcome = function($scope, $state) {
       $state.transitionTo('budget-outcome')
     };

     $scope.callToAddBudgetInfo= function() {
        budgetService.findMonthlyNet($scope.post.paycheck, $scope.post.occurence);
        $scope.toOutcome; 
     }; 

     $scope.callToAddExpense= function() {
       budgetService.addExpense($scope.expense.cost); 
       console.log($scope.expense.cost);
     };
  
})

.controller('OutcomeCtrl', function($scope){

  $scope.message = '';
  $scope.heading = '';
  $scope.image = '';
})


.controller('ResourcesCtrl', function($scope) {

});
