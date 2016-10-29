// Ionic screwUpApp App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'screwUpApp' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'screwUpApp.services' is found in services.js
// 'screwUpApp.controllers' is found in controllers.js
(function(){
 'use strict';

 angular
   .module('screwUpApp', [
     'ionic', 
     'screwUpApp.controllers', 
     'screwUpApp.services',
     'ui.router',
     'ngCordova'
   ])


}) ();

(function() {
  'use strict';

  angular
    .module('screwUpApp')
    .run(runBlock);

    runBlock.$inject = ['$ionicPlatform'];

    function runBlock($ionicPlatform){
      $ionicPlatform.ready(function(){
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
      // org.apache.cordova.statusbar required
       StatusBar.styleDefault();
        }

      })
    }
})();



