Feature: Social- Report- Full Flow

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
    When Enter task name "Testing Social Report"
    And Enter task type- Social Media Report
    And Select task sub-type- Social Media Report Campaign
    And Enter Brief "Testing social report brief"
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
#    Then Click on Edit
#    When Click 'Add input brief' link
    When Enter Campaign name "Testing campaign name"
    And Select Report start date
    And Select Report end date
    And Select Platforms- Social Report
    Then Click 'Save' button- Social Report Input
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
    Then Rate the input- Social Report
    When Accept
#    Then Select 'Due date'
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
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Upload Report doc
    And Click 'Save' button- Social Report Output
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
    Then Rate the output- social post
    And Click 'Send for secondary review' button
#      And Click rework- social cms

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










