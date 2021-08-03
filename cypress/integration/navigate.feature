Feature: Navigate
PLP to PDP
  Scenario: Log in successful
    Given I visit /men-shoes page
    When I click on the first element of PLP
    Then I should be on the PDP page