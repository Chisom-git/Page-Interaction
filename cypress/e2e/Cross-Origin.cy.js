describe('Demonstrating Cross-Origin', () => {
  it('Cross-Origin', () => {
    cy.visit('https://www.lambdatest.com/')
    cy.get('[href="https://accounts.lambdatest.com/login"]').should('exist').click({force: true})
    cy.origin('https://accounts.lambdatest.com', () => {
        cy.get('[href="/login/github/v1?disableSignup=1"]').click()
    })
    cy.origin('https://github.com/login', () => {
       cy.get('input#login_field').type('Amina Ose') 
       cy.get('input#password').type('Lagos@123')
    })
  })
})