Feature: SEO Audit Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- seo
    And Click on create task
    When Enter task name "Testing SEO Audit"
    And Enter task type- seo audit
    And Enter Brief "Testing SEO audit brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on task sidebar
#    And Click SEO
#    Then Click on assigned to me
#    And Select newest
#    And Click on apply
#    And Click on Edit
#    When Click 'Add input brief' link
    When Enter URL "https://www.google.co.in/"
    And Select requirements
    And Click Save- seoaudit
    Then Click 'Update' link
    And Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate input brief- seoaudit
    When Accept
    Then Select assignee for seo
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "minal@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Upload audit doc
    And Click save- seoaudit
    When Click 'Update' link
    And Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output- seoaudit
    And Click 'Send for secondary review' button
#    And Click rework button- seo

  Scenario: Validate 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    And Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    And Click 'Approve or Reject the output'
    Then Enter Comments "Testing the task with the SOR"
    And Click 'Accept and Mark Delivered' button
