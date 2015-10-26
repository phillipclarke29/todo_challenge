describe('TodoListController', function() {
  beforeEach(module('myApp'));

  var todoList;

  beforeEach(inject(function($controller) {
    todoList = $controller('TodoListController');
  }));

  describe("when adding todos", function(){

  todos = [
    {text:'complete this challenge', complete:false},
    {text:'have a nice cup of rosie', complete:false}]


  it('displays the number of todos', function() {
    expect(todoList.todos.length).toEqual(2);
  });

  it('allow you to add a todo', function() {

    var newtodo = {text:'complete this challenge', complete:false}
    todoList.addTodo(newtodo)
    expect(todoList.todos.length).toEqual(3);
  });

});

});
