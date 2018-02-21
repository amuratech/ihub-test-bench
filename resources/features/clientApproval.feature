Feature: Client Approval
  Client approval is based on the requirement, it is not mandatory for all the tasks
  For client approval, there must be a reviewer selected for that client (Authorized used can add the reviewer)
  Once approver is added, then user can select the 'client approval required' checkbox which is department and task type specific


  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "gautham@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    When Enter task name "Testing SOR and Client Approval"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing secondary output review and client approval functionality"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
    And Upload 'Client Content' reference task
    When Click 'Save and publish'
    And Click 'Update' link
    Then Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add SOR and order'
#    Given Launch the url ""
    When Click on username/email id "ketan@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar- Superadmin
    And Click content
    Then Click 'All' pagination
    And Select newest
    And Click on apply
    When Click on Edit
    And Click 'Click to add' link
    Then Select the user to add as SOR
    And Select the order to be assigned
#    Then Select the user to add as SOR
#    And Select the order to be assigned
    When Click 'Save and add input brief' button
    Then SOR and the order should be assigned
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
  #    Given Launch the url ""
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- Design Infographics
    And Accept
    Then Select assignee
#    And Select 'Start date'
    Then Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
#    Given Launch the url ""
    Then Click on username/email id "varsha.j@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
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
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    Then Rate the output- Design Infographics
    And Click 'Send for secondary review' button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Secondary Output Review'
#    Given Launch the url ""
    Then Click on username/email id "gautham@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task sending to 2nd reviewer"
    Then Click 'Send for client approval'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate '2nd Secondary Output Review'
    Given Launch the url ""
    Then Click on username/email id "akshay.p@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing task is sending for client review"
    Then Click 'Send for client approval'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Client approval'
#    Given Launch the url ""
    Then Click on username/email id "sayali010101@gmail.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar- Client
    And Click on design- Client
    When Click on All
    Then Select newest
    And Click on apply
    When Click on Details
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button
