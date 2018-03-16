Feature: Marketing Work Review

  Scenario: Validate 'Add task' for the review
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click 'Quick add' link
    When Select 'Task'
    Then Enter the client name ""
    And Select the department- Marketing
    And Click on create task
    When Enter task name "Testing Marketing Work Review"
    And Select task type- Work Review
    And Enter Brief "Testing marketing work review brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add input brief'
    When Select Review start date
    And Select Review end date
    And Select Attendees- Marketing Work Review
    And Enter Concern from last review "Testing"
    Then Click 'Save' button- Marketing Work Review input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the input brief'
    Given Launch the url ""
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click on task sidebar
    When Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input- Marketing Work Review
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
    And Click on task sidebar
    When Click Marketing
    Then Click on assigned to me
    And Select newest
    When Click on apply
    Then Click on Edit
    And Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
#    When Click 'Edit your output' link
    Then Select Current client health
    And Review of the lead quality "Testing"
    And Enter Outstanding amount for advertisement "1000"
    And Enter Outstanding amount for services "1000"
    And Select Last client meeting
    And Enter Notes from last client meeting "Testing"
    And Enter Recent escalations "Testing"
    And Enter Review of SEO activities "Testing SEO activities"
    And Enter Review of social activities "Testing social activities"
    And Enter Review of website maintainance activities "Testing website maintainance activities"
    And Enter Review of market research activities "Testing market research activities"
    And Enter Review of creative and ideation activities "Testing creative and ideation activities"
    And Enter Review of paid media activities "Testing paid media activities"
    And Enter Comments- "Testing comments"- Marketing Work Review output
    And Enter Ideas and innovation suggested to client "Testing ideas and innovation suggested to client"
    And Click 'Save' button- Marketing Work Review output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

    Scenario: Validate 'Review the output'
      Given Launch the url ""
      When Click on username/email id "jasmine@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      And Click on task sidebar
      When Click Marketing
      Then Click on assigned to me
      And Select newest
      When Click on apply
      Then Click review link
      When Enter 'Has the Account Executive covered all the concerned activities under the contract' "Testing"
      And Enter 'Have you received any escalations other than the ones mentioned in the review' "Testing"
      And Enter 'Are we on track with the monthly plan proposed to the client' "Testing"
      And Enter 'Are you happy with the suggestions and the innovation suggested by the Account Executive' "Testing"
      And Enter 'Your feedback to the Account Executive, Does he/she need any improvements and which areas need to be worked on "Testing"
      And Rate the output- Marketing Work Review output
      And Click 'Send for secondary review' button

      When Click user name
      Then Click 'Sign out'

  Scenario: Validate 'SOR'
        Given Launch the url ""
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

