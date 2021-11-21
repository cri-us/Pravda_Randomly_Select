# Cypress io and Javascript test cases for company Pravda News with using page objects

## Table of contents
* [About Project](#about-project)
* [Technologies](#technologies)
* [Setup](#setup)
* [Test cases](#test-cases)
* [Page Objects](#page-objects)
* [Contacts](#contacts)

## About Project
This project aimed to test the to enter the news page and selecting a random news every time from there and verify the title of the randomly entered news.
	
## Technologies
Project is created with:
* Cypress version: 8.6.0
* NodeJS version: 16.4.0
* NPM version: 7.18.1
	
## Setup
To run this project;
Install Cypress via npm:

```
cd /your/project/path
npm install

npm init

npm install cypress --save-dev

$(npm bin)/cypress open


``` 
## Test cases
* 1- Randomly selecting news container in home page 
This scenarios aimed to randomly selecting news every time in home page container
```
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


``` 
* 2- Randomly selecting news after entering news section 
This scenarios aimed to randomly selecting news every time in news section
```
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

``` 
## Page Objects
* 1-Home page objects
```
{
    "selectingNewsSection":".main_menu > :nth-child(2) > a",
    "SelectingNewsInHomePage":".container_sub_news_wrapper"
}



``` 
* 2-News section objects

``` 
{
    "newsSectionRandomly":{
        "selectNews":".container_sub_news_list_wrapper"
    
    }



}

``` 
## Contacts
* Ali Unsal Albaz albazaliunsal@gmail.com
* Project link: https://github.com/cri-us/Pecode_login_test


