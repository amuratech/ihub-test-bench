Feature: Design- Social Post- Full Flow
  
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Design
    And Click on create task
    When Enter task name "Testing design social post"
    And Enter task type- Design Social Post
    And Select task sub-type- JPEG Post
    And Enter Brief "Testing design social post brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    When Select Social post content task reference
    And Select Media
#    And Upload Social post content reference doc
    Then Click 'Save' button- Design Social Cover Input
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input- Design Social Cover
    When Accept
    Then Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "varsha.j@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    Then Upload designs
    Then Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    When Rate the output- Design Social Post
    Then Click 'Send for secondary review' button

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      And Click on task sidebar
      When Click on design
      And Click on assigned to me
      Then Select newest
      And Click on apply
      When Click on Edit
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the task with the SOR"
      And Click 'Accept and Mark Delivered' button


