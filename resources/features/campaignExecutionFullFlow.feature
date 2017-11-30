Feature: Campaign Execution- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- campaign
    And Click on create task
    Then Enter task name "Testing"
    And Enter campaign task type- execution
    And Select purpose
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Then Select client project- campaign
    And Search and select 'client copy idea' task
    And Search and select 'website development' task
    And Enter website URL- "https://www.google.co.in"
    And Search and select 'design ad' task
    And Search and select media plan task
    And Search and select 'content ad' task
    And Click save and publish button- campaign input
    Then Select the status 'Publish'
    And Click 'Update Task' button
    Then Click on user tab
    And Click sign out tab

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "adwait@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on campaign
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Select name
    And Select desc
    And Select due date
    And Select purpose radio button
    And Select time
    And Select 'website URL' suff info radio button
    And Select 'product' suff info' radio button
    And Select 'copy idea' suff info radio button
    And Select 'website suff' info radio button
    And Select 'design ad' suff info radio button
    And Select 'media plan' suff info radio button
    And Select 'content ad' suff info radio button
    Then Rate the input brief- campaign execution
    And Click 'accept' button- campaign execution
    Then Select assignee
    And Select start date
    Then Click assign button
    Then Click on user tab
    And Click sign out tab
#    Then Click 'Request Changes' button

   Scenario: Validate 'Add output'
#     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "archana@amuratech.com"
     Then Click on password "amura123"
     Then Click on sign in button
     Then Click on task sidebar
     And Click on campaign
     Then Click on assigned to me
     Then Select newest
     And Click on apply
     Then Click on Edit
     Then Click 'start working on this task'
     And Click 'Submit output' link
     And Enter 'Advertising automation dashboard URL' "https://www.google.co.in"
     Then Upload 'Ad screenshot' file'
     Then Click 'Submit' button
     Then Select the status 'Review'
     And Click 'Update Task' button- Output
     Then Click on admin user tab
     And Click admin sign out tab

   Scenario: Validate 'Review the Output'
     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "adwait@amuratech.com"
     Then Click on password "amura123"
     Then Click on sign in button
     Then Click on task sidebar
     And Click on campaign
     Then Click on assigned to me
     Then Select newest
     And Click on apply
     Then Click review link
     Then Click 'Advertising Automation Dashboard Url' suff info button
     And Click 'Reason For Not Using Advertising Automation' suff info button
     And Click 'Media Plan Publisher' suff info button
     And Click 'Ad Screenshots' suff info button
     And Rate the output- Campaign Execution
     Then Click 'Deliver' button- Campaign Execution




      







