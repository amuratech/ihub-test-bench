Feature: Web Development- Mailer Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    When Click on create task
    Then Enter task name "Testing web dev mailer"
    And Select web task type- mailer
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    Then Enter destination URL "https://www.google.co.in"
    And Click accordion- URL
#    And Upload content doc
#    And Upload design doc
    And Select Emailer content task reference
    And Select Emailer design task reference
#    And Click save- web
    And Click save publish- web
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "pankit@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    Then Select radio URL
#    And Select radio content doc
#    And Select radio design doc
#    And Select radio image slices
#    And Select content emailer suff info
#    And Select design emailer suff info
    Then Rate the input brief- Web Mailer
    When Accept
    Then Select 'Due date'
    And Select assignee for Web Development
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

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
    When Click 'Update task status' button
    When Click 'Start'
    Then Click 'Add your output' link
    And Upload mailer file
    And Click submit- webmaileroutput
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
    And Rate the output- webmailer
    Then Click 'Send for secondary review' button
    
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
     







