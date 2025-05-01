
/**************While&For loops,recursion ************************ */


/*****************************  1  ***********************/

//iteration with For loop//

function iterateAndLogWithFor(n){
    for (var i=0;i<=n;i++){
        if(i%2===0){
            console.log(i+' is even')
        }
        console.log(i+' is odd')
    }
}

//iteration with While loop//

function iterationWithWhile(n){
    var i=0
    while(i<n){
        if(i%2===0){
            console.log(i+' is even')
        }
       else { console.log(i+' is odd')
       }
       i=i+1
    }
}

/*****************************  2  ***********************/

//for loop//

function reverseIterateAndLogWithFor(n) {
    for (var i=n;i>0;i--){
        if(i%2===0){
            console.log(i+' is even')
        }
        console.log(i+' is odd')
    }
     
}

//while loop//

function reverseIterateAndLogWithWhile(n) {
    var i=n
    while(i>0){
        if(i%2===0){
            console.log(i+' is even')
        }
       else { console.log(i+' is odd')
       }
       i=i-1
    }
}

//with recursion//

function reverseIterateAndLogRecursively(n) {
    if(n===0){
        return ''
    }
    if(n%2==0){
        return  n+' is even' +reverseIterateAndLogRecursively(n-1)
    }
    return n+' is odd'+reverseIterateAndLogRecursively(n-1)
    
}

/*****************************  3  ***********************/

//for loop//

function weirdDivisionWithFor(n) {
    for(var i=1;i<=n;i++){
        if(i%3===0){
            console.log('Julia')
        }
        else if(n%5===0){
            console.log('James')
        }
        else if(i%3===0 && i%5===0){
            console.log('JuliaJames')
        }
        console.log (i)
}
}

//while loop//

function weirdDivisionWithWhile(n) {
    var i=1
    while(i<=n){
    if(i%3===0){
        console.log('Julia')
    }
    else if(n%5===0){
        console.log('James')
    }
    else if(i%3===0 && i%5===0){
        console.log('JuliaJames')
    }
    console.log (i)
    i=i+1
     }

}

//with recursion//

function inverseWeirdDivisionRecursively(n) {
    if(n===0){
        return ''
    }
    if(n%3===0){
        return'Julia'+inverseWeirdDivisionRecursively(n-1)
    }
    if(n%5===0){
       return 'James'+inverseWeirdDivisionRecursively(n-1)
    }
    if(n%5===0 && n%3===0){
        return'JuliaJames'+ inverseWeirdDivisionRecursively(n-1)
    }
}


/*****************************  4  ***********************/

//For loop//
function sumWithFor(number) {
    var sum=0
    for(var i=n;i>0;i--){
        sum=sum+i
    }
    return sum
}

//while loop//
function sumWithWhile(number){
    var sum=0
    var i=number
    while(i>0){
        sum=sum+i
        i=i-1
    }
    return sum
}

/*****************************  5  ***********************/

function factorialRecursively(number){
    if(number===0){
        return 1
    }
    return number*factorialRecursively(number-1)
}

/*****************************  6  ***********************/

//for loop//
function rangeFor(min,max){
    var array=[]
    var j=0
    for(var i=min;i<=max;i++){
        array[j]=i
        j=j+1
    }
    return array
}
//while loop//
function rangeWhile(min,max){
    var array=[]
    var i=min
    var j=0
    while(i<=max){
        array[j]=i
        i=i+1
        j=j+1
    }
    return array
}

/*****************************  7  ***********************/
//for loop//
function reverseWithFor(str) {
    var str1=''
    for(var i=0;i<str.length;i++){
        str1=str[i]+str1
    }
    str=str1
    return str
}

//while loop//
function reverseWithWhile(str) {
    var str1=''
    var i=0
    while(i<str.length){
        str1=str[i]+str1
        i=i+1
    }
    str=str1
    return str
}

//recusrion//
function reverseRecursively(str) {
    if(str==='' || str.length===0){
        return str
    }
    return reverseRecursively(str)
}
/*****************************  8  ***********************/
function addDigits(num) {
    var sum=0
    var str=num.toString()
    for(var i=0;i<=str.length;i++){
        sum=parseInt(i)
    }
    return sum
}

/*****************************  9  ***********************/
function fibRecursive(number) {
    if(number===0 || number===1){
        return 1
    }
    return fibRecursive(number-1)+fibRecursive(number-2)
}

/*****************************  10  ***********************/
function firstDigit(str) {
    var i=0
    while(i<str.length){
      number=parseInt(str[i])
      if(number >=0 && number<=9){
        return number
      }
      i=i+1
    }
}

/*****************************  11  ***********************/
function remove(array,element){
    var arr=[]
    var j=0
    for(var i=0;i<array.length;i++){
        if(array[i]!==element){
            arr[j]=array[i]
            j=j+1
        }
    }
    return arr
}

/*****************************  12  ***********************/

function average(arrOfNumbers){
    var sum=0
    for(var i=0;i<arrOfNumbers.length;i++){
        sum=sum+arrOfNumbers[i]
    }
    return sum/arrOfNumbers.length
}

/*****************************  13  ***********************/
function findMax(str){
    var max=str[0]
    for(i=1;i<str.length;i++){
        if(str[i]>max){
            max=str[i]
        }
    }
    return max
}

