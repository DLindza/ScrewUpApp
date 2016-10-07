angular.module('starter.controllers', [])

.controller('AdvisorCtrl', function($scope) {})

.controller('CalculatorCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('CalcDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TermsCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ResourcesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
