Feature: SEO Submission- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- seo
    And Click on create task
    Then Enter task name "Testing SEO Submission Listing"
    And Enter task type- submission
    And Select task sub-type- SEO Submission Listing
    And Enter Brief "Testing SEO submission listing brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click SEO
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add input brief' link
    Then Upload Content reference doc
    And Click Save- seosubmission
#    And Click 'Edit input brief' link
    Then Upload Reference doc
    And Click 'Edit input brief' link
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url ""
    Then Click on username/email id "gaurav.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input- SEO Submission Input
    And Accept
    And Select 'Due date'
    Then Select assignee for seo
#    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'
#
  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "minal@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter Submission URL "www.google.com"
    And Enter Keywords of focus
    Then Click 'Save' button- SEO Submission Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
     Given Launch the url ""
     Then Click on username/email id "gaurav.m@amuratech.com"
     Then Click on password "amura!@#"
     Then Click on sign in button
     Then Click on task sidebar
     And Click SEO
     And Click on assigned to me
     Then Select newest
     And Click on apply
     Then Click review link
     Then Enter 'Have the correct keywords and tags posted along with the main submission' "Testing"
     And Rate the output- SEO Submission
     Then Click deliver button


