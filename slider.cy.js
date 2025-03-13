// describe('Swiper Gallery Test', function () {
//   it('Checks if second slide contains "United Kingdom"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if third slide contains "Paris"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.wait(2000);
//     cy.get('.swiper-slide-active').should('contain', 'Paris');
//   });
// });

describe('Swiper Gallery Test', function () {
  it('Checks if slider works', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('h1').should('contain.text', 'Rome');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('h1').should('contain.text', 'London');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('h1').should('contain.text', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if slider works with next and prev buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.have.class', 'swiper-slide-prev'); // Slajd nie powinien mieć klasy 'swiper-slide-prev'
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.have.class', 'swiper-slide-next'); // Slajd nie powinien mieć klasy 'swiper-slide-next'
  });
});

