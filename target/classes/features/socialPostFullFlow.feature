Feature: Social Post- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- social
    When Click on create task
    Then Enter task name "Testing Social Post"
    And Enter task type- Social Media Post
    And Select task sub-type- Social Media Post Campaign Related
    And Enter Brief "Testing social post brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
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
    And Click save button- social post
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    When Click on username/email id "rushikesh@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
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
    Then Rate the input- social post
    When Accept
    Then Select 'Due date'
    And Select assignee for Social
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "pranoti@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on social
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
#    Then Select 'to be posted on' date
#    And Enter hashtags- social output
#    And Enter topic- social output
#    And Enter theme- social output
#    And Enter structure
#    And Enter tone
#    And Enter goal
    Then Enter link "https://www.google.co.in"- social output
    And Click link accordion
#    And Upload reference image- social output
    And Click save button- social output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
      Given Launch the url ""
      When Click on username/email id "tabassum@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click on social
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click review link
      Then Rate the output- social post
      And Click 'Send for secondary review' button
#      And Click rework- social cms

    Scenario: Validate 'SOR'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click on social
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Approve or Reject the output'
      When Enter Comments "Testing the task delivered"
      Then Click 'Accept and Mark Delivered' button







