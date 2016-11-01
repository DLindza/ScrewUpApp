angular.module('screwUpApp.services', [])

.service('getTerms', function () {
   // var terms = [];
  this.terms = [

    {
      "id": "1",
      "name": "Money grows on trees",
      "phrase": "Compound Interest",
      "description": "Yeah! It's a thing. Investments man, investments. When you invest (or have someone who knows what they're doing invest for you) there's something called compound interest. It's like reverse student loans. The stock has an interest on it and this time you get the benefit.For example: If you invest $1,000 and it has 10% interest growth on it - in 20 years you will have over $7,000!-->The longer you are invested the longer your interest has to grow. So, start investing as early as possible."
    },
    {
      "id": "2",
      "name": "I can get $$$ for nothing?",
      "phrase": "Dividend Stocks",
      "description": "Yeah! It's also a thing. Some stocks basically have customer loyalty rewards. It varies per stock. Many stocks will pay you a small amount every quarter for being an investor. Free money!"
    },
    {
      "id": "3",
      "name": "Financial Planners: What do they want from me?!?!",
      "phrase": "Financial Planners",
      "description": "They are there to help! See the Find Help tag to find one near you. Or Resources for a helpful article on what to look for. It is important to get help unless you're really dedicated and keep an almost daily eye on the stock market and do your research. But a planner does all of that for you and can help make recommendations. If a planner doesn't help your money grow- then he either doesn't get paid or loses your as a client and still won't get paid. It is their one goal and job in life to help your money grow.They get paid in three ways usually ...1) An annual fee or a small percentage of your assets- like really small- like 1%...2) Commissions from trading stocks (this if fine but they can be biased towards stocks that pay them more) 3) Hourly - like lawyers- they charge you only for what they work."
    },
    {
      "id": "4",
      "name": "What's the diff between Retirement and Savings Accounts",
      "phrase": "Retirement Vs. Savings Accounts",
      "description": "Taxes! Regular investments (great- highly recommend them) -- you have to pay taxes every year. Retirement funds help your money grow in a way that you don't have to pay taxes on it every year -(even greater - more highly recommend)."
    },
    {
      "id": "5",
      "name": "Old People Fund: 401K",
      "phrase": "401k",
      "description": "Sweet deal - you put money into this account BEFORE taxes are applied. Through investments the money grows and grows and grows. You only get taxed on it when you're old and ready to use it."
    },
    {
      "id": "6",
      "name": "Save a Ton Fund: Roth IRA",
      "phrase": "Roth IRA",
      "description": "A must have! It's basically a savings account on crack. You put money in it and can ONLY take it out when you retire OR when you buy a house. Once the money is in there, through investments, it grows and grows and grows. The best part is - that the money that goes into it has already been taxed (at the time you were paid). And so no matter how much it grows... you won't have to pay taxes on it ever again. That's like ... free money!"
    },
    {
      "id": "7",
      "name": "But I don't want to care...",
      "phrase": "Index Funds",
      "description": "Cool- that's fine. There are these things called index funds. It's basically a group of stocks that have been pre-vetted and they kind of know how they're going to behave. It's what most 401ks are invested into. Also, get a financial planner- you basically hire them to care for you."
    },
    {
      "id": "8",
      "name": "What the heck does 'Diversify Your Portfolio' mean?",
      "phrase": "Diversify Your Portfolio",
      "description": "Don't put all your eggs into one basket. Don't put all your money into one stock obviously, but it also means think about the industry/genre of your stocks and don't invest in only one industry."
    },
    {
      "id": "9",
      "name": "Risky Business? Not as much as you think...",
      "phrase": "Investment Strategy",
      "description": "Some stocks are high risk and some are lower risk. Companies that have been around a long time generally have leveled out so their highs and lows won't be as radical. Newer companies are much riskier because you don't know if they have staying power. But if they do make it your values could skyrocket. When you're young it is okay to take some risks because you'll have time to make up for it later."
    },
    {
      "id": "10",
      "name": "Tax Refunds... actually not the Golden Goose",
      "phrase": "Tax Refunds",
      "description": "I know it's tempting to go for the big tax refund once a year. But the real goal should be to try to pay exactly what you owe and no more. For the big reason that the money you over-pay the government is just sitting there, when you could have been investing it and watching it grow."
    },
    {
      "id": "11",
      "name": "DISCLAIMER",
      "phrase": "DISCLAIMER",
      "description": "ScrewUP is NOT a financial adviser. We're just trying to introduce you to financial terms so that you can make smart decisions regarding your money. If you want real accuracy and #truths - talk to a financial adviser. They're amazing. "
    }


  ]

})

.service('budgetService', function() {
  var expenses = [];
  var billtotal = 0; 
  var monthlyNet = 0; 
  var billgoal = 0; 
  var monthlyremainder = 0;
  var funmoney = 0;
  var nestegg = 0;
  var billPercent = 0; 

  var findMonthlyNet = function (paycheck, occurence) {
    monthlyNet= parseInt(paycheck) * parseInt(occurence);
    fillBudget();
  };

  var fillBudget = function() {
    findBillGoal();
    findBillPercent();
    findMonthlyRemainder();
    findNestEgg();
    findFunMoney();
  };

  var findBillPercent = function() {
    billPercent = billgoal/billPercent;

  }

  var addExpense = function(cost) {
    billtotal += parseInt(cost); 
  };
  
  var findBillGoal = function() {
    billgoal = monthlyNet/2; 
  };

  var findMonthlyRemainder = function() {
    monthlyremainder = monthlyNet - billtotal; 
  };

  var findFunMoney = function() {
    funmoney = monthlyremainder * .20; 
  };

  var findNestEgg = function() {
    nestegg= monthlyremainder * .30; 
  };

  var getBillPercent= function() {
    return billPercent;
  }
  var getBillTotal = function() {
     return billtotal; 
  };

  var getMonthlyNet = function() {
    return monthlyNet; 
  }
 
  var getBillGoal = function() {
    return billgoal; 
  }

  var getMonthlyRemainder = function() {
    return monthlyremainder;
  } 

  var getFunMoney = function(){return funmoney; };

  var getNestEgg = function(){return nestegg; }; 


  return {
    findMonthlyNet : findMonthlyNet,
    getMonthlyNet : getMonthlyNet,
    addExpense : addExpense,
    getBillTotal : getBillTotal,
    findBillGoal : findBillGoal, 
    getBillGoal : getBillGoal,
    findMonthlyRemainder: findMonthlyRemainder,
    getMonthlyRemainder : getMonthlyRemainder,
    findFunMoney : findFunMoney,
    getFunMoney :getFunMoney,
    findNestEgg : findNestEgg,
    getNestEgg: getNestEgg,
    findBillPercent : findBillPercent,
    getBillPercent : getBillPercent
  };


})

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

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
