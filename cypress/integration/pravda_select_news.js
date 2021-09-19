const homepage = require('../pageObjects/homePage.json')
const selectNews= require('../pageObjects/selectNews.json')
context('Select feature of pravda', () => {
    it('Select news scenario of pravda', () => {
        cy.visit('https://www.pravda.com.ua') //visiting the home page
        cy.get(homepage.selectingNewsSection).click()  //selecting news section in homepage
        cy.wait(600)
        cy.get(selectNews.newsSectionRandomly.selectNews).then((newsSelection) =>{
         cy.get(newsSelection).children() 
        .eq(Math.floor(Math.random() * 34)) //randomly selecting in list 
        .click({force: true})
        })
        .each(($containerSubNewsListWrapper) => {
       cy.get($containerSubNewsListWrapper).click() // clicking randomly selected element
       cy.title().as('title1') // storing its title as "title1"
       cy.wait(3000)
       cy.get("@title1").then((title1) => {
        cy.title().then((title2) => {   //get the title of the current page
          expect(title1).to.equal(title2)
                })
            })
        })  
    })
})
