context('Select feature of pravda', () => {
    it('Randomly select news of news section', () => {
        cy.visit('https://www.pravda.com.ua')
        cy.wait(300)
        cy.get('.container_sub_news_wrapper')
         .children()
         .eq(Math.floor(Math.random() * 122))
         .click({force: true}) 
         .each(($containerSubNewsListWrapper) => {
        cy.get($containerSubNewsListWrapper).click()
         // cy.title('post_title').should('eq','')
        })
    })
})