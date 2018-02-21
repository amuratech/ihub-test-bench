Feature: Web Development HTML Five task full flow
  This feature shows the full flow of the Web Development HTML Five Ad task

  Scenario: Validate 'Add a task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click 'Quick add' link
    When Select 'Task'
    Then Enter the client name ""
    And Select the department- web development
    And Click on create task
    When Enter task name "Testing Web Development HTML Five"
    And Select task type- Web Development HTML Five
    And Enter Brief "Testing web development html five brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add input brief'
    When Click 'Add input brief' link
    Then Enter Specification animation requirements "Testing the animation requirements"
    And Upload Design ad reference doc
    And Click 'Save' button- Web HTML Five Ad Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the input brief'
    When Click on username/email id "pankit@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    When Click review link
    And Rate the input brief- Web HTML Five Ad
    Then Accept
    And Select 'Due date'
    And Select assignee for Web Development
    And Click assign button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add output'
    Given Launch the url ""
    When Click on username/email id "ashwin@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click on task sidebar
    When Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    And Click 'Update task status' button
    Then Click 'Start'
    When Click 'Add your output' link
    Then Select Tool used
    And Click 'Save' button- Web HTML Five Ad output
    When Upload Files
    And Click 'Edit your output' link
    Then Click 'Update' link
    And Click 'Review'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
      Given Launch the url ""
      When Click on username/email id "atul.saini@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     And Click on task sidebar
     When Click on web development
     And Click on assigned to me
     Then Select newest
     And Click on apply
     When Click review link
     Then Rate the output- Web HTML Five Ad output
     And Click 'Send for secondary review' button

     When Click user name
     Then Click 'Sign out'

  Scenario: Validate the 'SOR'
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click on task sidebar
    When Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    When Click on Edit
    And Click 'Approve or Reject the output'
    Then Enter Comments "Testing the task with the SOR"
    And Click 'Accept and Mark Delivered' button





