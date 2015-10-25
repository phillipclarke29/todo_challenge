describe('TodoListController', function() {
  beforeEach(module('myApp'));

  var todoList;
  todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];


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
