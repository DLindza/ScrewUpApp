angular.module('screwUpApp.services', [])

  




.service('calculatorService', function(){
  var age;
  var salary;
  var currentretirement;
  var goalAge = 35;
  var timeToGoal = 17;
  var percentAge;
  var percent;
  var retirementGoal; 
  var retirementDiff; 

  var runCalculation = function(currage,currsalary, retirementcurrsavings) {
    console.log("I am calculator god!");
   age = currage;
   salary = currsalary;
   currentretirement = retirementcurrsavings;
   findPercentAge();
   findPercent();
   findRetirementGoal();
   findRetirementDiff();

  }

  var findPercentAge = function() {
    percentAge = timeToGoal - (goalAge - age);
  }
  var getPercentAge = function() {
    return percentAge;
  }

  var findPercent = function() {
    percent = percentAge/timeToGoal;
  }

  var findRetirementGoal= function() {
      retirementGoal = Math.round(percent * salary);
  }
  
  var getRetirementGoal = function() {
     return retirementGoal;
  }
   
  var findRetirementDiff = function() {
   retirementDiff = currentretirement - retirementGoal; 
  }
  
  var getRetirementDiff = function() {
    return retirementDiff;
  }
   
return  {
  findPercentAge : findPercentAge,
  getPercentAge : getPercentAge,
  findPercent : findPercent,
  findRetirementGoal : findRetirementGoal,
  getRetirementGoal : getRetirementGoal,
  findRetirementDiff : findRetirementDiff,
  getRetirementDiff : getRetirementDiff
}

})


.service('userService', function(){
  var user = {};

  var getUser = function() {
    return user; 
  }
  var setUser = function(object) {
    user = object;
  }
  return {
    getUser: getUser,
    setUser: setUser
  }
})
;
