
// 1.Fix the syntax & style issues with the three objects below:

var person={firstName:'Yan', lastName:'Fan'}
var numbers={a:1,
    b:2,
    c:3,
    d:4}
var animals={animal:'dog',noise: 'bark',age: 3, type :'Golden Retriever',color: 'Yellow'}
// 2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.
var person={
    firstName:'ishow',
    lastName:'speed',
    age:20,
    hometown:'Ohio'
}
// 3.Access the favorite food property in the object using dot notation, and reassign it to a different food.
var food={
    favouriteFood:''
}
food.favouriteFood='lablebi'
// 4.Change your object to have a single name key, the value of which is an object – this object should have first, last and middle keys containing your first, last, and middle names respectively.
var person={
     name:{
      firstName:'mohamed',
      middlename:'aziz',
      lastname:'sanad',
    }
}

// 5.Write a function called emptyObject that takes no parameters and returns an empty object.
function emptyObject(){  
    var objec={

    }
    return objec
  }
//   6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
function addProperty(object, key) { 
    object[key]=true
    return object
}
// 7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
function deleteProperty(object,key) {
    delete object[key]
    return object
    
}
// 8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
function addObjectPRoperty(object1,key,object2){
    object1[key]=object2
    return object1
}
// 9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
function addFullNameProeprty(object){
    if (object.firstName && object.lastName){
        object.fullName=object.firstName+' '+object.lastName
    }
    return object
}
// 10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
function addArrayProperty(object,key,array){
    object[key]=array
}
// 11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
function printAllProperties(object) {
    for(var i in object){
        console.log(object[i]+' ')
    }
}
// More Practice
// 1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
function removeNumbersLargerThan(number, object) {
    for (var key in object) {
      if (typeof object[key] === 'number' && object[key] > number) {
        delete object[key];
      }
    }
}
// 2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
function removeAllEven(object) {
    for(var key in object){
        if(typeof object[key]==='number' && object[key]%2===0){
            delete object[key]
        }
       
    }return object}

// 3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter. It then removes all properties that are not equal to 10.
function removePropertiesNotEqualTo10(object) {
        var obj2={}
        for(var key in object){
          if(typeof object[key]==='number' && object[key]===10){
              obj2[key]=object[key]
          }
    
        }return obj2
    }
// 4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object. It then removes all strings with lengths larger than the number parameter.

function removeStringsLongerThan(object,number){
    for(var key in object){
         if( object[key].length>number ){
            delete object[key]
}
}return object}

// 5.Write a function called removeAllNumbers that takes an object as a parameter. It then removes all properties in the object that have number values.
function removeAllNumbers(object) {
    for(var key in object){
        if(typeof object[key]==='number'){
            delete object[key]
        }}
        return object
}
// 6.Write a function called removeArrays that takes an object as a parameter. It then removes all properties that have array values.
function removeArrays(object) {
    for(var key in object){
        if(typeof object[key]!=='number'&&typeof object[key]!=='string'){
            delete object[key]
        }
    }
    return object
}
// 7.Write a function called getFirstElementOfProperty that takes an object and a key and returns the first element in the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.
    function getFirstElementOfProperty(object,key) {
        if(Array.isArray(object[key])&& object[key]!==[]){
            return object[key][0]
        }
        return undefined
    }
// 8.Write a function called getNthElementOfProperty that takes three parameters, an object, a key and a number. It then returns the element located at the index equal to the number parameter from the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.




 





