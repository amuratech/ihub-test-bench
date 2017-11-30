Feature: Marketing Brief- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Marketing
    And Click on create task
    Then Enter task name "Testing Marketing Brief"
    And Enter task type- Marketing Brief
    And Enter Brief "Testing marketing brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "ketan@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar- Admin
#    And Click Marketing
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add input brief' link
#    And Click 'Edit input brief' link
    Then Enter Objective "Testing"- Marketing
    And Enter Brief provided by client "Testing brief provided by the client"
    And Click 'Save' button- Marketing Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "jasmine@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- Marketing Brief
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "jasmine@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter Objective "Testing marketing brief"
    And Enter Budget "10000"- Marketing Brief
    And Select start date of campaign
    And Select end date of campaign
    And Enter Offers
    And Enter Communication guidelines
    Then Select a competitor
    And Select a project
    Then Click 'Save' button- Marketing Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "jasmine@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the output brief- Marketing Brief
    And Click deliver button



