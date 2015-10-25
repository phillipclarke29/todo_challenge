angular.module('myApp', [])
.controller('TodoListController', function() {
   var todoList = this;
   todoList.todos = [
     {text:'complete this challenge', complete:false},
     {text:'have a nice cup of rosie', complete:false}]

   todoList.addTodo = function() {
     todoList.todos.push({text:todoList.todoText, complete:false});
     todoList.todoText = '';
   };


  todoList.total = function() {
    return todoList.todos.length
  };

 });
