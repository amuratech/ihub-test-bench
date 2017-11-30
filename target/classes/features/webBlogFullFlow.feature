Feature: Web Development- Blog Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    And Click on create task
    Then Enter task name "Testing web dev blog"
    And Select web task type- Blog
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Then Upload content blogpost reference doc
    And Enter meta keywords "Testing"- Web Blog
    Then Click 'accordion' to add keywords
    And Enter meta desc "Testing meta description"
    Then Click 'Save' button- Web Blog Input
    Then Click 'Update' link
    And Select 'Publish'

  Scenario: Validate 'Review Input Brief'
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "sanjay@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      Then Click on web development
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click review link
      Then Rate the input brief- Web Blog
      And Accept
      Then Select assignee
      And Select 'Start date'
      Then Click assign button
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Enter Final URL "https://www.google.co.in/"
    And Click 'Save' button- Web Blog Output
    Then Click 'Update' link
    And Select 'Review'

   Scenario: Validate 'Review the Output'
     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "sanjay@amuratech.com"
     Then Click on password "amura123"
     Then Click on sign in button
     Then Click on task sidebar
     Then Click on web development
     And Click on assigned to me
     Then Select newest
     And Click on apply
     Then Click review link
     And Rate the output- Web Blog
     Then Click deliver button
