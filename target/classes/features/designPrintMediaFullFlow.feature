Feature: Design Print Media Flow

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
    When Enter task name "Testing Design Print Media"
    And Select task type- Design Print Media
    And Select task sub-type- Brochure
    And Enter Brief "Testing design print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on design
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Enter product name
#    And Select sub type
#    And Enter content
    When Enter Width "227"
    And Enter Height "229"
    And Enter Budget "10000"
    And Enter Paper Type "Testing"
#    And Upload 'Content Print Media' reference doc
    And Select Print media content task reference
    Then Click 'Save and publish'
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
    Then Rate the input brief
    When Accept
    Then Select assignee
    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

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
    And Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    When Upload designs
    Then Click 'Edit your output' link
#    Then Click upload
#    Then Click 'More'
#    And Select 'Edit task'
    When Click 'Update' link
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
#    Then Select thought process suff info
#    And Select design suff info
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    When Rate the output- Desing Print Media
    Then Click 'Send for secondary review' button

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      And Click on task sidebar
      When Click on design
      And Click on assigned to me
      Then Select newest
      And Click on apply
      When Click on Edit
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the task with the SOR"
      And Click 'Accept and Mark Delivered' button


