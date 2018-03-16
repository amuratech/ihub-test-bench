Feature: Content Case Study- full flow of the task
  Full flow of the Content Case Study task

  Scenario: Validate 'Create a task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Case Study"
    And Select task type- Content Case Study
    And Enter Brief "Testing content case study brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

   Scenario: Validate 'Add input brief'
#     When Click 'Add input brief' link
     Then Enter Purpose "Testing the purpose"- Content Case Study input
     And Enter Results "Testing the results"
     And Enter Keywords- Content Case Study input
     And Enter Strategy and execution details "Testing the strategy"
     And Click 'Save' button- Content Case Study Input
     When Click 'Update' link
     Then Select 'Publish'

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
     And Select 'Due date'
     Then Select assignee for Content
     And Click assign button

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
     Given Launch the url ""
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
     Then Click 'Send for secondary review' button

     When Click user name
     Then Click 'Sign out'

  Scenario: Validate 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    And Click 'Approve or Reject the output'
    Then Enter Comments "Testing the secondary output review"
    And Click 'Accept and Mark Delivered' button


