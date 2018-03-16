Feature: Social Media Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- social
    When Click on create task
    Then Enter task name "Testing Social Media Plan"
    And Enter task type- Social Media Plan
    And Enter Brief "Testing social media plan brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
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
    And Enter budget "10000"- social media plan
    And Enter objective "Testing"- social media plan
    And Click 'Save' button- Social MP Input
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
    Then Rate the input- social media plan
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
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing thought process"- Social Media Plan
    And Upload media plan output document
    And Click 'Save' button- social media plan output
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
    Then Enter 'Review based on how well the plan adheres to requested theme or idea' "Testing"
    And Enter 'Review based on how well the plan adheres to the requested TG' "Testing"
    When Rate the output- social media plan output
    Then Click 'Send for secondary review' button

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
     














