Feature: Marketing Report feature

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
    When Enter task name "Testing Marketing Report task"
    And Enter task type- Marketing Report
    And Select task sub type- Marketing Monthly Report
    And Enter Brief "Testing marketing report brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button


   Scenario: Validate 'Add input brief'
#     Given Launch the url ""
#     When Click on username/email id "shahbaz@amuratech.com"
#     And Click on password "amura!@#"
#     Then Click on sign in button
#     When Click on task sidebar
#     And Click Marketing
#     Then Click on assigned to me
#     And Select newest
#     And Click on apply
#     When Click on Edit
#     Then Click 'Add input brief' link
    When Select Report start date
    And Select Report end date
    Then Select 'SEO Report' task reference
    And Select 'Social Report' task reference
    And Select 'Campaign Report' task reference
    And Click 'Save' button- Marketing Report input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

   Scenario: Validate 'Review the input brief'
    Given Launch the url "" 
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on tasks
    And Click Marketing
    When Click on assigned to me
    Then Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Marketing Report
    And Accept
    When Select 'Due date'
    And Select assignee for Marketing Brief
    Then Click assign button

     When Click user name
     Then Click 'Sign out'


   Scenario: Validate 'Add output'
      Given Launch the url ""
      When Click on username/email id "gautham@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click Marketing
      Then Click on assigned to me
      When Select newest
      And Click on apply
      Then Click on Edit
#      When Click 'Edit your output' link
      When Click 'Update' link
      Then Click 'Start'
      And Click 'Add your output' link
      When Enter Campaign inferences "Testing the campaign inferences"
      And Enter Strategic inferences "Testing the strategic inferences"
      Then Click 'Save' button- Marketing Report output
      And Upload Report document- Marketing Report output
      Then Click 'Edit your output' link
      When Click 'Update' link
      Then Click review link

      When Click user name
      Then Click 'Sign out'

    Scenario: Validate 'Review the output'
      When Click on username/email id "jasmine@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      Then Click Marketing
      When Click on assigned to me
      And Select newest
      And Click on apply
      Then Click review link
      When Rate the output- Marketing Report output
      Then Click 'Send for secondary review' button

      When Click user name
      Then Click 'Sign out'

      Scenario: Validate 'SOR'
#        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click on task sidebar
        Then Click Marketing
        When Click on assigned to me
        And Select newest
        And Click on apply
        Then Click on Edit
        When Click 'Approve or Reject the output'
        Then Enter Comments "Testing the SOR comments"
        Then Click 'Accept and Mark Delivered' button




