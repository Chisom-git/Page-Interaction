describe('Demonstrating Select-dropdown', () => {
  it('Select-dropdown by Value', () => {
    cy.visit('/')
    cy.get('[href="/dropdown"]').should('be.visible').click()
    cy.get('select#dropdown').select('1')
  })



  it('Select-dropdown by Text', () => {
    cy.visit('/')
    cy.get('[href="/dropdown"]').should('be.visible').click()
    cy.get('select#dropdown').select('Option 2')
  })

})