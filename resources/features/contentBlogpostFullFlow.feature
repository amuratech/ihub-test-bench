Feature: Content- Blog Flow

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
    Then Enter task name "Testing Content Blogpost"
    And Select task type- Content Blogpost
    And Select task sub-type- Content Blogpost Article
    And Enter Brief "Testing content blogpost brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
    And Click 'Add input brief' link
    And Enter topic "Testing"
    And Enter Tonality
    And Enter unique selling point
    And Enter Keywords to focus on
    Then Click save- contentblogpost input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the brief- contentblogpost
    And Accept
    When Select 'Due date'
    Then Select assignee for Content
#    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
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
    And Click 'Add your output' link
    Then Enter title- contentblogpost "Testing title"
    And Select CTA- contentblogpost
    And Enter content- contentblogpost "Testing"
    And Enter thought process- contentblogpost "Testing"
    Then Click 'Click to add' link
    And Enter Description "Testing"
    And Upload Design cue image
    Then Click 'Save' button- Content Blogpost
    And Click 'Update' link
    And Select 'Review'
    Then Click 'Update task status'
    And Click 'Sign out'

  Scenario: Validate 'Review the Output'
    Given Launch the url ""
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Has the brief been followed' "Yes"
    And Enter 'Does the content cater to given TG' "Yes"
    And Enter 'Has the copywriter followed the necessary 'tone of voice'' "Yes"
    And Upload Reference document- Content Output  Review
    Then Rate the output- contentblogpost
    And Click 'Send for secondary review' button
    
   Scenario: Validate 'SOR'
     Given Launch the url ""
     Then Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     Then Click on assigned to me
     When Select newest
     And Click on apply
     Then Click on Edit
     When Click 'Approve or Reject the output'
     And Enter Comments "Testing"
     Then Click 'Accept and Mark Delivered' button



