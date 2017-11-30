Feature: PPC- Execution Full Flow

  Scenario: Validate 'Create a task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Paid Media
    And Click on create task
    Then Enter task name "Testing Paid Media Execution"
    And Select web task type- Execution
    And Enter Brief "Testing paid media execution brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click Paid Media
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add input brief' link
    Then Upload Design ad reference doc
    And Upload Media plan reference doc
    And Upload Ad communication reference doc
    And Enter website URL- "www.google.com"
    And Click 'Save' button- Paid Media Input
    Then Click 'Update' link
    And Select 'Publish'

    Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pavan@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- campaign execution
      And Accept
      Then Select assignee
      And Select 'Start date'
      Then Click assign button
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Add output'
     Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "supriya.v@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
#    And Click 'Edit your output' link
#    And Enter 'Advertising automation dashboard URL' "https://www.google.co.in"
#    Then Upload 'Ad screenshot' file'
    Then Click 'Submit' button
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pavan@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the output brief- Paid Media
    And Click deliver button