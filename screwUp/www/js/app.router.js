(function() {
    'use strict';

angular
    .module('screwUpApp')
    .config(appRouter);

    appRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appRouter($stateProvider, $urlRouterProvider) {
        $stateProvider

.state('login', {
  url: '/login',
  templateUrl: 'templates/login.html',
  controller: 'loginCtrl as loginVM'
})

.state('newScrewUp', {
  url: '/newScrewUp',
  templateUrl: 'templates/newScrewUp.html',
  controller: 'newScrewUpCtrl'
})

.state('editAccount', {
  url: '/editAccount',
  templateUrl: 'templates/editAccount.html',
  controller: 'editAccountCtrl as editVM'
})

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
        templateUrl: 'templates/tab-adviser.map.html',
        controller: 'AdviserCtrl as adviserVM'
      }
    }
  })
  .state('tab.terms', {
    url: '/terms',
    views: {
      'tab-terms': {
        templateUrl: 'templates/tab-terms.html',
        controller: 'TermsCtrl as termsVM'
      }
    }
  })
  .state('tab.modal', {
    url: '/modal/:termid',
    views: {
      'tab-terms': {
        templateUrl: 'templates/modal.html',
        controller: 'ModalCtrl as modalVM'
      }
    }
  })
  .state('tab.resources', {
      url: '/resources',
      views: {
        'tab-resources': {
          templateUrl: 'templates/tab-resources.html',
          controller: 'ResourcesCtrl as resourcesVM'
        }
      }
    })
  .state('tab.calculator',  {
    url: '/calculator',
    views: {
      'tab-calculator': {
        templateUrl: 'templates/tab-calculator.html',
        controller: 'CalculatorCtrl as calcVM'
      }
    }
  })
    .state('budget-outcome', {
      url: '/budget-outcome',
      templateUrl: 'templates/budget-outcome.html',
      controller: 'OutcomeCtrl as outcomeVM'
        
      
    })
  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/calculator');


    }
})();