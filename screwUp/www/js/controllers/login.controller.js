(function() {
    'use strict';

    

    angular
       .module('screwUpApp')
       .controller ('loginCtrl', loginCtrl);

       loginCtrl.$inject = ['$http', '$state', 'userService', 'budgetService']; 

       function loginCtrl($http, $state, userService, budgetService){
           var loginVM = this; 
           var password =  '';

           loginVM.errorMessage = '';

           loginVM.userLogin = {
               "username": '',
               "password": '',

           }

           loginVM.login = function () {
               var url = 'http://localhost:8080/findByUsername/' + loginVM.userLogin.username;
               $http.get(url)

                   .then(function (response) {
                       userService.setUser(response.data);
                       console.log("Database User: " + response.data.username);
                       console.log("Ionic User: " + loginVM.userLogin.username);

                       if (response.data.username === loginVM.userLogin.username && response.data.password === loginVM.userLogin.password) {
                           $state.transitionTo("budget-outcome");
                       } else {
                           loginVM.errorMessage = "Username or Password is incorrect."
                       }
                   }, function (response) {
                       loginVM.errorMessage = "This page could not load."

                   })

           }

           loginVM.newScrewUp = function () {
               $state.transitionTo("newScrewUp");
           }
       }

       })();





