import List from './List'

describe('<List />', () => {
  it('should render List with no category and no children elements', () => {
    const category: string = "No category"

    cy.mount(<List />);

    cy.get('[data-cy="list-category"]')
      .should('be.visible')
      .and('have.text', category)

    cy.get('[data-cy="list-items"]').should('not.exist');
  });

  it('should render List with defined category and no child elements in List', () => {
    const category: string = "My category"

    cy.mount(<List category={category} />);

    cy.get('[data-cy="list-category"]')
      .should('be.visible')
      .and('have.text', category);

    cy.get('[data-cy="list-items"]').should('not.exist');
  });

  it('should render List with no category and children elements', () => {
    const category: string = "No category"

    const fruits: any = [
      { id: 1, name: "Apple", calories: 95 },
      { id: 2, name: "Banana", calories: 105 },
      { id: 3, name: "Orange", calories: 45 },
    ];

    cy.mount(<List items={fruits} />);

    cy.get('[data-cy="list-category"]')
      .should('be.visible')
      .and('have.text', category);

    cy.get('[data-cy="list-items"]').children().should('have.length', fruits.length)
    cy.get('[data-cy="list-items"]').children().each((item, index) => {
      expect(item.text()).to.deep.equal(`${fruits[index].name}: ${fruits[index].calories}`);
    });
  });

  it.only('should render List with defined category and children elements', () => {
    const category: string = "Vegetables"

    const vegetables: any = [
      { id: 6, name: "Carrot", calories: 25 },
      { id: 7, name: "Cabbage", calories: 45 },
      { id: 8, name: "Potato", calories: 50 },
    ];

    cy.mount(<List category={category} items={vegetables} />)

    cy.get('[data-cy="list-category"]')
      .should('be.visible')
      .and('have.text', category);

    cy.get('[data-cy="list-items"]').children().should('have.length', vegetables.length)
    cy.get('[data-cy="list-items"]').children().each((item, index) => {
      expect(item.text()).to.deep.equal(`${vegetables[index].name}: ${vegetables[index].calories}`);
    });
  });

})