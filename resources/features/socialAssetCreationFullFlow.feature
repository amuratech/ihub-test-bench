Feature: Social- Asset Creation Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- social
    And Click on create task
    Then Enter task name "Testing Social Asset Creation"
    And Enter task type- Asset Creation
    And Enter Brief "Testing social asset creation brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Add input brief' link
    Then Select 'platforms to be created'
    And Enter contact name "Testing"
    And Enter email "shahbaz@amuratech.com"
    And Enter contact email "shahbaz@amuratech.com"
    And Enter phone number "1234567890"
    Then Click save button- social asset creation input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "diya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input- social asset creation
#    And Click request changes- social asset creation
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "pranav@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter Link to facebook "www.google.com"
    And Click 'Save' button- Social Asset
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    Then Click on username/email id "diya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'How good is the content published on every platform' "Testing"
    And Enter 'Have they published any initial seed content on the asset' "Yes"
    And Enter 'Does the creative used follow brand guidelines' "Yes"
    And Enter 'Have they correctly tagged the industry and other categorization for the created assets' "Yes"
    And Rate the output- Social Asset Creation
    Then Click deliver button









