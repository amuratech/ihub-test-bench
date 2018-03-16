Feature: SEO Submission- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- seo
    When Click on create task
    Then Enter task name "Testing SEO Submission Listing"
    And Enter task type- submission
    And Select task sub-type- SEO Submission Listing
    And Enter Brief "Testing SEO submission listing brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click SEO
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add input brief' link
#    Then Upload Content reference doc
    Then Click Save- seosubmission
#    And Click 'Edit input brief' link
    And Upload Reference doc
    When Click 'Edit input brief' link
    Then Click 'Update' link
    And Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
    Given Launch the url ""
    When Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input- SEO Submission Input
    When Accept
    Then Select 'Due date'
    And Select assignee for seo
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'
#
  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "minal@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Submission URL "www.google.com"
    And Enter Keywords of focus
    And Click 'Save' button- SEO Submission Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
     Given Launch the url ""
     When Click on username/email id "gaurav.m@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click SEO
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When Click review link
     Then Enter 'Have the correct keywords and tags posted along with the main submission' "Testing"
     When Rate the output- SEO Submission
     Then Click 'Deliver' button






