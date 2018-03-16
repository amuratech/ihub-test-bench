Feature: Design Infographics Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Infographics"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing design infographics brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Then Upload 'Client Content' reference task
    When Select Website content task ref
    And Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
#    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    Then Click on design
    And Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Design Infographics
    And Accept
    When Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    Then Click assign button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "varsha.j@amuratech.com"
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

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    Then Rate the output- Design Infographics
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Secondary Output Review'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button

