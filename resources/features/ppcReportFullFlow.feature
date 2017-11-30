Feature: PPC- Report Full Flow


  Scenario: Validate 'Create a task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Paid Media
    And Click on create task
    Then Enter task name "Testing Paid Media Report"
    And Select web task type- Report
    And Enter Brief "Testing paid media report brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "ketan@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar- Admin
    And Click Paid Media
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Add input brief' link
    #    Then Report for entire campaign- Yes
    And Report for entire campaign- No
    Then Select start date- Paid Media Report
    And Select end date- Paid Media Report
    Then Enter Campaign execution task reference
    And Click 'Save' button- Paid Media Report Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click 'Update' link
    And Select 'Publish'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pavan@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- Paid Media Report
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "kiran.sutar@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter Optimizations undertaken "Testing optimizations"
    And Enter Observations "Testing observations"
    And Upload Report document
    And Click 'Save' button- Paid Media Report Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pavan@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click review link
    Then Rate the output brief- Paid Media Report
    And Click deliver button