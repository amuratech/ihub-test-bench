Feature: Finance- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Finance
    When Click on create task
    And Enter task name "Testing Finance"
    And Enter Task brief "Testing finance task brief"- Finance
    Then Click 'Save' button- Finance

  Scenario: Validate 'Add Input Brief'
    When Select Campaign start date
    And Enter Amount "100000"
    Then Click 'Save' button- Finance input
    When Click 'Update' link
    Then Select 'Publish'
    And Click the alert
