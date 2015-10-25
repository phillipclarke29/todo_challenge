describe('TodoListController', function() {
  beforeEach(module('myApp'));

  var todoList;
  todoList.todos = [
      {text:'complete this challenge', complete:true},
      {text:'have a nice cup of rosie', complete:false}];


  beforeEach(inject(function($controller) {
    todoList = $controller('TodoListController');
  }));

  it('displays the number of todos', function() {
    expect(todoList.todos.length).toEqual(2);
  });

});

describe("when adding todos", function(){
  var todos = [
    {test:"This is a test todo", complete:false}
  ];

  it('displays the number of todos', function(){
    expect(todoList.todos.length).toEqual(3);

  });

});
