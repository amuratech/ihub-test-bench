Feature: Design- Emailer Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    When Click on create task
    Then Enter task name "Testing Design Emailer"
    And Select task type- Design Emailer
    And Select task sub-type- Sales
    And Enter Brief "Testing design emailer brief"
    And Enter Due date
    And Select time slot
    And Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on design
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
    When Upload Offline Creative
#    And Upload Content Emailer reference doc
    And Select Emailer content task reference- Design Emailer
    Then Click 'Save' button- Design Emailer
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'


  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
#    And Click on dashboard
#    And Show the count
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rating
    When Accept
    Then Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

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
    Then Click on Edit
#    And Click on the save button
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    And Upload designs
    When Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    Then Click 'Update' link
    And Select 'Review'
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
    When Rate the output- Design Emailer
    Then Click 'Send for secondary review' button
  
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
    Then Click 'Approve or Reject the output'
    When Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button
