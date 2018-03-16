Feature: Content Review Forum Participation- Full Flow
  
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
    When Enter task name "Testing Content Wikipedia Page"
    And Select task type- Content Wikipedia Page
    And Enter Brief "Testing content wikipedia page brief"
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
    When Enter Website link "www.google.com"
    And Enter Reference links- Content Wikipedia Page
    Then Click 'Save' button- Content Wikipedia Page
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the input brief'
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
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    And Click 'Add your output' link
    When Enter Title "Testing title"- Content
    And Enter Thought process "Testing thought process"
    And Upload the content document
    Then Click 'Save' button- Content Wikipedia Output
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
    When Click review link
    Then Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copywriter researched well' "Yes"- Content Wikipedia
    And Enter 'Has the copywriter included enough references and citations' "Testing"
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Wikipedia Page
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
      And Click on Edit
      When Click 'Approve or Reject the output'
      Then Enter Comments "Testing the SOR comments"
      And Click 'Accept and Mark Delivered' button


