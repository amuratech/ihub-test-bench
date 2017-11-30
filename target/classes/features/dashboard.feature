Feature: Dashboard
  Scenario: Validate 'If users without any tasks in 'In Progress' is
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on dashboard
    And Check the errors
