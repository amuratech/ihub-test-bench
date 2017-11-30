Feature: Social Audit- Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- social
    And Click on create task
    Then Enter task name "Testing Social Audit"
    And Enter task type- Social Audit
    And Enter Brief "Testing social audit brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Add input brief' link
    Then Enter reference link "www.google.com"- social
    And Click reference link accordion
    And Enter 'platform to consider'
    And Enter requirements- social audit
#    And Enter specific objectives
    Then Click save button- social audit input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "diya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select purpose radio button
#    And Select time
#    And Select reference link suff
#    And Select 'platform to consider' suff
#    And Select reqirements suff
#    And Select specific objectives suff
    Then Rate the input- social audit
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "pranav@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Upload audit document
    Then Click submit button- social audit output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'


  Scenario: Validate 'Review the output'
    Given Launch the url ""
    Then Click on username/email id "diya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Does the audit cover all the requirements mentioned in the tasks' "Yes"
    And Enter 'Has the auditor given recommendations' "Yes"
    And Enter 'Is the audit well formatted, presentable and follows our design guidelines' "Yes"
    Then Rate the output- social audit
    And Click deliver button
#    And Click rework- social audit










