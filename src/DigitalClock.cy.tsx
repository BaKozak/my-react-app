import DigitalClock from './DigitalClock'

describe('<DigitalClock />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DigitalClock />)
  })
})