Feature: Check status for overdue tasks under All Tasks Page

  Scenario: Check the date section under all tasks page
    Given Launch the url ""
    Then Click on username/email id "anupriya@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click Overdue
    And Check the date
