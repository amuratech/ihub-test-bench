Feature: Content Social Post- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Social Post"
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
    Then Select Theme- Content Socialpost
    And Select Tonality
    And Upload social post image
    And Select Tags
    And Click 'Save' button- Content Social Post
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the input'
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "meenakshi@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      And Click content
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click review link
      Then Rate the input- content social post
      And Accept
      Then Select assignee
      And Select 'Start date'
      Then Click assign button
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Add output'
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "abhay@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      And Click content
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click on Edit
#      Then Click 'Update' link
#      And Click 'Start'
#      And Click 'Add your output' link
#      And Enter thought process "Testing"- content social post
#      And Upload content doc- content social post
#      Then Click 'Click to add' link
#      And Upload Design cue image
#      And Enter Description "Testing description"
#      Then Click save button- Content Social Post
#      Then Click 'Update' link
#      And Select 'Review'
#      And Click user name
#      And Click 'Sign out'

  Scenario: Validate 'Review the output' and deliver the task
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Has the brief been followed' "Yes"
    And Enter 'Are the design cues in line with the submitted output' "Yes"- Content Social Post
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    Then Rate the output- content ad
    And Click deliver button
#      And Click rework- content ad






