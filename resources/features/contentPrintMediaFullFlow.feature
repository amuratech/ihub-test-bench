Feature: Content Print Media- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Print Media"
    And Select task type- Content Print Media
    And Select task sub type- Content Print Media Brochure
    And Enter Brief "Testing content print media brief"
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
#    And  Click 'Add input brief' link
    Then Select Tonality- Content Print Media
    And Enter USPs
    And Click 'Save' button- Content Print Media Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
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
    Then Rate the input brief- Content Print Media
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
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Title "Testing"- Content
    And Select Call to action
    And Enter Content "Testing"- Content
    And Enter Thought process "Testing"- Content
#    And Upload Design cue image
#    And Enter Description "Testing"
    And Click 'Save' button- Content Print Media Output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review Output'
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
    Then Enter 'Has the brief been followed' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Print Media
    Then Click 'Send for secondary review' button
#    And Click deliver button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Secondary Output Review'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    When Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button


