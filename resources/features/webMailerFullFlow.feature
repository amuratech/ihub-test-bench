Feature: Web Development- Mailer Full Flow

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
    Then Enter task name "Testing web dev mailer"
    And Select web task type- mailer
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    And Enter destination URL "https://www.google.co.in"
    And Click accordion- URL
    And Upload content doc
    And Upload design doc
#    And Click save- web
    And Click save publish- web
    Then Click Publish this task link
    Then Click user name
    And Click 'Sign out'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
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
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    Then Select radio URL
#    And Select radio content doc
#    And Select radio design doc
#    And Select radio image slices
#    And Select content emailer suff info
#    And Select design emailer suff info
    Then Rating the brief
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
#    Then Click 'Update task status' button
#    And Click 'Start'
#    And Click 'Add your output' link
#    And Upload mailer file
#    And Click submit- webmaileroutput
#    Then Click 'Update task status'
#    And Click 'Review'
#    Then Click user name
#    And Click 'Sign out'
    And Click 'Update' link
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
#    Then Select webdev thought process
#    And Select radio mailer file
#    And Rate the adherence to submitted design
#    And Rate the adherence to coding standards
    And Rate the output- webmailer
    Then Click deliver button








