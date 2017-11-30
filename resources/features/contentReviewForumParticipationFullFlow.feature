Feature: Content Review Forum Participation- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Review Forum Participation"
    And Select task type- Content Review Forum
    And Enter Brief "Testing content review forum brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura123"
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
    Then Click 'Update' link
    And Select 'Publish'
#    Then Click user name
#    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the brief- Content Review Forum
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
#    Then Click user name
#    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "abhay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter Content "Testing review forum content"
    And Enter Thought process "Testing thought process"
    And Click 'Save' button- Content Review Output
    Then Click 'Update' link
    And Select 'Review'
#    Then Click user name
#    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Enter 'Does your output sufficiently solve the queries on the forum or reviews platform' "Testing"
    And Upload Reference document- Content Output  Review
    Then Rate the output- Content Review Forum
    Then Click deliver button



