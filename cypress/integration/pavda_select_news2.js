const homepage = require('../pageObjects/homePage.json')
context('Select feature of pravda', () => {
    it('Randomly select news of news section', () => {
        cy.visit('https://www.pravda.com.ua') //visiting the home page
        cy.wait(600)
        cy.get(homepage.SelectingNewsInHomePage) //selecting news container in home page 
         .children()   
         .eq(Math.floor(Math.random() * 44)) //randomly selecting in list 
         .click({force: true}) 
         .each(($containerSubNewsListWrapper) => {    
        cy.get($containerSubNewsListWrapper).click() // clicking randomly selected element
        cy.title().as('title1')  // storing its title as "title1"
        cy.wait(900)
         cy.get("@title1").then((title1) => {
            cy.title().then((title2) => {   //get the title of the current page
              expect(title1).to.equal(title2)
            })
          })
        }) 
    })
})