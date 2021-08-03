import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I visit /men-shoes page", () => {
  cy.visit("/men-shoes");
});

When("I click on the first element of PLP", () => {
  cy.get(
    '[data-index="0"] > :nth-child(1) > .plp-container-with-masking > :nth-child(1) > .gl-product-card-container > .gl-product-card > .gl-product-card__assets > .gl-product-card__assets-link > .gl-product-card__image'
  ).click();
});

Then("I should be on the PDP page", () => {
  cy.url().should("contain", "G55780");
});
