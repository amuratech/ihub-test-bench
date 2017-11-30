Feature: Web Development- Customized Requirements Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name "Runwal"
    And Select the department
    And Click on create task
    Then Enter web task name
    And Enter web task type
    And Purpose of task web
    And Enter the time web
    Then Save and add brief web

  Scenario: Validate 'Add Input' and save for now
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "shahbaz@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      Then Click on web development
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click on development brief link
      Then Enter name- input webcustomized
      And Enter brief- input webcustomized
      And Enter requirement type webcustomized
      And Upload requirement doc webcustomized
      Then Click save and publish- webcustomized

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
    Then Select webdev name
    And Select webdev description
    And Select webdev due date
    And Select webdev purposes
    And Select webdev time slot
    And Select name- webmanitenance
    And Select breif- webmaintenance
    And Select requirement type- webcustomized
    And Select requirement doc- webcustomized
    Then Rate the brief- webcustomized
    And Click accept- webcustomized
    Then Select assignee
    And Select task start date
    Then Click assign button

  Scenario: Validate 'If user is going to start the work'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click start working- webcustomized

  Scenario: Validate 'Add Output' and send it for review
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click add output
    And Enter web thought process
    And Enter QA software link- webcustomized
    And Enter staging link- webcustomized
    And Upload approval doc- webcustomized
    Then Click submit- webcustomized
    Then Change the status- webdev
    And Click update button- webdev

  Scenario: Validate 'If the output is already added and now it has to send for review'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Change the status- webdev
    And Click update button- webdev

    Scenario: Validate 'Review the output'
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
      And Select staging link
      And Select QA link
      And Select staging link
      And Select approval doc
      Then Rate the output- webcustomized
      And Click deliver- webcustomized



















