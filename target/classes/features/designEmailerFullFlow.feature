Feature: Design- Emailer Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Emailer"
    And Select task type- Design Emailer
    And Select task sub-type- Sales
    And Enter Brief "Testing design emailer brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on design
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
    Then Upload Offline Creative
    And Upload Content Emailer reference doc
    Then Click 'Save' button- Design Emailer
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'


  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
#    And Click on dashboard
#    And Show the count
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rating
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "navni@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
#    And Click on the save button
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    Then Upload designs
    Then Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select radio thought
#    And Select radio doc
#    Then Enter reason for incorrect
    And Rate
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    Then Click deliver button