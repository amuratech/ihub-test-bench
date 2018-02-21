Feature: Secondary Output Review
  Secondary Output Review is used when it is required to get the task reviewed from any user/member
  other than the Lead/Manager
  There can be any number of SOR's
  Default SOR is the creator of the task which can also be deleted, if required
  Other SOR's can be added by superadmin

#     ----------Add/Create a task--------------
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing the SOR feature"
    And Select task type- Content Print Media
    And Select task sub type- Content Print Media Brochure
    And Enter Brief "Testing SOR for content print media"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

#     -----------Add input brief---------
  Scenario: Validate 'Add Input Brief'
    Then Select Tonality- Content Print Media
    And Enter USPs
    And Click 'Save' button- Content Print Media Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

#    ------Adding SOR and order---------------
  Scenario: Validate 'Add SOR and order'
    Given Launch the url ""  
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
    When Click 'Save and add input brief' button
    Then SOR and the order should be assigned
    When Click user name
    Then Click 'Sign out'

#    ------Review input brief---------
  Scenario: Validate 'Review Input Brief'
#    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input brief- Content Print Media
    Then Accept
    And Select assignee
#    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

#    -------Add output------------
  Scenario: Validate 'Add Output'
#    Given Launch the url ""
    Then Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Enter Title "Testing"- Content
    And Select Call to action
    And Enter Content "Testing"- Content
    And Enter Thought process "Testing"- Content
#    And Upload Design cue image
#    And Enter Description "Testing"
    And Click 'Save' button- Content Print Media Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

#    -------Review the output----
  Scenario: Validate 'Review Output'
#    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Has the brief been followed' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    Then Rate the output- Content Print Media
    And Click 'Send for secondary review' button
#    And Click deliver button
    Then Click user name
    And Click 'Sign out'

#     ---------Secondary output review--------
  Scenario: Validate 'Secondary Output Review'
#    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing task sending for the 2nd SOR"
    Then Click 'Send to 2nd secondary reviewer'
    When Click user name
    Then Click 'Sign out'

#    --------2nd secondary output reviewer------------
  Scenario: Validate '2nd Secondary Output Review'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button

