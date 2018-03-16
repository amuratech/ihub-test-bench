Feature: Content Review Forum Participation- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Review Forum Participation"
    And Select task type- Content Review Forum
    And Enter Brief "Testing content review forum brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And  Click 'Add input brief' link
    Then Select Tonality
    And Click 'Save' button- Content Review
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "/"
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the brief- Content Review Forum
    When Accept
    Then Select 'Due date'
    And Select assignee for Content
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Content "Testing review forum content"
    And Enter Thought process "Testing thought process"
    And Click 'Save' button- Content Review Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Enter 'Does your output sufficiently solve the queries on the forum or reviews platform' "Testing"
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Review Forum
    Then Click 'Send for secondary review' button

  Scenario: Validate 'Secondary Output Review'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    When Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button




