Feature: Design Print Media Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Print Media"
    And Select task type- Design Print Media
    And Select task sub-type- Brochure
    And Enter Brief "Testing design print media brief"
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
#    Then Enter product name
#    And Select sub type
#    And Enter content
    And Enter Width "227"
    And Enter Height "229"
    And Enter Budget "10000"
    And Enter Paper Type "Testing"
    And Upload 'Content Print Media' reference doc
    Then Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar- Admin
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    And Dimension
#    And Usps
#    And Budget
#    And Paper type
#    And Select Content Print Media doc suff info
#    And Select Product suff info
#    And Select Content Print Media reference task suff info
#    Then Click on accept button
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
#    Then Click 'Start working on this task' button
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
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate
    Then Click deliver button

