// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','ui.router'])

  //ADDED UI ROUTER DEPENDENCY

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

 // $locationProvider.html5Mode(true).hashPrefix();


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.adviser', {
    url: '/adviser',
    views: {
      'tab-adviser': {
        templateUrl: 'templates/tab-adviser.html',
        controller: 'AdviserCtrl'
      }
    }
  })

  .state('tab.terms', {
    url: '/terms',
    views: {
      'tab-terms': {
        templateUrl: 'templates/tab-terms.html',
        controller: 'TermsCtrl'
      }
    }
  })

  .state('tab.resources', {
      url: '/resources',
      views: {
        'tab-resources': {
          templateUrl: 'templates/tab-resources.html',
          controller: 'ResourcesCtrl'
        }
      }
    })
  .state('tab.calculator',  {
    url: '/calculator',
    views: {
      'tab-calculator': {
        templateUrl: 'templates/tab-calculator.html',
        controller: 'CalculatorCtrl'
      }
    }
  })
  .state('calculator-congratsDetail', {
    url: '/calculator/congrats',
    views: {
       'calculator-congratsDetail': {
        templateUrl: 'templates/calculator-congratsDetail.html',
       // controller: 'CongratsCtrl'
      }
    }
  })
  .state('calculator-screwUpDetail', {
    url: '/calculator/screwUp',
    views: {
      'calculator-screwUpDetail': {
        templateUrl: 'templates/calculator-screwUpDetail.html',
        //controller: 'ScrewUpCtrl'
      }
    }
  })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/calculator');

});
