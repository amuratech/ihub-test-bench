Feature: Design Website- Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Banner"
    And Select task type- Banner
    And Enter Brief "Testing design banner brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Given Launch the url ""
    Then Click on username/email id "ketan@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    Then Select Image format
    And Enter Height "27"- Design Banner
    And Enter Width "27"- Design Banner
    And Enter Content ""
    Then Click 'Save' button- Design Banner Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'


  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click review link
    Then Rate
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    And Type with sufficient info
#    And Devices with info
#    And Reference info
#    And CTA info
#    And Usps info
#    And Tags info
#    And Select content website suff info
#    And Select content sitemap suff info
#    And Func info
#    And Reference images
#    And Target info
#    And Product
#    And Select content website reference task suff info
#    And Select content sitemap reference task suff info
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "navni@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
#    Then Click 'Edit your output' link
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
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click review link
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate
    Then Click deliver button



