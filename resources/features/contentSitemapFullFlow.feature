Feature: Content Sitemap- Full Flow

  @smoke
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
    When Enter task name "Testing Content Sitemap"
    And Select task type- Content Sitemap
    And Select task sub type- Content Sitemap Single Page
    And Enter Brief "Testing content sitemap brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

   Scenario: Validate 'Add Input Brief'
     When Click 'Save' button- Content Sitemap Input
     Then Click 'Update' link
     And Select 'Publish'
     When Click user name
     Then Click 'Sign out'

   Scenario: Validate 'Review Input Brief'
     Given Launch the url ""
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    When Click on assigned to me
    And Select newest
    Then Click on apply
    When Click review link
    Then Rate the brief- Content Sitemap Input
     When Accept
#     And Select 'Due date'
     Then Select assignee for Content
#     And Select 'Start date'
     And Click assign button
     When Click user name
     Then Click 'Sign out'

  Scenario: Validate 'Add Output'
#    Given Launch the url ""
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
    Then Enter Thought process "Testing"
    And Upload detailed sitemap doc
    And Click 'Save' button- Content Sitemap Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Does the content cater to given TG' "Yes"- Content Sitemap
    And Enter 'Has the brief been followed' "Yes"- Content Sitemap
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Sitemap
    Then Click 'Send for secondary review' button

    When Click on user
    Then Click 'Sign out'

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
    And Enter Comments "Testing the task delivered"
     Then Click 'Accept and Mark Delivered' button

