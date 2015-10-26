describe('To Do List', function() {

  beforeEach(function(){
    browser.get('http://localhost:8080');

  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('To do list');
  });

  it('is formatted as a jumbotron', function(){
    expect(element(by.css('.jumbotron h1')).getText()).toBe("My Todo List");
  });

  it('it diplays total todos', function(){
    expect(element(by.binding('todoList.total()')).getText()).toEqual('Total Todos = 2');
  });

  it('it allows you to add a new todo', function(){

    element(by.model('todoList.todoText')).sendKeys('This is a new todo Update');
    element(by.css('[value="add"]')).click();

    var todos = element.all(by.repeater('todo in todoList.todos'));
    expect(todos.last().getText()).toEqual('This is a new todo Update');
    expect(todos.get(2).getText()).toEqual('This is a new todo Update');
  });

  it('it allows you to mark a todo as complete', function(){

    element(by.model('todoList.todoText')).sendKeys('This is a new todo');
    element(by.css('[value="add"]')).click();
    var todos = element.all(by.repeater('todo in todoList.todos'));
    todos.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.complete-true'));
    expect(completedAmount.count()).toEqual(1);
    expect(completedAmount.getText()).toEqual(['This is a new todo']);
  });

  it('it allows you to update a todo', function(){

    element(by.model('todoList.todoText')).sendKeys('This is a new todo');
    element(by.css('[value="add"]')).click();
    var todo = element(by.cssContainingText('complete-false', 'This is a new todo'));
    console.log(todo);
    todo(by.css('[value="update"]')).click();
    todo(by.model('newText')).sendKeys('This is an updated todo');
    todo(by.css('[value="update"]')).click();
    var todos = element.all(by.repeater('todo in todoList.todos'));s
    expect(todos.last().getText()).toEqual('This is an updated todo Update');

  });

});
