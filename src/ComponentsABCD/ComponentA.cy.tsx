import React from 'react'
import ComponentA from './ComponentA'

describe('<ComponentA />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ComponentA />)
  })
})