// (function () {
//     angular
//         .module('screwUpApp')
//         .service('budgetService', budgetService);

//     function budgetService() {
            

//             // this is what gets exposed to the controller - you want to control what the controller can use/see - SOLID
//             var service = {
//                 findMonthlyNet: findMonthlyNet,
//                 getMonthlyNet: getMonthlyNet,
//                 setMonthlyNet: setMonthlyNet,
//                 addExpense: addExpense,
//                 getBillTotal: getBillTotal,
//                 findBillGoal: findBillGoal,
//                 getBillGoal: getBillGoal,
//                 findMonthlyRemainder: findMonthlyRemainder,
//                 getMonthlyRemainder: getMonthlyRemainder,
//                 findFunMoney: findFunMoney,
//                 getFunMoney: getFunMoney,
//                 findNestEgg: findNestEgg,
//                 getNestEgg: getNestEgg,
//                 findBillPercent: findBillPercent,
//                 getBillPercent: getBillPercent,
//                 addExpense: addExpense,
//                 getExpenses: getExpenses
//             };

//             return service;
//         }

//     })();