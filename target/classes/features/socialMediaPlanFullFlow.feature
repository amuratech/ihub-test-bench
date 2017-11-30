Feature: Social Media Plan- Full Flow

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
    Then Enter task name "Testing Social Media Plan"
    And Enter task type- Social Media Plan
    And Enter Brief "Testing social media plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on social
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click review link
    Then Enter reference website link- "https://www.google.co.in"
    And Click reference website accordion
    Then Enter budget "10000"- social media plan
    And Enter objective "Testing"- social media plan
    And Click 'Save' button- Social MP Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rushikesh@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input- social media plan
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "pranoti@amuratech.com"
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
    Then Enter thought process "Testing thought process"- Social Media Plan
    And Upload media plan output document
    Then Click 'Save' button- social media plan output
    Then Click 'Update' link
    And Click 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    Then Click on username/email id "tabassum@amuratech.com"
#     There is no user created for Tabassum in staging
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Review based on how well the plan adheres to requested theme or idea' "Testing"
    And Enter 'Review based on how well the plan adheres to the requested TG' "Testing"
    And Rate the output- social media plan output
    Then Click deliver button












