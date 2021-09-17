context('Select feature of pravda', () => {
    it('Select news scenario of pravda', () => {
        cy.visit('https://www.pravda.com.ua')
        cy.get('.main_menu > :nth-child(2) > a').click()
        cy.wait(300)
        cy.get('.container_sub_news_list_wrapper')
        .children()
        .eq(Math.floor(Math.random() * 122))
        .click({force: true}) 
        .each(($containerSubNewsListWrapper) => {
       cy.get($containerSubNewsListWrapper).click()
       // cy.title().should('eq','')

   })
     
})
})
