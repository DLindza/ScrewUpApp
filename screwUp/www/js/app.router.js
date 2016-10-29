(function() {
    'use strict';

angular
    .module('screwUpApp')
    .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRouter($stateProvider, $urlRouterProvider) {
        $stateProvider
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
  .state('tab.modal', {
    url: '/modal/:termid',
    views: {
      'tab-terms': {
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl'
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
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/calculator');


    }
})();