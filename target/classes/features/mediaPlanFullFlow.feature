Feature: Media Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- media plan
    And Click on create task
    Then Enter task name "Testing Media Plan Campaign"
    And Enter task type- campaign
    And Enter Brief "Testing media plan campaign brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
    Then Upload Marketing brief reference doc
    And Click 'Save' button- Media Plan Campaign Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'
#    Then Enter objective- media plan
#    And Enter budget
#    And Select start date of campaign
#    And Select end date of campaign
#    And Select offers
#    And Click offers accordion
#    And Select communication guidelines
#    And Click guidelines accrdion
#    Then Select project- media plan
#    And Select project category
#    And Select segment- media plan
#    And Enter micromarket
#    And Enter number of units- media plan
#    And Enter min age- media plan
#    And Enter max age- media plan
#    And Select gender- media plan
#    And Select minimum household income
#    And Enter geos- media plan
#    And Enter micro geos- media plan
#    And Enter trying to reach- media plan
#    And Select tg- media plan
#    And Click submit button- media plan
#    Then Select status to publish the task
#    And Click update the task button
#    Then Click on user tab
#    And Click sign out tab

  Scenario: Validate 'Review the input brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "saad@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on media plan
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input brief- media input
    And Accept
    Then Select assignee
#    And Select 'Start date'
#    Then Click assign button
#    Then Click user name
#    And Click 'Sign out'

  Scenario: Validate 'Add output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "apurv@amuratech.com"
      Then Click on password "amura!@#"
      Then Click on sign in button
      Then Click on task sidebar
      And Click on media plan
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click on Edit
      And Click 'Update' link
      And Click 'Start'
      And Click 'Add your output' link
      Then Enter Objective "Testing campaign output objective"
      And Enter Total budget "10000"
      And Select start date of campaign
      And Select end date of campaign
#      Then Enter name of publisher
#      And Enter budget- media plan
#      And Enter clicks
#      And Enter visits
#      And Enter inquiries
      Then Click submit button- media plan output
      Then Click 'Update' link
      And Select 'Review'

     Scenario: Validate 'Review the output'
       Given Launch the url ""
       Then Click on username/email id "saad@amuratech.com"
       Then Click on password "amura!@#"
       Then Click on sign in button
       Then Click on task sidebar
       And Click on media plan
       And Click on assigned to me
       Then Select newest
       And Click on apply
       Then Click review link
       And Rate the output- media plan
       Then Click deliver button









