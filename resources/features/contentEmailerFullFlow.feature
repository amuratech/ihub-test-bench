Feature: Content Emailer- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "/"
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Emailer"
    And Select task type- Content Emailer   
    And Select task sub-type- Content Emailer Sales
    And Enter Brief "Testing content emailer brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

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
#    And Click 'Add input brief' link
    Then Select Tonality- Content Emailer
#    And Click 'Edit input brief' link
    And Click 'Save' button- Content Emailer
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

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
    When Accept
    Then Select 'Due date'
    And Select assignee for Content
#    And Select 'Start date'
    And Click assign button

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Update' link
    When Click 'Start'
    Then Click 'Add your output' link
    And Enter Content "Testing"
    And Enter Thought process "Testing"
    And Select Call to action- Content Emailer
    And Enter Subject line "Testing"
    And Click 'Save' button- Content Emailer Output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    When Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
    And Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Has the brief been followed' "Testing"- Content Emailer
    And Enter 'Are the design cues, if submitted, in line with the submitted output' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"- Content Emailer
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"- Content Emailer
    And Upload Reference document- Content Output  Review
    And Rate the output- Content Emailer
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      Then Click on password "amura!@#"
      And Click on sign in button
      When Click on task sidebar
      And Click content
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the task with the SOR"
      And Click 'Accept and Mark Delivered' button
