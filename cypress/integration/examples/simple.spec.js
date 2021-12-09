// describe('my first simple test with cypress', ()=>{
//     it('True should be true', ()=>{
//         expect(true).to.equal(true)
//     })

//     it('5 should be 5', ()=>{
//         expect(5).to.equal(5)
//     })
// })
// describe('Another describe block', ()=>{
//     it('false should be false', ()=>{
//         expect(false).to.equal(false)
//     })
// })

// describe('Browser Actions', ()=>{
//     it('should load correct URL', ()=>{
//         cy.visit('http://example.com', {timeout: 10000})
//     })
//     it('should check correct URL', ()=>{
//         cy.url().should('include', 'example.com')
//     })
//     it('should wait for 3 seconds',() =>{
//         cy.wait(3000)
//     })
//     it('should pause the execution', ()=>{
//         cy.pause()
//     })

//     it('should check for correct element on the page', ()=>{
//         cy.get('h1').should('be.visible')
//     })
// })

//Button Interactions
describe('Browser Actions', ()=>{
    it('should load books website', ()=>{
        cy.visit('https://books.toscrape.com/', {timeout:10000})
        cy.url().should('include', 'books.toscrape')
        cy.log('Before Reload')
        cy.reload()
        cy.log('After reload')
    })
    it('should click on Travel category', ()=>{
        cy.get('a')
        .contains('Travel')
        .click()
        cy.get('h1').contains('Travel')
    })
    it('should display category Poetry', ()=>{
        cy.get('a')
        .contains('Poetry')
        .click()
        cy.get('a')
        .contains('Olio')
        .click()
        cy.get('.product_main')
        .contains('23.88')

    })
    // it('shold display correct number of books', ()=>{
    //     cy.get('.product_pod').its('length').should('eq', 11)
    // })
})