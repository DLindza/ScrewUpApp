(function() {
    'use strict';

    angular
       .module('screwUpApp')
       .controller ('ModalCtrl', ModalCtrl);

       ModalCtrl.$inject = ['$stateParams', 'getTerms']; 

       function ModalCtrl($stateParams, getTerms){
           var modalVM = this;
           
           modalVM.term = getTerms.terms[$stateParams.termid-1];
           console.log(modalVM.term); 
       }


})();