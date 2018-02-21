Feature: Content Case Study- full flow of the task
  Full flow of the Content Case Study task

  Scenario: Validate 'Create a task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Case Study"
    And Select task type- Content Case Study
    And Enter Brief "Testing content case study brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

   Scenario: Validate 'Add input brief'
     When Click 'Add input brief' link
     Then Enter Purpose "Testing the purpose"- Content Case Study input
     And Enter Results "Testing the results"
     And Enter Keywords- Content Case Study input
     And Enter Strategy and execution details "Testing the strategy"
     And Click 'Save' button- Content Case Study Input
     And Click 'Update' link
     And Select 'Publish'

     Then Click user name
     And Click 'Sign out'

   Scenario: Validate  'Review input brief'
     When Click on username/email id "meenakshi@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     Then Click on assigned to me
     And Select newest
     When Click on apply
     Then Click review link
     And Rate the brief- Content Case Study
     When Accept
     Then Select assignee for Content
     And Select 'Due date'
     Then Click assign button

     When Click user name
     Then Click 'Sign out'

   Scenario: Validate 'Add output'
     When Click on username/email id "abhay@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     And Click on assigned to me
     When Select newest
     And Click on apply
     Then Click on Edit
     When Click 'Update' link
     Then Click 'Start'
     When Click 'Add your output' link
     Then Upload Case study document
     And Click 'Save' button- Content Case Study Output
     When Click 'Update' link
     Then Click 'Review'

     When Click user name
     Then Click 'Sign out'

   Scenario: Validate 'Review the output'
     When Click on username/email id "meenakshi@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     And Click on assigned to me
     When Select newest
     And Click on apply
     Then Click review link
     When Rate the output- Content Case Study
     Then Click deliver button