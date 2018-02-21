Feature: Content Print Media- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Print Media"
    And Select task type- Content Print Media
    And Select task sub type- Content Print Media Brochure
    And Enter Brief "Testing content print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

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
#    And  Click 'Add input brief' link
    Then Select Tonality- Content Print Media
    And Enter USPs
    And Click 'Save' button- Content Print Media Input
    Then Click 'Update' link
    And Select 'Publish'

  Scenario: Validate 'Review Input Brief'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input brief- Content Print Media
    Then Accept
    And Select assignee
    And Select 'Start date'
    Then Click assign button

  Scenario: Validate 'Add Output'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url ""
    Then Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Enter Title "Testing"- Content
    And Select Call to action
    And Enter Content "Testing"- Content
    And Enter Thought process "Testing"- Content
#    And Upload Design cue image
#    And Enter Description "Testing"
    And Click 'Save' button- Content Print Media Output
    Then Click 'Update' link
    And Select 'Review'

  Scenario: Validate 'Review Output'
#    Then Click user name
#    And Click 'Sign out'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Has the brief been followed' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    Then Rate the output- Content Print Media
    And Click 'Send for secondary review' button
#    And Click deliver button

  Scenario: Validate 'Secondary Output Review'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button


