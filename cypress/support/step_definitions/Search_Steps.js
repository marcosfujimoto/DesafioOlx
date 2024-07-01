import { Given, When, And, Then } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.zapimoveis.com.br/";
Given("que eu estou na página do portal Zap Imóveis", () => {
  cy.visit(url);
});

When("Clico no botão alugar", () => {
  cy.get('[data-cy="aluguel-tab"]').click();
});

When("pesquiso na cidade de são paulo", () => {
  cy.get('input[placeholder="Digite o nome da rua, bairro ou cidade"]').click().type('São Paulo');
  cy.get('[data-testid="undefined-item-0-0"]').click();
})

When("escolho o tipo de imóvel Cobertura", () => {
  cy.get('.l-dropdown__trigger > [data-testid="l-button"]').click();
  cy.get('[data-testid="undefined-item-0-7"]').click();
  cy.get('.l-dropdown__trigger > [data-testid="l-button"]').click();
  

})

When('clico no botão buscar', () => { 
  cy.contains('button' ,'buscar').click()
})

When("Clico na opção aceita pets", () => {
  cy.contains('button', 'Buscar').click();
  })

  Then("a lista de resultados é mostrada", () => {
    cy.contains('Coberturas para alugar em São Paulo - SP').shouldBe(visible);
    })
