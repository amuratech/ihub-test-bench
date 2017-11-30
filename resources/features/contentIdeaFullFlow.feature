Feature: Content Idea- Full Flow

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
    Then Enter task name "Testing Content Idea"
    And Enter task type- Content Idea
    And Enter Brief "Testing content idea brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click content
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click 'Add input brief' link
    And Enter campaign objective "Testing campaign objective"
    And Enter required minimum concepts
    And Enter reason of interests
    And Click save- content idea
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the brief- content idea
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "abhay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    And Enter understanding from the campaign brief "Testing understanding"
    And Enter social engagement suggestions "Testing social"
    And Enter blog topic suggestions
    And Upload a detailed doc
    Then Click save button- content idea
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'
#    Then Click add output
#    And Click add concepts
#    Then Enter key concepts
#    And Enter how does it map
#    And Enter concept details
#    And Enter how does it appeal
#    Then Click save- content idea add concepts
#    Then Click add output
#    Then Click view concepts
#    And Select view details
#    Then Click moodboards
#    And Upload file
#    Then Click back to task
#    Then Change the status

  Scenario: Validate 'Review the output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the concept resonate well with all TGs mentioned in the brief' "Testing"
    And Enter 'Are the design cues in line with the submitted output' "Yes"
    And Rate the output- content idea
    Then Click deliver button
#    Then Click rework- content idea












