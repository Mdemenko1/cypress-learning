describe('Screenshot', ()=>{

    it('full page screenshot', () =>{
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({captue : 'fullPage'})
    })

    it('single element screenshot', () =>{
        cy.get('header').screenshot()
    })
})