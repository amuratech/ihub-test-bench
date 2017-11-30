Feature: Validate 'Task Referencing'
  Scenario: Validate 'Content Hoarding' task referencing
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    Then Click add a task
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Hoarding"
    And Select task type- hoarding
    Then Select task sub-type- hoarding
#    And Select purpose
    And Select time slot- content
    Then Click 'save and add brief' button- content
    Then Enter height ""
    And Enter width ""
    And Select client project- content hoarding
    And Select 'campaign plan' reference task
    Then Click 'Save' button


