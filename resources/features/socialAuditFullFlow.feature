Feature: Social Audit- Full Flow
  
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- social
    And Click on create task
    When Enter task name "Testing Social Audit"
    And Enter task type- Social Audit
    And Select task sub type- Social Full Audit
    And Enter Brief "Testing social audit brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on task sidebar
#    And Click on social
#    Then Click on assigned to me
#    And Select newest
#    And Click on apply
#    And Click on Edit
#    When Click 'Add input brief' link
    Then Enter reference link "www.google.com"- social
    And Click reference link accordion
    And Enter 'platform to consider'
    And Enter requirements- social audit
#    And Enter specific objectives
    And Click save button- social audit input
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "rushikesh@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
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
    When Accept
    Then Select 'Due date'
    And Select assignee for Social
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "pranoti@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    When Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Upload audit document
    And Click submit button- social audit output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'


  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "tabassum@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Does the audit cover all the requirements mentioned in the tasks' "Yes"
    And Enter 'Has the auditor given recommendations' "Yes"
    And Enter 'Is the audit well formatted, presentable and follows our design guidelines' "Yes"
    When Rate the output- social audit
    Then Click 'Send for secondary review' button 
#    And Click rework- social audit


  Scenario: Validate 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    When Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button
         









