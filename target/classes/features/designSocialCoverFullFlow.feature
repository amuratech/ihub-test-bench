Feature: Design- Social Cover- Full Flow

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
    When Enter task name "Testing design social cover"
    And Enter task type- Design Social Cover
    And Select task sub-type- Adaption
    And Enter Brief "Testing design social cover brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    When Select Social post content task reference
    And Select platforms
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
#    Then Select name with sufficient info
#    And Description with insufficient info
#    Then Due date with sufficient
#    And Purposes with sufficient info
#    And Time slot
#    And Ref links
#    And Ad radio button
#    And Ad copy
#    And Target radio button
#    And Product radio button
#    And Ref images
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
    When Upload designs
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
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate the output- Design Social Cover
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'


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


