Feature: Finance- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Finance
    And Click on create task
    Then Enter task name "Testing Finance"
    And Enter Task brief "Testing finance task brief"- Finance
    Then Click 'Save' button- Finance

  Scenario: Validate 'Add Input Brief'
    And Select Campaign start date
    And Enter Amount "100000"
    And Click 'Save' button- Finance input
    When Click 'Update' link
    And Select 'Publish'
    Then Click the alert
