Feature: Content Website- Full Flow
#  There is an error with the sub type, as they are getting changed once the
# 'save and add input brief' button is clicked
#  Task is not getting saved as Draft

  Scenario: Validate 'Add/Create a Task'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click 'Quick add' link
      And Select 'Task'
      Then Enter the client name ""
      And Select the department- content
      And Click on create task
      When Enter task name "Testing Content Website"
      And Select task type- Content Website
      And Select task sub type- Content Website Single Scroll
      And Enter Brief "Testing content website single web page brief"
      And Enter Due date
      And Select time slot
      Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#      Given Launch the url ""
#      Then Click on username/email id "shahbaz@amuratech.com"
#      Then Click on password "amura!@#"
#      Then Click on sign in button
#      And Click on task sidebar
#      And Click content
#      Then Click on assigned to me
#      And Select newest
#      And Click on apply
#      Then Click on Edit
#      And Click 'Add input brief' link
      When Select Tonality- Content Website
      And Select Tags- Content
      And Enter USPs- Content Website
      Then Click 'Save' button- Content Website
      When Click 'Update' link
      Then Select 'Publish'
      When Click user name
      Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
      Given Launch the url ""
      When Click on username/email id "meenakshi@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click content
      Then Click on assigned to me
      And Select newest
      And Click on apply
      And Click review link
      And Rate the input brief- Content Website
      When Accept
      Then Select 'Due date'
      And Select assignee for Content
#      And Select 'Start date'
      When Click assign button
      Then Click user name
      And Click 'Sign out'

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
     And Click on Edit
     When Click 'Update' link
     Then Click 'Start'
     When Click 'Add your output' link
     Then Enter Title "Testing title of the content website"- Content
     And Select Call to action
     And Upload Content website doc
     And Enter Thought process "Testing thought process"- Content
     And Click 'Save' button- Content Website Output
     When Click 'Update' link
     Then Select 'Review'
     When Click user name
     Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
     Given Launch the url ""
     When Click on username/email id "meenakshi@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When  Click review link
     Then Enter 'Has the brief been followed' "Testing"
     And Enter 'Does the content cater to given TG' "Testing"
     And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Testing"
     Then Upload Reference document- Content Output  Review
     When Rate the output- Content Website
     Then Click 'Send for secondary review' button

  Scenario: Validate 'SOR'
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
    And Click 'Approve or Reject the output'
    Then Enter Comments "Testing the secondary output review"
    And Click 'Accept and Mark Delivered' button

