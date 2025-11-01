describe('Demonstrating Shadow-Dom', () => {
  it('Shadom-Dom', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
    cy.get('shadow-signup-form').shadow().find('input[name="username"]').fill('Segun Aliyu')  
    cy.get('shadow-signup-form').shadow().find('input[name="email"]').fill('segun@yopmail.com') 
    cy.get('shadow-signup-form').shadow().find('input[name="password"]').fill('Lagos@123')
    cy.get('shadow-signup-form').shadow().find('input[name="confirm_password"]').fill('Lagos@123')
  })





  it('Shadom-Dom Assignment', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom')
    cy.get('#shadow_host').shadow().find('input[placeholder="Name"]').fill('Ahmed Sali')  
    cy.get('#shadow_host').shadow().find('input[placeholder="Email"]').fill('ahmed@yopmail.com') 
  })
})