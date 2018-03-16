Feature: Design Ad- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- Design
    And Click on create task
    When Enter task name "Testing design ad"
    And Enter task type- design ad
    And Enter Brief "Testing design emailer brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url ""
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on design
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click 'Add input brief' link
    When Select Ad communication content task reference
    And Enter ad format
#    And Upload ad copy doc
    Then Click 'Save' button- Design Ad Input
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Give rating
    When Accept
    Then Select 'Due date'
    And Select assignee for Design
#    And Select 'Start date'
    And Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "varsha.j@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    And Enter thought process "Testing"- Design
    Then Click 'Save' button
    And Upload designs
    When Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    Then Click 'Update' link
    And Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    When Rate the output- Design Ad
    Then Click 'Send for secondary review' button

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      Then Click on design
      When Click on assigned to me
      And Select newest
      And Click on apply
      Then Click on Edit
      When Click 'Approve or Reject the output'
      Then Enter Comments "Testing the SOR comments"
      And Click 'Accept and Mark Delivered' button

