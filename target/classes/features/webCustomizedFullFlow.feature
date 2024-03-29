Feature: Web Development- Customized Requirements Flow

  Background: Checking the full flow of the tasks, from creating the task to deliver the task

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- web development
    And Click on create task
    When Enter task name "Testing web dev customized"
    And Select web task type- Customized Requirements
    And Select web task sub-type- Custom form
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
#    And Enter requirement type webcustomized
    And Upload requirement doc webcustomized
    And Click save and publish- webcustomized
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "pankit@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click review link
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
    When Accept
    Then Select 'Due date'
    And Select assignee
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "ashwin@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Select 'Start' option
    When Click 'Add your output' link
#    And Enter QA software link "https://www.google.co.in"- webcustomized
    Then Enter staging link "https://www.google.co.in"- webcustomized
#    And Upload approval doc- webcustomized
    And Click submit- webcustomized
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "atul.saini@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    When Select newest
    And Click on apply
    Then Click review link
#    Then Select webdev thought process
#    And Select staging link
#    And Select QA link
#    And Select staging link
#    And Select approval doc
    And Give link to QA project "www.google.com"
    When Rate the output- webcustomized
    Then Click 'Send for secondary review' button

  Scenario: Validate the 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    When Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Approve or Reject the output'
    Then Enter Comments "Testing"
    And Click 'Accept and Mark Delivered' button




















