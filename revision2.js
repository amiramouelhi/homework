// 2. Declare a variable called numberOfStudents and give it the value zero.
var numberOfStudents=0
// 3. Write a function called addStudent that takes no parameters and increases the numberOfStudents variable by one every time it is invoked.
function addStudent(){
    numberOfStudents=numberOfStudents+1
    return numberOfStudents
}
// 4. Write a function named getNumberOfStudents that takes no parameters and returns the variable numberOfStudents.
function getNumberOfStudents(){
    return numberOfStudents
}
// 5. Declare an empty array called students.
var students=[]
// 6. Modify the function addStudent so that it takes a string (name) as a parameter and adds that string to the array students.
function addStudent(name){
    students.push(name)
    return students
}
// 7. Invoke the function addStudent 5 times with the names of 5 of your colleagues.
addStudent('aziz')
addStudent('saned')
addStudent('mohamed')
addStudent('hazem')
addStudent('maryem')
// 8. Write a function called clearStudents that takes no parameters and removes all the elements of the array and resets numberOfStudents to zero.
function clearStudents(){
    while(students.length>0){
        students.shift()
    }
    numberOfStudents=0
    return students
}
// 9. Modify the function addStudent so it assigns the length of the students array to the variable numberOfStudents.
function addStudent(name){
    numberOfStudents=students.length
    return numberOfStudents
}
function addStudent(name){
    for(var i=0;i<=numberOfStudents;i++){
    students.push(name)
    }
    return students
}
// 10. Write a function called createFullName that takes two parameters (firstName, lastName) and concatenates the firstName and lastName with an empty space in between and then returns the full name.
function createFullName(firstName,lastName){
    return firstName+' '+lastName
}
// 11. Invoke the addStudent 5 times using the function fullName as a parameter.
addStudent(createFullName('aziz','aydi'))
addStudent(createFullName('mostpha','mouelhi'))
addStudent(createFullName('fawzi','mouelhi'))
addStudent(createFullName('mohamed','chaibi'))
addStudent(createFullName('mouch','normal'))
// 12. Write a function called getStudentByInitials that takes a string (name) and a character as a parameter and returns true if the string (studentName) starts with the character and false otherwise.Make sure your function works for upper case and lower case letters
// function getStudentByInitials(name,char){
//     if(name[0].toUpperCase()===char.toUpperCase()){
//         return true 
//     }
//     return false
// }
// 13. Write a function called isFullName that takes a string (name) and returns true if the parameter consists of both a firstName and LastName.
function isFullName(name){
    var words=name.split(" ")
    if(words.length>1){
        return true
    }
    return false
}
// 14. Comment the function getStudentByInitials.
// 15. Write a function called getStudentsByInitials (notice the S in studentS) that takes a character as a parameter and loops through the array students and then returns an array of all the students whose firstName starts with that character.
function getStudentByInitials(char){
    var i=0;var j=0
    var arr=[]
    while(i<students.length){
        if(students[i][0].toUpperCase()===char.toUpperCase()){
            arr[j]=students[i]
            j+1
        }
    i+1}
    return arr
}
// 16. Modify the function getStudentsByInitials so that it takes two characters as parameters and returns an array with students that have a fullName with their first name starting with the first initial and their last name starting with the second initial.
function getStudentByInitials(char1,char2){
    var i=0;var j=0
    var arr=[]
    var words=[]
    while(i<students.length){
        if(isFullName(students[i])){
            words=students[i].split(' ')
         if(words[0].toUpperCase()===char1.toUpperCase() && words[0].toUpperCase()===char2.toUpperCase()){
            arr[j]=students[i]
            j+1}
        }
    i+1}
    return arr
}
// 18. Declare an object called student and give it the properties firstName, lastName, fullName, email, age & education.
// 19. Fill the object with your information.
// var student={
//     firstName:'Amira',
//     lastName:'Mouelhi',
//     email:'mouelhiam23@mail.com',
//     age:23,
//     education:'FullStack, Embedded Systems and IOT'
// }
// 20. Create a function called createStudent that takes 5 parameters (firstName, lastName, email, age & education) and returns a student object with those properties.
function createStudent(firstName,lastName,email,age,education){
    return {
        firstName:firstName,
        lastName:lastName,
        email:email,
        age:age,
        education:education
    }
}
// 22. Invoke the createStudent function with your information and save it in a variable called me.
var student1=createStudent('Amira','Mouelhi','mouelhiam23@gmail.com',23,'Fullstack, Embedded Systems and IOT')
// 23. Create a function called addSkills that takes a student object and an array of skills and adds a property called skills with the array as a value to the object.
function addSkills(student,array){
   
}
// 24. Modify the function addSkills so that it only adds the new skills from the array; the skills property will not repeat values when adding skills to the object.
// 25. Clear the students array by invoking the function clearStudents.
// 26. Delete the variable object called me.
// 27. Modify the addStudent function so it takes a student object as a parameter instead of a string and adds the object to the students array.


// 28. Invoke the function addStudent 5 times with your colleague’s information using the createStudent function.
// 29. Invoke the function addSkill for 3 of the students.
// 30. Write a function called removeStudent that takes a firstName as a parameter and loops through the student array and then removes the student with that name from the array.


// 31. Modify the function removeStudent so that it assigns the array length to the variable numberOfStudent after removing the student.


// 32. Write a function isStudentOlderThan that takes two parameters, a student object and an age, and returns true if the student is older than that age.



// 33. Write a function called doesStudentHaveSkills that takes a student object and returns true if the student has at least one skill.


// 34. Write a function called isStudentQualified that takes a student object as a parameter and returns true if the student is over 18 and has skills.

// 35. Write a function called numberOfStudentsOlderThan that takes age as a parameter and returns a number of all students that are older than that age. HINT: Use isStudentOlderThan


// 36. Write a function called getStudentsWithSkills that takes no parameters and returns an array of objects with all the students with the skills property. HINT: Use doesStudentHaveSkills.

// 37. Write a function getAllStudentsWithSkill that takes a string (skill) as a parameter then loops through all the students and returns an array of objects with all students who have that skill.

// ******Data Modeling with Closures******


// OOP || Revision
// 0. Write a JavaScript program to list the properties of a JavaScript object. Sample object:
function ObjectKeys(object){
    var str=''
    for(var key in object){
        str=str+key+','
    }
    return str
}
// 1. Write a JavaScript program to delete the rollno property from the following object. Also, print the object before or after deleting the property. Sample object:
function deleteProperty(object){
    console.log(object)
    delete object.rollno
    return object
}
// 2. Write a JavaScript program to get the length of a JavaScript object Sample object:
function objectLength(object){
    var len=0
    for(var key in object){
        len=len+1
    }
    return len
}
// 3. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
function displayBook(books){
    for(var i=0;i<books.length;i++){
        console.log('title: '+books[i].title+'reading status: '+books[i].readingStatus+'\n')

    }
}
// 4. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.
function Cylinder(){
    var instance={}
    instance.radius
    instance.hight
    instance.pi=Math.PI
    instance.volume=volume
    return instance
}
var volume=function(){
    var vol=2*this.pi*this.height*this.radius
  return vol 
}




