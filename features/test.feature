Feature: Sauce Demo basic test

  Scenario: Standard user login 
    Given I open the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be in products page

  Scenario: Locked out user
    Given I open the login page
    When I login with "locked_out_user" and "secret_sauce"
    Then I should see an error
