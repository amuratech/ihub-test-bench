Feature: Social Adhoc Post- Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name ""
    And Select the department- social
    And Click on create task
    Then Enter task name
    And Enter task type- adhoc post
    Then Select reference task-------------Need to create Content- Social post task
    And Purpose of task
    And Enter the time
    Then Save and add brief

  Scenario: Validate 'Add Input Brief'



