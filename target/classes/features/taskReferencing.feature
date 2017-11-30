Feature: Task referencing

  For some of the tasks, there are few reference tasks which are necessary to be referenced
  before going ahead. Here, we are checking for Web Development Mailer task for which Content E mailer
  and Design E mailer task are mandatory to be reference

  Scenario:  Validate if user is able to select correct referenced task

    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
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
    And Enter destination URL "https://www.google.co.in"
    And Click accordion- URL
    Then Enter 'content emailer' reference task
#    And Upload content doc
    And Enter 'design emailer' reference task
#    And Upload design doc
    And Click save- web
#    And Click save publish- web


