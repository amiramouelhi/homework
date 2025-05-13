/*       UTIL FUNCTIONS      */
function each(coll, func) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        func(coll[i], i);
      }
    } else {
      for (var key in coll) {
        func(coll[key], key);
      }
    }
  }
  
  function map(coll, func) {
    var acc = [];
    if (!Array.isArray(coll)) {
      acc = {};
    }
    each(coll, function (element, key) {
      acc[key] = func(element, key);
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, index) {
      // notice we added the index here
      if (predicate(element, index)) {
        // notice we added the index here
        acc.push(element);
      }
    });
    return acc;
  }

  /*****************************  1  ***********************/
function addOne (numbers){
     return map(numbers,function(number,index){
        return number+1
     })
}
  /*****************************  2  ***********************/
 function removeEveryOther(array) {
     return filter(array,function(element,index){
        return index%2===0
     })
}
/*****************************  3  ***********************/
function doubleAll(nums) {
    return map(nums,function(element,key){
      return element*2
    })
}
function squareAll(nums) {
    return map(nums,function(element,key){
      return Math.pow(element,element)
    })
  }
function stringLengths(array){
  return map(array,function(element,index){
    return element.length
  })
}
  /*****************************  4  ***********************/
function odds(nums) {
    return filter(nums,function(element,index){
      return element%2!==0
    })
  }
function positives(nums) {
    return filter(nums,function(element,index){
      return element>0
    })
}  
function negatives(nums) {
    return filter(nums,function(element,index){
      return element<0
    })
}
function evenLength(nums) {
    return filter(nums,function(element,index){
      return element.length%2===0
    })
}
function largerThanSix(nums) {
    return filter(nums,function(element,index){
      return element>6
    })
  }
 /*****************************  5 ***********************/
function map2(arr1,arr2,callback){
  var acc = [];
    if (!Array.isArray(arr1)&& !Array.isArray(arr1)) {
      acc = {};
    }
    for(var i=0;i<arr1.length;i++){
      acc.push(callback(arr1[i],arr2[i]))
    }
    return acc;
}
    /*****************************  6***********************/
// Using filter, create a new array that only contains students who have a grade higher than or equal to 90.
  function grade(array){
    return filter(array,function(element,key){
       return element.grade>=90
  })
}
// Using map, create a new array that contains the names of all the students in the given array of student objects.
function names(array){
  return map(array,function(element,key){
    return element.name
  })
}
// Using filter, create a new array that only contains students who have a level of "A+".
function levels(array){
  return filter(array,function(element,key){
    return element.level==='A+'
  })
}
// Using map, create a new array that contains the grade of each student in the given array of student objects.
function allGrades(array){
  return map(array,function(element,key){
    return element.grade
  })
}
// Using filter, find the student with the highest grade in the given array of student objects.
function maxGrade(array){
  var max=array[0]
  return filter(array,function(element,key){
      
  })
}
  /*****************************  7 ***********************/
// 1.Using the customerProducts array of objects, write a function productList that returns an array of all product names in the array.
function productList(array){
  return map(array,function(element,key){
     return element.productName
  })
}
// 2.Using the customerProducts array of objects, write a function electronicProducts that list all the product names of the category Electronics inside an array.
function electronicProducts(array){
   filter(array,function(element,key){
    return element.productCategory==='Electronics'
  })
  if(filter(array,function(element,key){
    return element.productCategory==='Electronics'
  })){
    return map(array,function(element,key){
      return element.productName
    })
  }
}
// 3.Using the customerProducts array of objects, write a function totalToPay that calculates the total amount to pay for all the products.
function totalToPay (array){
  var total=0 
    each(array,function(element,i){
        total = total + element.productPrice
    })
    return total; 
}
// 4.Using the customerProducts array of objects, write a function productYouCanbuy that takes in a minimum price as an argument and returns an array of all products in the array that cost at least that amount.
function productYouCanbuy(array,amount){
  if( filter(array,function(element,index){
    return element.productPrice <= amount
  })){
    return map(array,function(element,index){
      return element.productPrice
    })
  }
} 
// 5.Using the customerProducts array of objects, write a function productsQuantity that returns an object with the total quantity of products purchased in each category. The keys of the object should be the category names, and the values should be the total quantity of products purchased in that category.
function productsQuantity (array){

}
// 6.Using the customerProducts array of objects, write a function totalPriceByCategory that takes in a category name and returns an object with the total quantity and cost of products purchased in that category. The object should have two keys, totalQuantity and totalCost, and the values should be the corresponding total quantity and cost of products purchased in the specified category.
function totalPriceByCategory(category,array){

}
/************************8*****************************/
// Write a function listNames that takes an array of users and returns an array of their names in alphabetical order.
function listNames(array){
  var usersName=map(array,function(element,index){
    return element.name
  })
 return usersName.sort()
}
// Write a function filterByGender that takes an array of users and a gender and returns an array of users that match the gender.
function filterByGender(array,gender){
  return filter(array,function(element,index){
    return element.gender===gender
  })
}
// Write a function groupByAge that takes an array of users and groups them by their age. The function should return an object where each key is an age and the value is an array of users with that age.
function grouByAge(array){
  var result={}
     
}
// Write a function mostCommonHobby that takes an array of users and returns the most common hobby among them.
function mostCommonHobby (array){
   for (var i=0;i<array.length;i++){
    var rep=reduce(array, function(a,b){
      return a=a+b
    }, 0) 
   }
}




 




 