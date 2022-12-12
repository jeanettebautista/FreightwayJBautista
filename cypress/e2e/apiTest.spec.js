/// <reference types="cypress" />

it('do api test' , () => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        failOnStatusCode: false,
        }).then(resp => {
            expect(resp.status).to.eq(200);
    })
})

it('do api test' , () => {
    cy.request({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts/idontexist',
        failOnStatusCode: false,
        }).then(resp => {
            expect(resp.status).to.eq(404);
    })
})