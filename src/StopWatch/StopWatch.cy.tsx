import StopWatch from './StopWatch'

describe('<StopWatch />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<StopWatch />)
  })
})