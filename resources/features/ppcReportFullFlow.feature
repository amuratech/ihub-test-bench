Feature: PPC- Report Full Flow

  Scenario: Validate 'Create a task' for PPC Report
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Paid Media
    And Click on create task
    When Enter task name "Testing Paid Media Report"
    And Select web task type- Report
    And Enter Brief "Testing paid media report brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief' for PPC Report
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Add input brief' link
#    Then Report for entire campaign- Yes
#    When Report for entire campaign- No
#    And Select start date- Paid Media Report
#    And Select end date- Paid Media Report
#    And Enter Campaign execution task reference
    When Select Campaign Execution task reference
    And Click 'Save' button- Paid Media Report Input
    When Click 'Update' link
    Then Select 'Publish'
    When Click 'Update' link
    Then Select 'Publish'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url ""
    When Click on username/email id "madhavi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Paid Media Report
    When Accept
    Then Select 'Due date'
    And Select assignee for Campaign
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "smita@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Optimizations undertaken "Testing optimizations"
    And Enter Observations "Testing observations"
    And Upload Report document
    And Click 'Save' button- Paid Media Report Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    When Click on username/email id "madhavi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output brief- Paid Media Report
    And Click 'Send for secondary review' button
    
    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      And Click on task sidebar
      When Click Paid Media
      And Click on assigned to me
      Then Select newest
      And Click on apply
      When Click on Edit
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the task with the SOR"
      And Click 'Accept and Mark Delivered' button
