Feature: Web Development- Maintenance Flow
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
    Then Enter task name "Testing web maintenance work"
    And Enter web task type- Maintenance Work
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief' and Publish it, when the task is in 'Draft' status
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on 'Task' from side panel
#    Then Click on web development
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add/Edit input brief'
    And Enter name "Testing"- webmaintenance
    And Enter brief "Testing brief"- webmaintenance
    And Enter URL "https://www.google.co.in/"- webmaintenance
    And Select hosting- webmaintenance
#    And Click save- webmaintenance
    And Click save and publish- webmaintenance
#    Then Click user name
#    And Click 'Sign out'

  Scenario: Validate 'Add Input Brief', if user want to save now and publish later
#    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on development brief link
    And Select status- webmaintenance
    And Click update- webmaintenance

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
    Then Select name
    And Select desc
    And Select due date
    And Select time
    And Select task type suff info
    And Select task sub-type suff info
    And Select name- webmanitenance
    And Select brief- webmaintenance
    And Select URL- webmaintenance
    And Select hosting type- webmaintenance
    And Select content ref doc
    And Select ftp detail
    And Select server detail
    And Select images
    And Select content task suff info
    And Rate brief- webmaintenance
    And Click accept- webmaintenance
    Then Select assignee
    And Select task start date
    Then Click assign button

  Scenario: Validate 'If user starts working on the task' and add the output later
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click start working on this task- webmaintenance

  Scenario: Validate 'Add output', when the task is in 'In Progress'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click add output- webmaintenance
    Then Enter thought process- webmaintenance
    And Enter URL output- webmaintenance
    Then Click submit- webmaintenance
    And Select status- webmaintenance
    And Click update output- webmaintenance

    Scenario: Validate 'When user change the status to 'review'
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "pankit@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      Then Click on web development
      And Click on assigned to me
      Then Select newest
      And Click on apply
      And Select status- webmaintenance
      And Click update output- webmaintenance

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
    Then Select webdev thought process
    And Select radio URL- webmaintenance
    Then Rate the output- webmaintenance
    And Click the deliver button- webmaintenance





