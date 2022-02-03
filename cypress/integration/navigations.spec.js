describe('Navigations', () => {
  it('should navigate to the Login Page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "eco_growth" and click it
    cy.get('a[href*="/login"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/login')

    // The new page should contain an h1 with "Eco Growth Page"
    cy.get('h1').contains('Login Page')
  })
})
