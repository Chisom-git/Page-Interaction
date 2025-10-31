describe('Demonstrating New-Tab-Handling', () => {
  it('Handling by Substituting the Target Value', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('attr', 'target', '_self').click()
    cy.get('[href="/tips"]>button').should('exist').click()
  })





  it('Handling by Removing Target Attribute', () => {
    cy.visit('/')
    cy.get('[href="http://elementalselenium.com/"]')
    .should('be.visible').invoke('removeAttr', 'target').click()
    cy.get('[href="/tips"]>button').should('exist').click()
  })
})