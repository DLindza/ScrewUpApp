(function() {
    'use strict';

    

    angular
       .module('screwUpApp')
       .controller ('loginCtrl', loginCtrl);

       loginCtrl.$inject = ['$http', '$state', 'userService']; 

       function loginCtrl($http, $state, userService){
           var loginVM = this; 
           var password =  '';

           userService.setUser({});

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

           loginVM.toHome = function () {
           console.log("show me the money!");
           $state.transitionTo('tab.calculator');
       }

       }

       


})();





