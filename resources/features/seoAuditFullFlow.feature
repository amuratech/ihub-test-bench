Feature: SEO Audit Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- seo
    And Click on create task
    Then Enter task name "Testing SEO Audit"
    And Enter task type- seo audit
    And Enter Brief "Testing SEO audit brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Add input brief' link
    And Enter URL "https://www.google.co.in/"
    Then Select requirements
    And Click Save- seoaudit
    Then Click 'Update' link
    And Select 'Publish'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate input brief- seoaudit
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "minal@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Upload audit doc
    And Click save- seoaudit
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the output- seoaudit
    Then Click deliver button
#    And Click rework button- seo