/*****************************  14  ***********************/
function evenDigitsOnly(input){
    var i=0
    while(i<input.length){
        number=parseInt(input[i])
        if(number%2!==0){
            return false
        }
        i=i+1
    }
        return true
 }

 /*****************************  15  ***********************/
  function palindrome(str){
    var j=str.length-1
    var i=0
    while(i<str.length/2){
       if(str[i]!==str[j]){
        return false
       }
       i=i+1
       j=j-1
    }
    return true
  }

/*****************************  16  ***********************/
function firstDuplicate(array){
    var dup=0
    var stat=true
    for(var i=0;i<array.length;i++){
        for(var j=0;j<array.length;j++){
            if(array[i]===array[j]&& i!==j){
                return array[i]
            }
            stat=false
        }
        }
     if(stat===false){
        return 'no duplicates'
      } }

 /*****************************  17  ***********************/

function findCombinations(){

}

/**************** conditional-function-variables**************** */

/*****************************  1  ***********************/
var carName='Volvo'


/*****************************  2  ***********************/

var length=16 //number//
var lastNAme='Johnson' //string//
var scores=[20,12,15,14,20,10,2] //array//
var person={
    firstNAme:'John',
    lastName:'Doe'
};
var isGreaterThan10=length>10 //boolean//

/*****************************  3  ***********************/
function square1 (x){
    return x*x;
}

function square2 (x){
    return x*x 
}

function square3(x){
    return x*x 
}


/*****************************  4  ***********************/
function largest(num1,num2){
    if(num1>num2){
        max=num1
    }
    max=num2
    return max
}

/*****************************  5   ***********************/
function add(number1,number2){
    console.log(number1+number2)
}
/*****************************  6    ***********************/
function subtract(number1,number2){
    console.log(number1-number2)
}

/*****************************  7   ***********************/
function operator(op){
    var number1=2
    var number2=3
    if(op==='+'){
        add(number1,number2)
    }
   else{
    subtract(number1,number2)
   }
}

/*****************************  8   ***********************/
function divide(number1,number2){
    return number1/number2
}

function multiply(number1,number2){
    return number1*number2
}

/*****************************  9   ***********************/
 
function operator(op){
    var number1=2
    var number2=3
    if(op==='+'){
       return add(number1,number2)
    }
   else if(op==='/'){
   return divide(number1,number2)
   }
   else if(op==='*'){
    return multiply(number1,number2)
   }
   else if(op==='-'){
    return subtract(number1,number2)
   }
   return 'sorry, we don"t know this operator'
}

/*****************************  10   ***********************/
function calculate(operator,number1,number2){
    if(op==='+'){
        return add(number1,number2)
     }
    else if(op==='/'){
    return divide(number1,number2)
    }
    else if(op==='*'){
     return multiply(number1,number2)
    }
    else if(op==='-'){
     return subtract(number1,number2)
    }
    return 'sorry, we don"t know this operator'
}

/*****************************  11   ***********************/
function convertTemp(c){
    return c*1.8*32
}

/*****************************  12   ***********************/
function capitalize(food){
    return food[0].toUpperCase()+food.slice(1)
}

/*****************************  13   ***********************/
function billing(price1,price2,price3){
    var price=price1+price2+price3
    var tip=price*0.15
    var total=price+tip
    return 'your total is '+total+'. Thank you for the '+tip+' tip'
}

/*****************************  14   ***********************/
function awesomeMessage(firstName,interest,hobby){
    return 'Hi, my name is '+firstName+'. I love '+interest+', I like to '+hobby+'.'
}

/*****************************  15   ***********************/
function parity(num){
    if(parity%2===0){
        return 'even'
    }
    return 'odd'
}

/*****************************  16   ***********************/
function subtractProductAndSum(num){
    var str=num.toString()
    var sum=0
    var product=1
    for(i=0;i<str.length;i++){
        sum=sum+parseInt(str[i])
        product=product*parseInt(str[i])
    }
    console.log('product of digits '+product)
    console.log('sum of digits '+sum)
}

/*****************************  17   ***********************/
function removeCharacter(string,position){
    var str=''
    for(var i=0;i<string.length;i++){
        if(i!==position){
            str=str+string[i]
        }
    }

    return str
}

/*****************************  18   ***********************/
function nearest(number1,number2){
    if((100-number1)>(100-number2)){
        return number2+' is the nearest to 100'
    }
    return number1+' is the nearest to 100'
}

/*****************************  19   ***********************/
function lastDigit(num1,num2,num3){
    var str1=num1.toString()
    var str2=num2.toString()
    var str3=num3.toString()
    if(str1[str1.length-1]===str2[str2.length-1]===str3[str3.length-1]){
        return true
    }
   return false
}

/*****************************  20   ***********************/
function murder(room, name) {
    var weapon;
    var suspectRoom;
    var solved=false;

    if (room==="ballroom") {
        weapon = "poison";
    } else if (room==="gallery") {
        weapon = "trophy";
    } else if (room==="billiards room") {
        weapon = "pool stick";
    } else if (room==="dining room") {
        weapon="knife";
    }
    if (name==="Mr. Parkes") {
        suspectRoom="dining room";
    } else if (name==="Ms. Van Cleve") {
        suspectRoom="gallery";
    } else if (name==="Mrs. Sparr") {
        suspectRoom="billiards room";
    } else if (name==="Mr. Kalehoff") {
        suspectRoom="ballroom";
    }

    if (room===suspectRoom) {
        solved=true;
    }
    if (solved) {
        return name+' did it in the' +room +' with the '+weapon+'!';
    } else {
        return 'There is no way ' +name +' did it!';
    }
}

