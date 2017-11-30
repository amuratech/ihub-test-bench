Feature: Content Hoarding- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Hoarding"
    And Select task type- Content Hoarding
    Then Select task sub-type- Content Hoarding- Hoarding
    And Enter Brief "Testing content hoarding brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click 'Add input brief' link
    Then Enter height "2"
    And Enter width "16"
    And Select Tonality- Content Hoarding
    And Select Tags- Content Hoarding
    And Click 'Save' button- Content Hoarding
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the brief- content idea
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "abhay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Enter Title "Testing"- Content Hoarding
    And Select Call to action
    And Enter Content "Testing"- Content
    And Enter Thought process "Testing"- Content
    Then Click 'Click to add' link
    And Upload Design cue image
    And Enter Description "Testing"
    Then Click 'Save' button- Content Hoarding Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Does the content ensure it fits for the given type of hoarding & the mentioned dimensions' "Testing"
    And Enter 'Has the brief been followed' "Yes"- Content Hoarding
    And Enter 'Does the content cater to given TG' "Yes"- Content Hoading
    And Enter 'Has the copywriter followed the necessary 'tone of voice'' "Yes"- Content Hoarding
    And Upload Reference document- Content Output  Review
    And Rate the output- Content Hoarding
    Then Click deliver button
#    Then Click rework- content idea











