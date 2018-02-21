Feature: Marketing Plan full flow
  This feature describes the flow of the Marketing Plan task

  Scenario: Validate 'Add task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    Then Select 'Task'
    When Enter the client name ""
    And Select the department- Marketing
    Then Click on create task
    When Enter task name "Testing Marketing Plan task"
    And Enter task type- Marketing Plan
    And Select task sub type- Marketing Monthly Plan
    And Enter Brief "Testing marketing plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add input brief'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
     And Click Marketing
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When Click on Edit
     Then Click 'Add input brief' link
    When Select Plan start date
    And Select Plan end date
    And Select SEO plan task reference
    And Select Social plan task reference
    And Select Client meeting task reference
    Then Click 'Save' button- Marketing Plan input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the input brief'
    Given Launch the url ""
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input- Marketing Plan input
    And Accept
    When Select 'Due date'
    And Select assignee for Marketing Brief
    Then Click assign button

    When Click user name
    Then Click 'Sign out'

    Scenario: Validate 'Add output'
#      Given Launch the url ""
      When Click on username/email id "gautham@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click Marketing
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Update' link
      And Click 'Start'
      When Click 'Add your output' link
#      When Click 'Edit your output' link
      Then Enter 'Growth and innovation strategy' "Testing"
      And Enter 'Social innovation strategy' "Testing"
      And Enter 'SEO strategy' "Testing"
      And Click 'Save' button- Marketing Plan output
      When Upload reference doc
      Then Click 'Edit your output' link
      When Click 'Update' link
      Then Select 'Review'

  Scenario: Validate 'Review the output
       Given Launch the url ""
       When Click on username/email id "jasmine@amuratech.com"
       And Click on password "amura!@#"
       Then Click on sign in button
       When Click on task sidebar
       And Click Marketing
       Then Click on assigned to me
       And Select newest
       And Click on apply
       When Click review link
       Then Rate the output- Marketing Plan output
       And Click 'Send for secondary review' button

       When Click user name
       Then Click 'Sign out'

  Scenario: Validate 'SOR'
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click on task sidebar
        And Click Marketing
        Then Click on assigned to me
        And Select newest
        And Click on apply
        When Click on Edit
        And Click 'Approve or Reject the output'
        Then Enter Comments "Testing the secondary output review"
        And Click 'Accept and Mark Delivered' button




