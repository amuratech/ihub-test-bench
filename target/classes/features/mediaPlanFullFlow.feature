Feature: Media Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- media plan
    And Click on create task
    When Enter task name "Testing Media Plan Campaign"
    And Enter task type- campaign
    And Enter Brief "Testing media plan campaign brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


  Scenario: Validate 'Add Input Brief'
#    Then Upload Marketing brief reference doc
    When Select Marketing brief task ref
    Then Click 'Save' button- Media Plan Campaign Input
    When Click 'Update' link
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

    
  Scenario: Validate 'Review the input brief'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "saad@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- media input
    When Accept
#    And Select 'Due date'
    Then Select assignee for Media Planning
#    And Select 'Start date'
    When Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add output'
      Given Launch the url ""
      When Click on username/email id "pranav@amuratech.com"
      Then Click on password "amura!@#"
      Then Click on sign in button
      Then Click on task sidebar
      And Click on media plan
      And Click on assigned to me
      Then Select newest
      And Click on apply
      Then Click on Edit
#      And Click 'Update' link
#      And Click 'Start'
      And Click 'Add your output' link
#      Then Enter Objective "Testing campaign output objective"
#      And Enter Total budget "10000"
#      And Select start date of campaign
#      And Select end date of campaign
      Then Enter name of publisher
      And Enter budget "10000"
      And Enter clicks "2"
      And Enter visits "2"
      And Enter inquiries "2"
      Then Click submit button- media plan output
      Then Click 'Update' link
      And Select 'Review'

      When Click user name
      Then Click 'Sign out'

     Scenario: Validate 'Review the output'
       Given Launch the url ""
       When Click on username/email id "saad@amuratech.com"
       And Click on password "amura!@#"
       Then Click on sign in button
       When Click on task sidebar
       And Click on media plan
       Then Click on assigned to me
       And Select newest
       And Click on apply
       When Click review link
       Then Rate the output- media plan
       And Click 'Send for secondary review' button

       When Click on user
       Then Click 'Sign out'

  Scenario: Validate 'SOR'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the task delivered"
    Then Click 'Accept and Mark Delivered' button








