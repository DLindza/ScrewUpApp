(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('OutcomeCtrl', OutcomeCtrl);

    OutcomeCtrl.$inject = ['$state', '$http', 'userService'];

    function OutcomeCtrl($state, $http, userService) {
        var outcomeVM = this;

        outcomeVM.user = userService.getUser();
        console.log(outcomeVM.user);

      outcomeVM.checkUser = function() { 
       if (outcomeVM.user.id == null) {
          $state.transitionTo('login');
        }
      }();
       
       
        outcomeVM.billtotal = outcomeVM.user.billtotal;
        outcomeVM.billgoal = outcomeVM.user.billgoal;
        outcomeVM.monthlyremainder = outcomeVM.user.monthlyremainder;
        outcomeVM.funmoney = outcomeVM.user.funmoney;
        outcomeVM.nestegg = outcomeVM.user.nestegg;

        outcomeVM.expenses = outcomeVM.user.expenses;
      

        outcomeVM.toHome = function () {
            $state.transitionTo('tab.calculator');
        }

    }


})();
