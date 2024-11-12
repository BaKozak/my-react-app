import ToDoList from './ToDoList'

describe('Todo List component', () => {
  const listOfDefaultItems = [
    'Wake up', 'Take a shower', 'Eat breakfast', 'Go to daily'
  ];

  beforeEach('mount component', () => {
    cy.mount(<ToDoList />)
  });

  context('Default state tests', () => {
    it('should check if header of component is correct', () => {
      cy.get('[data-cy="todo-title"]')
        .should('be.visible')
        .and('have.text', 'My TODO List');
    });

    it('should check if input section of component is correct', () => {
      cy.get('[data-cy="task-input-section"]')
        .find('input')
        .should('be.visible')
        .and('have.prop', 'placeholder', "Enter a task...");

      cy.get('[data-cy="task-input-section"]')
        .find('button')
        .should('be.visible')
        .should('have.text', 'Add');
    });

    it('should check if default state of List is correct', () => {
      cy.get('[data-cy="todo-task-list"]').children().should('have.length', listOfDefaultItems.length);

      cy.get('[data-cy="todo-task-list"]').children().each((item, index) => {
        cy.wrap(item).within(() => {
          cy.get('span').should('include.text', listOfDefaultItems[index]);
          cy.get('button').should('have.length', 3);
          cy.get('button').eq(0).should('have.text', 'Delete');
          cy.get('button').eq(1).should('have.text', 'Up');
          cy.get('button').eq(2).should('have.text', 'Down');
        });
      });
    });
  });

  context('State manipulation tests', () => {
    const newTaskName = "Write cypress tests"

    it('should be able to input text in input field and store as value', () => {
      cy.get('[data-cy="task-input-section"] input').type(newTaskName);
      cy.get('[data-cy="task-input-section"] input').should('have.value', newTaskName);
    });

    it('should be able to add a todo task using add button', () => {
      cy.get('[data-cy="task-input-section"] input').type(newTaskName);
      cy.get('[data-cy="task-input-section"] button').click();

      cy.get('[data-cy="todo-task-list"]').children().should('have.length', listOfDefaultItems.length + 1);
      cy.get('[data-cy="todo-task-list"]').children().last().within(() => {
        cy.get('span').should('include.text', newTaskName);
        cy.get('button').should('have.length', 3);
        cy.get('button').eq(0).should('have.text', 'Delete');
        cy.get('button').eq(1).should('have.text', 'Up');
        cy.get('button').eq(2).should('have.text', 'Down');
      });
    });

    it('should be able to remove a todo task using the delete button', () => {
      cy.get('[data-cy="todo-task-list"] button').contains('Delete').click();
      cy.get('[data-cy="todo-task-list"]').children().should('have.length', listOfDefaultItems.length - 1);
      cy.get('[data-cy="todo-task-list"] span').first().should('have.text', listOfDefaultItems[1]);
    });

    it('should be able to move up a todo task using the up button', () => {
      cy.get('[data-cy="todo-task-list"]').children().eq(1).contains('button', 'Up').click();
      cy.get('[data-cy="todo-task-list"] span').first().should('have.text', listOfDefaultItems[1]);
    });

    it('should be able to move down a todo task using the down button', () => {
      cy.get('[data-cy="todo-task-list"]').children().first().contains('button', 'Down').click();
      cy.get('[data-cy="todo-task-list"] span').eq(1).should('have.text', listOfDefaultItems[0]);
    });
  });
});