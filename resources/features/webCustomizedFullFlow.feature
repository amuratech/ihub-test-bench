Feature: Web Development- Customized Requirements Flow

  Background: Checking the full flow of the tasks, from creating the task to deliver the task

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    And Click on create task
    Then Enter task name "Testing web dev customized"
    And Select web task type- Customized Requirements
    And Select web task sub-type- Custom form
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
#    And Enter requirement type webcustomized
    Then Upload requirement doc webcustomized
    And Click save and publish- webcustomized
#    Then Click 'Update ' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    And Click review link
#    Then Select webdev name
#    And Select webdev description
#    And Select webdev due date
#    And Select webdev purposes
#    And Select webdev time slot
#    And Select name- webmanitenance
#    And Select breif- webmaintenance
#    And Select requirement type- webcustomized
#    And Select requirement doc- webcustomized
    Then Rate the brief- webcustomized
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "ashwin@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Select 'Start' option
    And Click 'Add your output' link
#    And Enter QA software link "https://www.google.co.in"- webcustomized
    And Enter staging link "https://www.google.co.in"- webcustomized
#    And Upload approval doc- webcustomized
    Then Click submit- webcustomized
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    And Click review link
#    Then Select webdev thought process
#    And Select staging link
#    And Select QA link
#    And Select staging link
#    And Select approval doc
    And Give link to QA project "www.google.com"
    Then Rate the output- webcustomized
    And Click deliver button



















