describe('Reading and comparing pdfs', ()=>{
    it('Reading and comparing pdfs', () => {
        cy.task('readPdf', 'cypress/fixtures/first-pdf.pdf').then((file1Contents) => {
            cy.task('readPdf', 'cypress/fixtures/second-pdf.pdf').then((file2Contents) => {
                expect(file1Contents).contains(file2Contents);
            })
        })
    })
})