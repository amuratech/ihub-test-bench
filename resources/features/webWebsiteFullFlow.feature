Feature: Web Development- Website Full Flow

  Scenario: Validate 'Create a task' and Add input brief
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- web development
    And Click on create task
    When Enter task name "Testing web dev website for assignee form"
    And Select web task type- Website
    And Select task sub-type
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

    When Select CRM
    And Select func req
    And Select CMS
    And Select content sitemap
    And Select content website
    And Upload website design doc
    And Select hosting
    Then Click Save and publish later button
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate Review the input brief
    Given Launch the url ""
    When Click on username/email id "pankit@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
     Then Rate webdev brief
     When Accept
#     And Select 'Due date'
     Then Select assignee for Web Development
#     And Select 'Start date'
     And Click assign button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add output'
     Given Launch the url ""
    When Click on username/email id "ashwin@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
#    Then Click start working button- webdev
    When Click 'Update task status' button
    Then Click 'Start'
    When Click 'Add your output' link
##    And Enter thought process "Testing"
    Then Enter QA software link "https://www.google.co.in"
    And Enter staging link "https://www.google.co.in"
    And Upload approval doc
    And Click Save button
#    Then Click 'Update Task' button
    When Click 'Update' link
    Then Click 'Review'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the output'
     Given Launch the url ""
     When Click on username/email id "atul.saini@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
     When Click review link
#    Then Select webdev thought process
#    And Select staging link
#    And Select QA link
#    And Select staging link
#    And Select approval doc
#    Then Rate the adherence to design
#    And Rate the usage of libraries
#    And Rate the adherence to coding
     Then Enter link to QA project "www.google.com"
    And Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    When Rate the website output
    Then Click 'Send for secondary review' button

     When Click user name
     Then Click 'Sign out'

  Scenario: Validate the 'SOR'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the task with the SOR"
    Then Click 'Accept and Mark Delivered' button


