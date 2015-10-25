angular.module('myApp', [])
.controller('TodoListController', function() {
  var todoList = this;
  todoList.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];


  todoList.remaining = function() {
    var count = 0;
    angular.forEach(todoList.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };

  todoList.total = function() {
    return todoList.todos.length
  };

});
