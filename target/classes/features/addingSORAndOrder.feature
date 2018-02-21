Feature: SOR and order assiging/changing

  There can be multiple SOR's and need to assign order to them
  In the same order reviewers will get the task for output review
  Super admin has the access to change/assign the SOR and the order

  Scenario: Validate 'Add a task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing adding SOR and Order"
    And Enter task type- Content Idea
    And Enter Brief "Testing"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add SOR and order'
    When Click on username/email id "ketan@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar- Superadmin
    And Click content
    Then Click 'All' pagination
    And Select newest
    And Click on apply
    When Click on Edit
    And Click 'Click to add' link
    Then Select the user to add as SOR
    And Select the order to be assigned
    When Click 'Save and add input brief' button
    Then SOR and the order should be assigned


