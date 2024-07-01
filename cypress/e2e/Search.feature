Feature: Zap Imoveis - Pesquisa de imóvel

    Scenario: Validar a pesquisa de imóveis no site Zap Imóveis
        Given que eu estou na página do portal Zap Imóveis
        When Clico no botão alugar
        And pesquiso na cidade de são paulo    
        And escolho o tipo de imóvel Cobertura
        And Clico na opção aceita pets
        And clico no botão buscar
   