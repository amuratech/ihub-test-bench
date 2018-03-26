Feature: Meeting Full Flow

  Scenario: Validate 'Schedule and Conduct the meeting'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- meeting
    And Click on create task
    When Enter Title "Testing Meeting"
    And Select Schedule on
    And Enter Agenda "Testing"
    And Select Attendees
    Then Click 'Save' button- Meeting
    And Click 'Schedule this meeting' link
    And Click 'Mark as conducted'