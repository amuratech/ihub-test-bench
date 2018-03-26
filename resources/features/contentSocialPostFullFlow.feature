Feature: Content Social Post- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    And Click on create task
    When Enter task name "Testing Content Social Post"
    And Select task type- Content Social Post
    And Select task sub-type- Content Social Post JPEG Post
    And Enter Brief "Testing content social post brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click 'Add input brief' link
    When Select Theme- Content Socialpost
    And Select Tonality
    And Upload social post image
    And Select Tags
    And Click 'Save' button- Content Social Post
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the input'
      Given Launch the url "http://localhost:3000/"
      When Click on username/email id "meenakshi@amuratech.com"
      And Click on password "amura123"
      Then Click on sign in button
      When Click on task sidebar
      And Click content
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click review link
      Then Rate the input- content social post
      When Accept
      Then Select assignee
#      And Select 'Start date'
      And Click assign button
      When Click user name
      Then Click 'Sign out'

  Scenario: Validate 'Add output'
      Given Launch the url "http://localhost:3000/"
      When Click on username/email id "abhay@amuratech.com"
      And Click on password "amura123"
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
      Then Enter thought process "Testing"- content social post
      And Upload content doc- content social post
      When Click 'Click to add' link
      Then Upload Design cue image
      And Enter Description "Testing description"
      And Click save button- Content Social Post
      When Click 'Update' link
      Then Select 'Review'
      When Click user name
      Then Click 'Sign out'

  Scenario: Validate 'Review the output' and deliver the task
    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Has the brief been followed' "Yes"
    And Enter 'Are the design cues in line with the submitted output' "Yes"- Content Social Post
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    When Rate the output- content ad
    Then Click 'Send for secondary review' button
#      And Click rework- content ad

  Scenario: Validate 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button






