Feature: Check status for unassigned tasks under All Tasks Page

  Scenario: Check the status field under all tasks page for published tasks
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click Unassigned
    And Check the status
