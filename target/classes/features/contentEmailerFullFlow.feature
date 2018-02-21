Feature: Content Emailer- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Emailer"
    And Select task type- Content Emailer   
    And Select task sub-type- Content Emailer Sales
    And Enter Brief "Testing content emailer brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
    And Click 'Add input brief' link
    And Select Tonality- Content Emailer
#    And Click 'Edit input brief' link
    Then Click 'Save' button- Content Emailer
    And Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
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
    And Rate the brief- Content Emailer
    And Accept
    Then Select assignee for Content
#    And Select 'Start date'
    And Select 'Due date'
    Then Click assign button

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "abhay@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter Content "Testing"
    And Enter Thought process "Testing"
    And Enter Call to action "Testing"
    And Enter Subject line "Testing"
    And Click 'Save' button- Content Emailer Output
    Then Click 'Update' link
    And Select 'Review'

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
#    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Has the brief been followed' "Testing"- Content Emailer
    And Enter 'Are the design cues, if submitted, in line with the submitted output' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"- Content Emailer
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"- Content Emailer
    And Upload Reference document- Content Output  Review
    And Rate the output- Content Emailer
    Then Click 'Send for secondary review' button

    When Click on user
    Then Click 'Sign out'

  Scenario: Validate 'SOR'
#      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      Then Click on password "amura!@#"
      Then Click on sign in button
      Then Click on task sidebar
      And Click content
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the task with the SOR"
      And Click 'Accept and Mark Delivered' button
