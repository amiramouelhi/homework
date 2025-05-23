// 1. 1. Let's make a counter using closures. For our purposes, a counter is simply a function that, when invoked, returns a number that is one higher than it used to be. For example, this is the behavior that we want:
function makeCounter() {
    var count = 0
 return function () {
      count=count+1
      return count
 }
}
// 2. Update makeCounter so that, instead of always starting from zero, you can start from any number, e.g.:
function makeCounter(initial) {
    var count = initial
 return function () {
      count=count+1
      return count
 }
}
// 3. One way we can use closures is as functions that construct other functions. Consider the numerous examples of exponentiation functions that we've created, e.g. square and cube. The following function pow is incomplete:
function pow(exponent) {
    return function(base) {
          return base**exponent
        }
}
// More Practice***
// 1. zipWith takes a function and two arrays and zips the arrays together, applying the function to every pair of values.The function value is one new array.If the arrays are of unequal length, the output will only be as long as the shorter one.(Values of the longer array are simply not used.)Inputs should not be modified.
function zipWith(func,arr1,arr2) {
    var result=[]
    var min =Math.min(arr1.length,arr2.length)
    for(var i=0;i<min;i++){
      result[i]=func(arr1[i],arr2[i])
    }
    return result
}
// 2. We want to create a function that will add numbers together when called in succession
// Closures Adding Methods || W3.D3.02****
// 1. Modify the makeAccount function from the lecture so that the returned object contains an additional key called checkBalance, the value of which is a function that takes no arguments and returns a string representing the current balance. You should be able to use it like this:


function makeAccount(initial) {
    var balance = initial;
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
        return 'Insufficient funds.';
},
         deposit: function(amount) {
         balance = balance + amount;
         },
        checkBalance:function(){
        return 'Your balance is: $' + balance;
        }
}}

// 2. Let's revisit the counter exercise. Currently, makeCounter only allows us to count up -- what if we want to count down too? Modify makeCounter so that it returns an object that contains two keys: up and down, each of which has functions as values. up should make the count increase, and down should make the count decrease
function makeCounter(initial) {
    var count = initial
 return {
 up: function () {
      count=count+1
      return count
 },
  down: function () {
      count=count-1
      return count  
}
 }
}
// 3. Give your counter a reset capability as well, that resets the count back to its initial value.
function makeCounter(initial) {
    var count = initial
 return {
 up: function () {
      count=count+1
      return count
 },
  down: function () {
      count=count-1
      return count  
},
reset: function(){
    return count=initial
 }
}}
// More Practice**
// 1. Remember the guessing game from the first week? When we wrote the first version of the game, we didn't know about closures and stored all of our state (variables) in the global scope. Rewrite the guessing game to take advantage of closures so that you can create multiple games. Here is some starter code:
function randInt(upperBound) {
    var n= Math.floor(Math.random() * (upperBound + 1));
    
    return function(num) {
    if (num > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (num === n) {
         return 'You guessed my number!';
         }
    return 'Nope! That wasn"t it!';
    }}
// 2. You will need to define a function makeGame, and at the minimum, you should be able to play the game like this

function makeGame(upperBound) {
    var n= Math.floor(Math.random() * (upperBound + 1));
   var guess=0
   function guessMyNumber(num) {
    if (num > upperBound) {
         return 'Out of bounds! Please try a number between 0 and ' + upperBound + '.';
    } else if (num === n) {
         return 'You guessed my number!';
         }
       guess=guess+1
    return 'Nope! That wasn"t it!'
             
    }
    guessMyNumber.help={
        giveUp: function(){
            return guess=0
        },
        numGuesses: function(){
            return guess
        }
    }
   return guessMyNumber
}
// 3.  Write a function someEven that, given an array of numbers as an argument, returns true if at least one of the numbers is even.


function someEven(array){
    return function () {
        for(var i=0;i<array.length;i++){
            if(array[i]%2===0){
                return true
            }
        }
        return false
    } 
}
// 4. Write the functions someOdd, somePositive, and someNegative that work similarly to someEven.
//  someOdd
function someOdd(array){
    return function () {
        for(var i=0;i<array.length;i++){
            if(array[i]%2!==0){
                return true
            }
        }
        return false
    } 
}
// somePositive
function somePositive(array){
    return function () {
        for(var i=0;i<array.length;i++){
            if(array[i]>0){
                return true
            }
        }
        return false
    } 
}
// someNegative
function somePositive(array){
    return function () {
        for(var i=0;i<array.length;i++){
            if(array[i]<0){
                return true
            }
        }
        return false
    } 
}
// 5. Write a function some that accepts an array as its first parameter, and a predicate (a function that returns true or false) as its second parameter. If the predicate returns true for any of the elements in the array, some should return true
function some(array,predict){
    for(var i=0;i<array.length;i++){
        if(predicate(array[i])){
            return true
        }
    }
    return false
}
// 6. Using some, determine if some of the words in the following string have a length greater than 4:
function some(string) {
    return function() {
        for (i =0;i < string.length;i++) {
            if (4<string.length) {
                return true 
            }
        }
        return false 
    }
}

// Advanced
function makeAccount(initial) {
    var balance = initial;
    var transactions = [];
    function addTransaction(type, amount, before, after, status) {
        transactions.push({
            type: type,
            amount: amount,
            before: before,
            after: after,
            status: status,
            date: new Date()
        });
    }
    return {
         withdraw: function(amount) {
         if (balance - amount >= 0) {
         balance = balance - amount;
         return 'Here’s your money: $' + amount;
    }
        return 'Insufficient funds.';
},
         deposit: function(amount) {
         balance = balance + amount;
         },
        checkBalance:function(){
        return 'Your balance is: $' + balance;
        },
        transactionHistory:function(n){
            for(var i=0;i<n;i++){
                console.log(transaction[i])
            }
        }
}}





