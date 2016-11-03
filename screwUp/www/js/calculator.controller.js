(function() {
    'use strict';

    angular
       .module('calculator')
       .controller ('CalculatorCtrl', CalculatorCtrl);

       CalculatorCtrl.$inject = []; 

       function CalculatorCtrl(){
           var calcVM = this;

           calcVM.post = {
                age: '',
                salary: '',
                retirement: ''
            };

            calcVM.message = '';
            calcVM.heading = '';
            calcVM.image = '';
            calcVM.calculate = calculate; 
             

           
  var goalAge = 35;
  var timeToGoal = 17;
  var retirementGoal;
  var retirementDiff;
  var percentAge;
  var percent;


 function calculate() {
   percentAge = timeToGoal - (goalAge - calcVM.post.age);
   percent = percentAge/timeToGoal;
   retirementGoal = Math.round(percent * calcVM.post.salary);
   retirementDiff = calcVM.post.retirement - retirementGoal;

    if (retirementGoal <= calcVM.post.retirement) {
      calcVM.heading = "Congrats! You're already a ScrewUp! ";
      calcVM.message = " Meaning you are doing a great job of preparing for your future! You are $" + retirementDiff + " above your goal! Check out Become a financial genius for more information.";
      calcVM.image = "../img/party-clip-art-party-clip-art-free-downloads.jpg";

    } else {
      calcVM.heading = "You are not a ScrewUp ... yet!";
      calcVM.message = "  There is still hope for you! You are currently $" + retirementDiff + " away from the goal. Did you know by age 35 you should have a year of your desired salary saved for retirement? It IS possible!!! Money actually can grow on trees - even if you don't think you have " +
        "money to spare!! Check out 'Be a Financial Genius' for more details.";
      calcVM.image = "../img/notthereyet.jpg";
    }
  };

}
    
    
    
})();
