Feature: Web Development- Maintenance Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    And Click on create task
    Then Enter task name "Testing web maintenance work"
    And Enter web task type- Maintenance Work
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    And Enter name "Testing"- webmaintenance
#    And Enter brief "Testing brief"- webmaintenance
    And Enter URL "https://www.google.co.in/"- webmaintenance
    And Select hosting- webmaintenance
#    And Click save- webmaintenance
    And Click save and publish- webmaintenance
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select time
#    And Select task type suff info
#    And Select task sub-type suff info
#    And Select name- webmanitenance
#    And Select brief- webmaintenance
#    And Select URL- webmaintenance
#    And Select hosting type- webmaintenance
#    And Select content ref doc
#    And Select ftp detail
#    And Select server detail
#    And Select images
#    And Select content task suff info
    And Rate brief- webmaintenance
    And Accept
    When Select 'Due date'
    Then Select assignee for Web Development
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add output'
#    Given Launch the url ""
    Then Click on username/email id "ashwin@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
#    Then Enter thought process "Testing output"- webmaintenance
    And Enter URL output "https://www.google.co.in/"- webmaintenance
    Then Click submit- webmaintenance
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select webdev thought process
#    And Select radio URL- webmaintenance
    Then Rate the output- webmaintenance
    And Click 'Send for secondary review' button
    When Click user name
    Then Click 'Sign out'

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      Then Click on web development
      And Click on assigned to me
      And Select newest
      When Click on apply
      Then Click on Edit
      When Click 'Approve or Reject the output'
      Then Enter Comments "Testing"
      And Click 'Accept and Mark Delivered' button







