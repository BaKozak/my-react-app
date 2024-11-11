import React from 'react'
import Counter from './Counter'

describe('<Counter />', () => {
  it('renders', () => {
    cy.mount(<Counter />)
  })
})