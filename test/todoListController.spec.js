describe('todoListController', function() {
  beforeEach(module('myApp'));

  var todoList;
  todoList.todos = [
      {text:'learn angular', done:true},
      {text:'build an angular app', done:false}];


  beforeEach(inject(function($controller) {
    todoList = $controller('todoListController');
  }));

  it('initialises with an empty list of todos', function() {
    expect(todoList).toBeUndefined();
  });

});

describe("when adding todos", function(){
  var todos = [
    {test:"This is a test todo", complete:false}
  ];

  it('displays the number of todos', function(){
    expect(todoList.totalTodos).toEqual(1);

  });

});
