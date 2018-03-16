Feature: Web Development- Blog Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- web development
    And Click on create task
    When Enter task name "Testing web dev blog"
    And Select web task type- Blog
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    Then Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
#    When Upload content blogpost reference doc
    And Click 'Add input brief' link
    When Select Content blogpost task reference
    And Enter meta keywords "Testing meta keywords"- Web Blog
    And Click 'accordion' to add keywords
    And Enter meta desc "Testing meta description"
    Then Click 'Save' button- Web Blog Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review Input Brief'
      Given Launch the url ""
      When Click on username/email id "pankit@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      Then Click on web development
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click review link
      Then Rate the input brief- Web Blog
      When Accept
      Then Select assignee for Web Development
#      And Select 'Due date'
#      And Select 'Start date'
      When Click assign button
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "ashwin@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Final URL "https://www.google.co.in/"
    And Click 'Save' button- Web Blog Output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'


   Scenario: Validate 'Review the Output'
     Given Launch the url ""
     When Click on username/email id "atul.saini@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click on web development
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When Click review link
     Then Rate the output- Web Blog
     And Click 'Send for secondary review' button
     
     Scenario: Validate 'SOR'
       Given Launch the url ""
       When Click on username/email id "shahbaz@amuratech.com"
       And Click on password "amura!@#"
       Then Click on sign in button
       When Click on task sidebar
       And Click on web development
       Then Click on assigned to me
       And Select newest
       And Click on apply
       When Click on Edit
       Then Click 'Approve or Reject the output'
       When Enter Comments "Testing the task delivered"
       Then Click 'Accept and Mark Delivered' button
