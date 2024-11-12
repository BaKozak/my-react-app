import ToDoList from './ToDoList'

describe('Todo List component', () => {

  context('Default state tests', () => {
    it('should check if header of component is correct', () => {
      cy.mount(<ToDoList />)

      cy.get('[data-cy="todo-title"]')
        .should('be.visible')
        .and('have.text', 'My TODO List');
    });

    it('should check if input section of component is correct', () => {
      cy.mount(<ToDoList />)

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
      const listOfDefaultItems = [
        'Wake up', 'Take a shower', 'Eat breakfast', 'Go to daily'
      ];

      cy.mount(<ToDoList />)

      cy.get('[data-cy="todo-task-list"]').children().should('have.length', 4);
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
});