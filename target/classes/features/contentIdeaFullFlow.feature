Feature: Content Idea- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    And Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content Idea"
    And Enter task type- Content Idea
    And Enter Brief "Testing content idea brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click 'Add input brief' link
    Then Enter campaign objective "Testing campaign objective"
    And Enter required minimum concepts
    And Enter reason of interests
    And Click save- content idea
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the brief- content idea
    And Accept
    When Select 'Due date'
    And Select assignee for Content
#    And Select 'Start date'
    Then Click assign button
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter understanding from the campaign brief "Testing understanding"
    And Enter social engagement suggestions "Testing social"
    And Enter blog topic suggestions
    And Upload a detailed doc
    And Click save button- content idea
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the concept resonate well with all TGs mentioned in the brief' "Testing"
    And Enter 'Are the design cues in line with the submitted output' "Yes"
    And Rate the output- content idea
    And Click 'Send for secondary review' button
#    Then Click rework- content idea

  Scenario: Validate 'SOR'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    When Enter Comments "Testing"
    Then Click 'Accept and Mark Delivered' button













