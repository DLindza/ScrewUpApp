(function () {
    'use strict';

    angular
        .module('screwUpApp')
        .controller('OutcomeCtrl', OutcomeCtrl);

    OutcomeCtrl.$inject = ['$state', '$http', 'userService'];

    function OutcomeCtrl($state, $http, userService) {
        var outcomeVM = this;

        outcomeVM.user = userService.getUser();
        console.log("Outside function:" + outcomeVM.user.username);

        // outcomeVM.getMonthlyFromDataBase = function () {

        //     console.log("Outcome User: " + outcomeVM.user.username);
        //     var url = 'http://localhost:8080/user/' + outcomeVM.user.username;
        //     $http.get(url)

        // .then(function (response) {
        //console.log("MonthlyNet from Database: " + response.data);
        console.log("MonthlyNet from Database: " + outcomeVM.user.monthlynet);
        // budgetService.setMonthlyNet(response.data);
        // outcomeVM.billtotal = budgetService.getBillTotal();
        // outcomeVM.billgoal = budgetService.getBillGoal();
        // outcomeVM.billpercent = budgetService.getBillPercent();
        // outcomeVM.monthlyremainder = budgetService.getMonthlyRemainder();
        // outcomeVM.funmoney = budgetService.getFunMoney();
        // outcomeVM.nestegg = budgetService.getNestEgg();
        // outcomeVM.expenses = budgetService.getExpenses();
        // console.log("Outcome says Monthly Net is: " + budgetService.getMonthlyNet());

       
        outcomeVM.billtotal = outcomeVM.user.billtotal;
        outcomeVM.billgoal = outcomeVM.user.billgoal;
        outcomeVM.monthlyremainder = outcomeVM.user.monthlyremainder;
        outcomeVM.funmoney = outcomeVM.user.funmoney;
        outcomeVM.nestegg = outcomeVM.user.nestegg;

        outcomeVM.expenses = outcomeVM.user.expenses;
        console.log(outcomeVM.expenses);
        //console.log("Outcome says Monthly Net is: " + budgetService.getMonthlyNet());
        // }, function (response) {
        //     outcomeVM.errorMessage = "This page could not load."



        outcomeVM.toHome = function () {
            console.log("show me the money!");
            $state.transitionTo('tab.calculator');
        }

    }


})();
