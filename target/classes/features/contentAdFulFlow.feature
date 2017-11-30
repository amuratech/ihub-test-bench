Feature:Content Ad- Full Flow

    Scenario: Validate 'Add/Create a Task'
      Given Launch the url "http://localhost:3000/"
      Then Click on username/email id "shahbaz@amuratech.com"
      Then Click on password "amura!@#"
      Then Click on sign in button
      Then Click 'Quick add' link
      And Select 'Task'
      And Enter the client name ""
      And Select the department- content
      And Click on create task
      Then Enter task name "Testing Content Ad Communication"
      And Select task type- Content Ad Communication
      And Enter Brief "Testing content ad communication"
      And Enter Due date
      And Select time slot
      Then Click 'save and add brief' button

    Scenario: Validate 'Add Input Brief'
#        Given Launch the url "http://localhost:3000/"
#        Then Click on username/email id "shahbaz@amuratech.com"
#        Then Click on password "amura!@#"
#        Then Click on sign in button
#        Then Click on task sidebar
#        And Click content
#        Then Click on assigned to me
#        Then Select newest
#        And Click on apply
#        Then Click on Edit
#        And Click 'Add input brief' link
        Then Enter usps
        And Add tags
        And Enter website URL- "www.google.com"- Content Ad
        And Upload Media plan reference doc
        Then Click 'Save' button- Content Ad Communication
        And Click 'Update' link
        And Select 'Publish'
        Then Click user name
        And Click 'Sign out'

    Scenario: Validate 'Review the input'
        Given Launch the url "http://localhost:3000/"
        Then Click on username/email id "meenakshi@amuratech.com"
        Then Click on password "amura!@#"
        Then Click on sign in button
        Then Click on task sidebar
        And Click content
        And Click on assigned to me
        Then Select newest
        And Click on apply
        Then Click review link`
        And Rate the input brief- content ad
        And Accept
#        Then Select assignee
#        And Select 'Start date'
#        Then Click assign button
#        Then Click user name
#        And Click 'Sign out'

     Scenario: Validate 'Add output'
        Given Launch the url "http://localhost:3000/"
        Then Click on username/email id "abhay@amuratech.com"
        Then Click on password "aura!@#"
        Then Click on sign in button
        Then Click on task sidebar
        And Click content
        And Click on assigned to me
        Then Select newest
        And Click on apply
        Then Click on Edit
        And Click 'Update' link
        And Click 'Start'
        Then Click 'Add your output' link
        And Enter thought process "Testing"- content ad
        And Upload ad content doc
        Then Click save button- content
        Then Click 'Update' link
        And Select 'Review'
        Then Click user name
        And Click 'Sign out'

      Scenario: Validate 'Review the output' and deliver the task
        Given Launch the url "http://localhost:3000/"
        Then Click on username/email id "meenakshi@amuratech.com"
        Then Click on password "amura!@#"
        Then Click on sign in button
        Then Click on task sidebar
        And Click content
        And Click on assigned to me
        Then Select newest
        And Click on apply
        Then Click review link
        And Upload Reference document- Content Output  Review
        And Review the output- Content Ad Communication
        Then Click deliver button













