Feature: Change Request once input brief is reviewed
  User/Input Reviewer can reject the input brief and send the task for
  'Changes Request' to make necessary changes in the brief
  For making the button to be enabled, all the sufficient info should be selected and the rating should
  be more than 3 stars


  Scenario: Validate the change request feature when there is insufficient info marked
  for any of the fields

    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Print Media"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing design print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

    Then Upload 'Client Content' reference task
    Then Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    When Selecting insufficient info for Brief
    And Enter the reason "Testing change request"
    And Rate the input brief- Design Infographics
    Then Request change button should be disabled

  Scenario: Validate the feature when rating is less than 4 stars

    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Print Media"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing design print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

    Then Upload 'Client Content' reference task
    Then Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Request change button should be disabled

   @change
  Scenario: Validate the feature when the button is enabled

    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing Design Print Media"
    And Select task type- Design Infographics
    And Select task sub-type- Website
    And Enter Brief "Testing design print media brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button
#    Then Close the browser
#    When Click user name
#    Then Click 'Sign out'
    Then Upload 'Client Content' reference task
    Then Click 'Save and publish'
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    When Selecting insufficient info for Brief
    And Enter the reason "Testing change request button is disabled"
    Then Request change button should be enabled

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Select 'Publish'
