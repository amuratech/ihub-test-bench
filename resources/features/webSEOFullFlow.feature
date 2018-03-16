Feature: Web Development- SEO Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    And Click on create task
    Then Enter task name "Testing web SEO"
    And Select web task type- SEO update
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Then Enter URL "https://www.google.co.in/"- Web SEO
    And Enter meta title "Testing SEO input brief"
    And Enter meta keywords "Testing"
    And Click accordion- meta keywords
    And Enter meta desc "Testing meta description"
#    And Click save button- webseo
    And Click Save and publish later button- Web SEO
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    Then Select radio URL
#    And Select radio title
#    And Select radio keywords
#    And Select radio desc
    Then Rating the brief
    And Accept
    When Select 'Due date'
    Then Select assignee for Web Development
#    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "ashwin@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
#    Then Enter thought process "Testing thought process"- webseo
    And Enter URL "https://www.google.co.in"- webseo
    Then Click submit- webseo
    Then Click 'Update task status'
    And Click 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output' and 'Deliver' the task
    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select webdev thought process
#    And Select URL- webseo
    Then Rating- webseo output
    And Click 'Deliver' button

    When Click user name
    Then Click 'Sign out'
