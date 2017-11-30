Feature: Design Infographics Full Flow

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
    Then Enter task name "Testing Design Print Media"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing design print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

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
#    Then Enter product name
#    And Select sub type
#    And Enter content
    Then Upload 'Client Content' reference task
    Then Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'


  Scenario: Validate 'Review the Input Brief'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- Design Infographics
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button


  Scenario: Validate 'Add Output'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "swapnali@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
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


  Scenario: Validate 'Review the Output'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shaunak@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    Then Click deliver button

