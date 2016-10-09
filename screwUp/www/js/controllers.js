angular.module('starter.controllers', [])

.controller('AdviserCtrl', function($scope, $http) {
  // $scope.location = {
  //   address: '',
  // };
  //
  // $scope.getData = function() {
  //   $http.get("https://maps.googleapis.com/maps/api/place/nearbysearch/output?parameters,
  //     { params: {
  //     "key": "AIzaSyDVSJzZK-utBPG9zpnmBVD8FDTS9HA4p3s",
  //     "location": $scope.location.address,
  //     "keyword": "financial advisers",
  //     "rankby" : "prominence"} })
  //     .success(function(data) {
  //       $scope.firstname = data.firstname;
  //       $scope.lastname = data.lastname;
  //     })
  //     .error(function(data) {
  //       alert("ERROR");
  //     });
  // }

})


.controller('CalculatorCtrl', function($scope,$location) {
  $scope.post = {
    age: '',
    salary: '',
    retirement: ''
  };

  $scope.message = '';
  $scope.heading = '';

  var goalAge = 35;
  var timeToGoal = 17;
  var retirementGoal;
  var retirementDiff;
  var percentAge;
  var percent;


  $scope.calculate = function() {
   percentAge = timeToGoal - (goalAge - $scope.post.age);
   percent = percentAge/timeToGoal;
   retirementGoal = Math.round(percent * $scope.post.salary);

   retirementDiff = $scope.post.retirement - retirementGoal;


  //   // $scope.goalIsMet();
  // };
  //
  //
  // $scope.goalIsMet = function() {

    /// instead of sending them to different pages - send them to one page that has different attributes depending on the outcome...#roberto'd
    if (retirementGoal <= $scope.post.retirement) {
      //$location.path("/calculator-congratsDetail.html");
      // sysout - you are retirementDiff over your goal! Great Job!
      $scope.heading = "Congrats! You're already a ScrewUp! "
      $scope.message = " Meaning you are doing a great job of preparing for your future! You are $" + retirementDiff + " above your goal! Check out Become a financial genius for more information."

    } else {
      //$location.path("/calculator-screwUpDetail.html");
      // sysout - you are retirementDiff under your goal! Great Job!

      $scope.heading = "You are not a ScrewUp ... yet!"
      $scope.message = "  There is still hope for you! You are currently $" + retirementDiff + " away from the goal. Did you know by age 35 you should have a year of your desired salary saved for retirement? It IS possible!!! Money actually can grow on trees - even if you don't think you have " +
        "money to spare!! Check out Become a financial genius for more details."
    }
  };



})

.controller('CongratsCtrl', function($scope, $stateParams) {
 // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ScrewUpCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('TermsCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ResourcesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
