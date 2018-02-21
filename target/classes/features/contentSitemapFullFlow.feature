Feature: Content Sitemap- Full Flow

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
    Then Enter task name "Testing Content Sitemap"
    And Select task type- Content Sitemap
    And Select task sub type- Content Sitemap Single Page
    And Enter Brief "Testing content sitemap brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

   Scenario: Validate 'Add Input Brief'
#     Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And  Click 'Add input brief' link
     Then Click 'Save' button- Content Sitemap Input
     And Click 'Update' link
     And Select 'Publish'
     Then Click user name
     And Click 'Sign out'

   Scenario: Validate 'Review Input Brief'
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
    And Rate the brief- Content Sitemap Input
     Then Accept
     And Select 'Due date'
     And Select assignee for Content
#     And Select 'Start date'
     Then Click assign button
     Then Click user name
     And Click 'Sign out'

  Scenario: Validate 'Add Output'
#    Given Launch the url ""
    Then Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter Thought process "Testing"
    And Upload detailed sitemap doc
    And Click 'Save' button- Content Sitemap Output
    Then Click 'Update' link
    And Select 'Review'
    And Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
#    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click review link
    Then Enter 'Does the content cater to given TG' "Yes"- Content Sitemap
    And Enter 'Has the brief been followed' "Yes"- Content Sitemap
    And Upload Reference document- Content Output  Review
    Then Rate the output- Content Sitemap
    And Click 'Send for secondary review' button

    When Click on user
    Then Click 'Sign out'

   Scenario: Validate 'SOR'
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

