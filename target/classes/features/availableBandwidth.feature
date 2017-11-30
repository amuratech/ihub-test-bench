Feature: Bandwidth calculation
  Scenario: Validate if bandwidth is reflected when the task is assigned
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    And Check the Content Bandwidth