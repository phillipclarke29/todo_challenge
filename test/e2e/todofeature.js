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

    element(by.model('todoList.todoText')).sendKeys('This is a new todo');
    element(by.css('[value="add"]')).click();

    var todos = element.all(by.repeater('todo in todoList.todos'));
    expect(todos.last().getText()).toEqual('This is a new todo');

  });

});
