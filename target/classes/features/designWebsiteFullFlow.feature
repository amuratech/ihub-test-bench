Feature: Design Website- Full Flow

  Scenario: Validate 'Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Website"
    And Select task type- Website
    And Select task sub-type- Single Web Page
    And Enter Brief "Testing design brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Then Put client name
#    Then Select task sub type
    Then Enter usp "Testing"
    And Click plus sign
#    Then Upload sitemap
    And Upload functional requirements
    Then Select design guidelines
    And Enter reference link "https://www.google.co.in/"
    Then Click plus
    And Select CTA
#    And Put trying to reach "Testing"
#    And Select tg to do
    And Upload content website ref doc
    And Upload content sitemap ref doc
    Then Click save and publish later button
#    And Select status publish
#    And Click update task
#    Then Click Publish this task link
    Then Click 'Update' link
    And Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
#    Given Launch the url ""
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click review link
    Then Rate
    When Accept
    Then Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    And Click assign button

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "varsha.j@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
#    Then Click 'Edit your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    Then Upload designs
    Then Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    Then Click 'Update' link
    And Select 'Review'

    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
#    Given Launch the url ""
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate the 'SOR'
     Then Click on username/email id "shahbaz@amuratech.com"
     Then Click on password "amura!@#"
     Then Click on sign in button
     Then Click on task sidebar
     And Click on design
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When Click on Edit
     And Click 'Approve or Reject the output'
     Then Enter Comments "Testing the task with the SOR"
     And Click 'Accept and Mark Delivered' button

