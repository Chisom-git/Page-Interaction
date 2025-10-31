describe('Demonstrating File-Upload', () => {
  it('Upload Using Cypress Default Config', () => {
    cy.visit('/')
    cy.get('[href="/upload"]').should('be.visible').click()
    cy.get('input#file-upload').selectFile('Samplekote.jpg')
    cy.get('input#file-submit').click()
  })




    it('Upload Using Plugin', () => {
    cy.visit('/')
    cy.get('[href="/upload"]').should('be.visible').click()
    cy.get('input#file-upload').attachFile('Samplekote.jpg')
    cy.get('input#file-submit').click()
  })
})