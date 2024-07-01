import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.zapimoveis.com.br/";
Given("que eu estou na página do portal Zap Imóveis", () => {
  cy.visit(url);
});

When("Clico no botão alugar", () => {
  cy.contains('a', 'Alugar').click();
});

When("pesquiso na cidade de são paulo", () => {
  cy.get('#l-input-7624845').type('São Paulo');
})

When("clico na opção aceita pets", () => {
  cy.contains('button', 'Aceita pets').click();
  })

When("escolho a opção cobertura", () => {
  cy.get('#l-checkbox-81').click();

})

When("clico no botão buscar", () => {
  cy.contains('#l-button', 'Buscar').click();

})

Then("a lista de resultados é mostrada", () => {
cy.contains('Coberturas para alugar em São Paulo - SP').shouldBe(visible);
})