Feature: Social Post- Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- social
    And Click on create task
    Then Enter task name "Testing Social Post"
    And Enter task type- Social Media Post
    And Select task sub-type- Social Media Post Campaign Related
    And Enter Brief "Testing social post brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click on social
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    And Click input brief
#    Then Click objectives accordion
#    Then Select category- social
#    And Enter theme
#    And Enter hashtags
#    Then Click objectives accordion
#    Then Select category ii- social
#    And Enter theme ii- social
#    And Enter hashtags ii- social
#    Then Click objectives accordion
#    Then Select category iii- social
#    And Enter theme iii- social
#    And Enter hashtags iii- social
#    Then Click paid suggestions accordion
#    Then Enter idea
#    And Enter content idea brief
#    And Enter hashtags- paid suggestions
#    And Enter how will user participate
#    And Enter estimate total reach
#    And Enter suggested budget
#    And Enter estimated total user action
#    And Upload creative image
#    Then Enter current sentiment analysis
#    And Enter strategy to drive better sentiment
    Then Enter Reference URL "https://www.google.co.in"
    Then Click save button- social post
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "diya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#    Then Select name
#    And Select desc
#    And Select due date
#    And Select purpose radio button
#    And Select time
#    And Select objective i suff
#    And Select objecrive ii suff
#    And Select objective iii suff
#    And Select paid campaign suff
#    And Select ORM suff
    And Rate the input- social post
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "pranav@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
#    Then Select 'to be posted on' date
#    And Enter hashtags- social output
#    And Enter topic- social output
#    And Enter theme- social output
#    And Enter structure
#    And Enter tone
#    And Enter goal
    And Enter link "https://www.google.co.in"- social output
    And Click link accordion
  #    And Click 'Edit your output' link
#    And Upload reference image- social output
    Then Click save button- social output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
      Given Launch the url ""
      Then Click on username/email id "diya@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click on task sidebar
      And Click on social
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click review link
#      Then Select cms output I
#      And Select cms output II
#      Then Enter 'is this in line with client's business objective
#      And Enter does it cater to all kind of audiences/tg'
#      And Enter 'is there repitition from the earlier cms'
#      And Enter 'are the hashtags used in line with the suggestions'
#      And Enter 'are the hashtags used trending'
      Then Rate the output- social post
      And Click deliver button
#      And Click rework- social cms












