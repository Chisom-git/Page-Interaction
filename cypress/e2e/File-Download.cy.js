describe('Demonstrating File-Download', () => {
  it('Download File', () => {
    cy.visit('/')
    cy.get('[href="/download"]').should('be.visible').click()
    cy.get('[href="download/kote.jpg"]').click()
  })
})