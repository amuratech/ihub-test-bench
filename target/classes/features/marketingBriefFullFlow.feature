Feature: Marketing Brief- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Marketing
    When Click on create task
    Then Enter task name "Testing Marketing Brief"
    And Enter task type- Marketing Brief
    And Enter Brief "Testing marketing brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "ketan@amuratech.com"
#    Then Click on password "amura!@#"
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
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url ""
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Marketing Brief
    When Accept
    Then Select 'Due date'
    And Select assignee for Marketing Brief
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "gautham@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    Then Click 'Add your output' link
    And Enter Objective "Testing marketing brief"
    And Enter Budget "10000"- Marketing Brief
    And Select start date of campaign
    And Select end date of campaign
    And Enter Offers
    And Enter Communication guidelines
    And Select a competitor
    And Select a project
    And Click 'Save' button- Marketing Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output brief- Marketing Brief
    And Click 'Send for secondary review' button

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click Marketing
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Approve or Reject the output'
      When Enter Comments "Testing the task delivered"
      Then Click 'Accept and Mark Delivered' button



