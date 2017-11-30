Feature: Meeting Full Flow
  Scenario: Validate 'Create a task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- meeting
    And Click on create task
    Then Enter Title "Testing Meeting"
    And Select Schedule on
    And Enter Agenda "Testing"
    And Select Attendees
    Then Click 'Save' button- Meeting
    And Click 'Schedule this meeting' link
