Feature: Content Hoarding- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Hoarding"
    And Select task type- Content Hoarding
    And Select task sub-type- Content Hoarding- Hoarding
    And Enter Brief "Testing content hoarding brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
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
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the brief- Content Hoarding
    When Accept
    Then Select 'Due date'
    And Select assignee for Content
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "abhay@amuratech.com"
    Then Click on password "amura!@#"
    And Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    When Click 'Add your output' link
    Then Enter Title "Testing"- Content Hoarding
    And Select Call to action
    And Enter Content "Testing"- Content
    And Enter Thought process "Testing"- Content
#    When Click 'Click to add' link
#    Then Upload Design cue image
#    And Enter Description "Testing"
    When Click 'Save' button- Content Hoarding Output
    Then Click 'Update' link
    And Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Does the content ensure it fits for the given type of hoarding & the mentioned dimensions' "Testing"
    And Enter 'Has the brief been followed' "Yes"- Content Hoarding
    And Enter 'Does the content cater to given TG' "Yes"- Content Hoading
    And Enter 'Has the copywriter followed the necessary 'tone of voice'' "Yes"- Content Hoarding
    And Upload Reference document- Content Output  Review
    And Rate the output- Content Hoarding
    And Click 'Send for secondary review' button
#    Then Click rework- content idea

Scenario: Validate 'SOR'
  Given Launch the url ""
  Then Click on username/email id "shahbaz@amuratech.com"
  And Click on password "amura!@#"
  Then Click on sign in button
  When Click on task sidebar
  And Click content
  Then Click on assigned to me
  And Select newest
  And Click on apply
  When Click on Edit
  Then Click 'Approve or Reject the output'
  When Enter Comments "Testing"
  Then Click 'Accept and Mark Delivered' button
  
  









