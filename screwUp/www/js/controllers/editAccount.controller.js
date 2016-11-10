
(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('editAccountCtrl', editAccountCtrl);

    editAccountCtrl.$inject = ['$http', '$state', 'userService'];

    function editAccountCtrl($http, $state, userService) {
        var editVM = this;

        editVM.user = userService.getUser();

        editVM.toOutcome = function () {
            console.log("show me the money!");
            $state.transitionTo('budget-outcome');

        }

        editVM.expense = {
            "name": "",
            "cost": ""
        }

        var clearExpense = function () {
            editVM.expense.name = "";
            editVM.expense.cost = "";
        }

        editVM.callToAddExpense = function () {

            // budgetService.addExpense(editVM.expense);
            console.log("posted expense:" + editVM.expense.name + editVM.expense.cost);

            var url = 'http://localhost:8080/expense/' + editVM.user.username;
            $http.post(url, editVM.expense)

                .then(function (response) {
                    console.log(editVM.expense);
                    console.log(response.data);
                    console.log(response.data.name + ":" + response.data.cost);
                    clearExpense();
                }, function (response) {
                    editVM.errorMessage = "This page could not load."

                })

        }
    }

    })();

          

 
    
    



