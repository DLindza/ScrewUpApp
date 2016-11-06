(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('newScrewUpCtrl', newScrewUpCtrl);

    newScrewUpCtrl.$inject = ['$state', '$http', 'userService', 'budgetService'];

    function newScrewUpCtrl($state, $http, userService, budgetService) {
        var userVM = this;

        userVM.user = {
            "username": "",
            "password": ""

        }
        userService.setUser(userVM.user);

        userVM.message = "",

            userVM.backToLogin = function () {
                $state.transitionTo("login");
            }

        userVM.submitNewUser =
            function () {
                console.log(userVM.user);

                $http.post('http://localhost:8080/user', userVM.user)
                    .then(function (response) {
                        userVM.message = response.data.message;
                    })
            },
            function () {
                userVM.message = "Sorry there was a server error.";
            }

        userVM.toCreateAccount = function () {
            userVM.submitNewUser();
            $state.transitionTo('editAccount');
        }

        userVM.billtotal = budgetService.getBillTotal();


    }


})();

