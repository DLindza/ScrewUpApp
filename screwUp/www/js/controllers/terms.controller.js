(function() {
    'use strict';

    angular
       .module('screwUpApp')
       .controller ('TermsCtrl', TermsCtrl);

       TermsCtrl.$inject = ['$stateParams', '$http', 'getTerms']; 

       function TermsCtrl($stateParams, $http, getTerms){
           var termsVM = this;

           termsVM.terms = getTerms.terms;
       }


})();