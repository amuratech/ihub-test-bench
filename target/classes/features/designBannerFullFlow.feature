Feature: Design Website- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Design
    When Click on create task
    Then Enter task name "Testing Design Banner"
    And Select task type- Banner
    And Select task sub type- Website Banner
    And Enter Brief "Testing design banner brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on task sidebar
#    And Click on design
#    Then Click on assigned to me
#    And Select newest
#    And Click on apply
#    And Click on Edit
#    When Click 'Add input brief' link
    Then Select Image format
    And Enter Height "27"- Design Banner
    And Enter Width "27"- Design Banner
    And Enter Content "Testing the content"
    And Click 'Save' button- Design Banner Input
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
    And Click review link
    And Rate the input brief- Design Banner
    When Accept
    And Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    Then Click assign button
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
    And Click on Edit
#    When Click 'Update' link
#    Then Click 'Start'
    When Click 'Add your output' link
#    Then Click 'Edit your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button- Design Banner
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
    When Rate the output- Desing Banner
    Then Click 'Send for secondary review' button

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click on design
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Approve or Reject the output'
      When Enter Comments "Testing the task delivered"
      Then Click 'Accept and Mark Delivered' button



