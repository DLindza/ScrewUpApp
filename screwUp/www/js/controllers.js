angular.module('screwUpApp.controllers', [])

.service('getTerms', function () {
   // var terms = [];
  this.terms = [

    {
      "id": "1",
      "name": "Money grows on trees",
      "phrase": "Compound Interest",
      "description": "Yeah! It's a thing. Investments man, investments. When you invest (or have someone who knows what they're doing invest for you) there's something called compound interest. It's like reverse student loans. The stock has an interest on it and this time you get the benefit.For example: If you invest $1,000 and it has 10% interest growth on it - in 20 years you will have over $7,000!-->The longer you are invested the longer your interest has to grow. So, start investing as early as possible."
    },
    {
      "id": "2",
      "name": "I can get $$$ for nothing?",
      "phrase": "Dividend Stocks",
      "description": "Yeah! It's also a thing. Some stocks basically have customer loyalty rewards. It varies per stock. Many stocks will pay you a small amount every quarter for being an investor. Free money!"
    },
    {
      "id": "3",
      "name": "Financial Planners: What do they want from me?!?!",
      "phrase": "Financial Planners",
      "description": "They are there to help! See the Find Help tag to find one near you. Or Resources for a helpful article on what to look for. It is important to get help unless you're really dedicated and keep an almost daily eye on the stock market and do your research. But a planner does all of that for you and can help make recommendations. If a planner doesn't help your money grow- then he either doesn't get paid or loses your as a client and still won't get paid. It is their one goal and job in life to help your money grow.They get paid in three ways usually ...1) An annual fee or a small percentage of your assets- like really small- like 1%...2) Commissions from trading stocks (this if fine but they can be biased towards stocks that pay them more) 3) Hourly - like lawyers- they charge you only for what they work."
    },
    {
      "id": "4",
      "name": "What's the diff between Retirement and Savings Accounts",
      "phrase": "Retirement Vs. Savings Accounts",
      "description": "Taxes! Regular investments (great- highly recommend them) -- you have to pay taxes every year. Retirement funds help your money grow in a way that you don't have to pay taxes on it every year -(even greater - more highly recommend)."
    },
    {
      "id": "5",
      "name": "Old People Fund: 401K",
      "phrase": "401k",
      "description": "Sweet deal - you put money into this account BEFORE taxes are applied. Through investments the money grows and grows and grows. You only get taxed on it when you're old and ready to use it."
    },
    {
      "id": "6",
      "name": "Save a Ton Fund: Roth IRA",
      "phrase": "Roth IRA",
      "description": "A must have! It's basically a savings account on crack. You put money in it and can ONLY take it out when you retire OR when you buy a house. Once the money is in there, through investments, it grows and grows and grows. The best part is - that the money that goes into it has already been taxed (at the time you were paid). And so no matter how much it grows... you won't have to pay taxes on it ever again. That's like ... free money!"
    },
    {
      "id": "7",
      "name": "But I don't want to care...",
      "phrase": "Index Funds",
      "description": "Cool- that's fine. There are these things called index funds. It's basically a group of stocks that have been pre-vetted and they kind of know how they're going to behave. It's what most 401ks are invested into. Also, get a financial planner- you basically hire them to care for you."
    },
    {
      "id": "8",
      "name": "What the heck does 'Diversify Your Portfolio' mean?",
      "phrase": "Diversify Your Portfolio",
      "description": "Don't put all your eggs into one basket. Don't put all your money into one stock obviously, but it also means think about the industry/genre of your stocks and don't invest in only one industry."
    },
    {
      "id": "9",
      "name": "Risky Business? Not as much as you think...",
      "phrase": "Investment Strategy",
      "description": "Some stocks are high risk and some are lower risk. Companies that have been around a long time generally have leveled out so their highs and lows won't be as radical. Newer companies are much riskier because you don't know if they have staying power. But if they do make it your values could skyrocket. When you're young it is okay to take some risks because you'll have time to make up for it later."
    },
    {
      "id": "10",
      "name": "Tax Refunds... actually not the Golden Goose",
      "phrase": "Tax Refunds",
      "description": "I know it's tempting to go for the big tax refund once a year. But the real goal should be to try to pay exactly what you owe and no more. For the big reason that the money you over-pay the government is just sitting there, when you could have been investing it and watching it grow."
    },
    {
      "id": "11",
      "name": "DISCLAIMER",
      "phrase": "DISCLAIMER",
      "description": "ScrewUP is NOT a financial adviser. We're just trying to introduce you to financial terms so that you can make smart decisions regarding your money. If you want real accuracy and #truths - talk to a financial adviser. They're amazing. "
    }


  ]

})

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
                    content: "Here I am!"
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infoWindow.open($scope.map, marker);
                });

            });
 
  }, function(error){
    console.log("Could not get location");
  });
})


.controller('CalculatorCtrl', function($scope,$location) {
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


  //   // $scope.goalIsMet();
  // };
  //
  //
  // $scope.goalIsMet = function() {

    if (retirementGoal <= $scope.post.retirement) {
      //$location.path("/calculator-congratsDetail.html");
      // sysout - you are retirementDiff over your goal! Great Job!
      $scope.heading = "Congrats! You're already a ScrewUp! ";
      $scope.message = " Meaning you are doing a great job of preparing for your future! You are $" + retirementDiff + " above your goal! Check out Become a financial genius for more information.";
      $scope.image = "../img/party-clip-art-party-clip-art-free-downloads.jpg";

    } else {
      //$location.path("/calculator-screwUpDetail.html");
      // sysout - you are retirementDiff under your goal! Great Job!

      $scope.heading = "You are not a ScrewUp ... yet!";
      $scope.message = "  There is still hope for you! You are currently $" + retirementDiff + " away from the goal. Did you know by age 35 you should have a year of your desired salary saved for retirement? It IS possible!!! Money actually can grow on trees - even if you don't think you have " +
        "money to spare!! Check out 'Be a Financial Genius' for more details.";
      $scope.image = "../img/notthereyet.jpg";
    }
  };



})

.controller('CongratsCtrl', function($scope, $stateParams) {
 // $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ScrewUpCtrl', function($scope, $stateParams) {
  //$scope.chat = Chats.get($stateParams.chatId);
})

.controller('TermsCtrl', function($scope, $stateParams, $http, getTerms) {

  $scope.terms = getTerms.terms;

  // $http.get('/terms.json')
  //   .then(function (response) {
  //     $scope.terms = response.data;
  //     getTerms.terms = response.data;
  //     console.log(getTerms.terms);
  //   })

    // $scope.terms = getTerms.terms;

    // $ionicModal.fromTemplateUrl('templates/modal.html', {
    //   scope: $scope
    // }). then(function(modal) {
    //   $scope.modal = modal;
    // });
    //
    // $scope.openModal = function(term) {
    //   $scope.modal.show();
    // };
    //
    // $scope.closeModal = function() {
    //   $scope.modal.hide();
    // };
})

.controller('ModalCtrl', function($scope, $stateParams,getTerms, $ionicHistory ) {
  $scope.term = getTerms.terms[$stateParams.termid-1];

  // $scope.myGoBack = function() {
  //     $ionicHistory.goBack();
  //   };


})


.controller('ResourcesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
