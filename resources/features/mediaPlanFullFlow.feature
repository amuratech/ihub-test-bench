Feature: Media Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
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
#    Then Upload Marketing brief reference doc
    Then Select Marketing brief task ref
    And Click 'Save' button- Media Plan Campaign Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

    
  Scenario: Validate 'Review the input brief'
#    Given Launch the url "http://localhost:3000/"
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
    And Select 'Due date'
    Then Select assignee for Media Planning
#    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add output'
      Given Launch the url ""
      Then Click on username/email id "pranav@amuratech.com"
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
#      Then Enter Objective "Testing campaign output objective"
#      And Enter Total budget "10000"
#      And Select start date of campaign
#      And Select end date of campaign
      Then Enter name of publisher
      And Enter budget- media plan
      And Enter clicks
      And Enter visits
      And Enter inquiries
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
       Then Click 'Send for secondary review' button

       When Click on user
       Then Click 'Sign out'

  Scenario: Validate 'SOR'
#    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button








