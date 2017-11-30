Feature: Web Development- SEO Flow
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
    Then Enter task name "Testing web SEO"
    And Select web task type- SEO update
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on 'Task' from side panel
#    Then Click on web development
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add/Edit input brief'
    Then Enter URL "https://www.google.co.in/"- Web SEO
    And Enter meta title "Testing SEO input brief"
    And Enter meta keywords "Testing"
    And Click accordion- meta keywords
    And Enter meta desc "Testing meta description"
#    And Click save button- webseo
    And Click save and publish- webseo
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
    Then Select name
    And Select desc
    And Select due date
    And Select purpose radio button
    And Select time
    Then Select radio URL
    And Select radio title
    And Select radio keywords
    And Select radio desc
    Then Rating the brief
    And Click the accept
    Then Select assignee
    And Select task start date
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
    Then Click start working
    Then Click add output
    Then Enter thought process- webseo
    And Enter URL- webseo
    Then Click submit- webseo
#    Then Select status- Review
#    And Click update button

  Scenario: Validate 'Add Output', if user choose to add output later
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
#    Here task is in 'In Progress' status, so there is no 'Start working' button
    Then Click add output
    Then Enter thought process- webseo
    And Enter URL- webseo
    Then Click submit- webseo
#    Then Select status- Review
#    And Click update button

  Scenario: Validate 'Change the status to Review', if output is already added
#    If the task is not submitted for the review at the time, output is added and it is
#    pending for the review
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select status- web
    And Click update button

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
    And Select URL- webseo
    Then Rating- webseo output
    And Click deliver- webseo


  Scenario: Validate 'Review the Output', if 'Rework' has to be alloted
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
    And Select URL- webseo
    Then Rating- webseo output
    Then Click on rework
    Then Select newest
    And Click on apply
    Then Select status- web
    And Click update web

  Scenario: Validate 'Review the Output',if 'Rework' has to be alloted but decided to assign it later
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "sanjay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select status- web
    And Click update web

  Scenario: Validate 'Add Output', after 'Rework' is alloted
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select status- web
    And Click update button

  Scenario: Validate 'Review the Output' after 'Rework' is done
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
    And Select URL- webseo
    Then Rating- webseo output
    And Click deliver- webseo