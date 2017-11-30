Feature: Check status for priority tasks under All Tasks Page

  Scenario: Check the tag field under all tasks page
    Given Launch the url ""
    Then Click on username/email id "anupriya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click Priority
    And Check the tags
