// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];
function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}


// EXERCISE 2
function displayTodo(todo) {
  return todo.task+' '+todo.complete+' '+todo.id
  }


// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;
  var archive=[]
  return {
    display: function() {
      var str=''
      for(var i=0;i<todos.length;i++){
        str=str+displayTodo(todos[i])+'\n'
      }
      return str
    },
    add: function(task) {
      todos.push(todoFactory(task))
      return todos
    },
    complete:function(nbrId){
      for(var i=0;i<todos.length;i++){
        if(todos.id===nbrId){
          todos.complete=true
        }
      }
    },
    remove: function(){
      var arr=[]
    for(var i=0;i<todos.length;i++){
      if(todos[i].complet){
        delete todos[i]
      }
    }
    },
    archived:function(){
      for(var i=0;i<todos.length;i++){
        if(todos[i].complete){
          archive.push(todos[i])
        }
      }
      return archive
    },
    unarchived:function(todoID){
      for(var i=0;i<archive.length;i++){
      if(archive[i].id===todoID){
        todos.push(archive[i])
      }
      }
      return todos
    },
    clearArchive:function(){
      while(archive.length>0){
        archive.shift()
      }
      return archive
    }
  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}

