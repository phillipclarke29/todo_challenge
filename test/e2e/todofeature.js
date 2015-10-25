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

  it('it allows you to save a todo', function(){

    expect(element(by.binding('todoList.total()')).getText()).toEqual('total todos = 2');
  });

});
