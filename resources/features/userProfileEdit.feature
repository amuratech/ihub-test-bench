Feature: User Profile Edit
  Scenario: Valid login with user profile edit
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on username/email id "piyush@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on menu icon
    Then Click on dashboard
    Then Check the errors
    Then Click on users
    Then Select the action show
    Then Click on Edit tab
    And Edit email field
    And Click on save
