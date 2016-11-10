(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('newScrewUpCtrl', newScrewUpCtrl);

    newScrewUpCtrl.$inject = ['$state', '$http', 'userService'];

    function newScrewUpCtrl($state, $http, userService) {
        var userVM = this;

        userVM.user = {
            "username": "",
            "password": "",
            "monthlyNet": ""

        }

        userService.setUser(userVM.user);

       

        userVM.message = "";

        userVM.backToLogin = function () {
                $state.transitionTo("login");
            }

        userVM.submitNewUser =
            function () {
                console.log("submitted");
                console.log(userVM.user);

                $http.post('http://localhost:8080/user', userVM.user)
                    .then(function (response) {
                        userVM.message = response.data.message;
                        
                        $state.transitionTo('editAccount');
                    })
            },
            function () {
                userVM.message = "Sorry there was a server error.";
            }
            

        // userVM.toCreateAccount = function () {
        //     userVM.submitNewUser();
            
        // }

        //userVM.billtotal = budgetService.getBillTotal();


    }


})();

