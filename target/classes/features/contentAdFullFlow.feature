Feature:Content Ad- Full Flow

    Scenario: Validate 'Add/Create a Task'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click 'Quick add' link
      Then Select 'Task'
      And Enter the client name ""
      And Select the department- content
      When Click on create task
      Then Enter task name "Testing Content Ad Communication"
      And Select task type- Content Ad Communication
      And Enter Brief "Testing content ad communication"
      And Enter Due date
      And Select time slot
      When Click 'save and add brief' button

    Scenario: Validate 'Add Input Brief'
#        Given Launch the url ""
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
#        And Upload Media plan reference doc
        And Select Media plan task reference
        When Click 'Save' button- Content Ad Communication
        Then Click 'Update' link
        And Select 'Publish'

        When Click user name
        And Click 'Sign out'

    Scenario: Validate 'Review the input'
        Given Launch the url ""
        When Click on username/email id "meenakshi@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click on task sidebar
        And Click content
        Then Click on assigned to me
        And Select newest
        When Click on apply
        And Click review link
        Then Rate the input brief- content ad
        When Accept
        Then Select 'Due date'
        And Select assignee for Content
#        And Select 'Start date'
        And Click assign button
        When Click user name
        Then Click 'Sign out'

     Scenario: Validate 'Add output'
        Given Launch the url ""
        When Click on username/email id "abhay@amuratech.com"
        Then Click on password "amura!@#"
        And Click on sign in button
        When Click on task sidebar
        And Click content
        Then Click on assigned to me
        And Select newest
        When Click on apply
        Then Click on Edit
        When Click 'Update' link
        Then Click 'Start'
        When Click 'Add your output' link
        Then Enter thought process "Testing"- content ad
        And Upload ad content doc
        And Click save button- content
        When Click 'Update' link
        Then Select 'Review'
        When Click user name
        Then Click 'Sign out'

      Scenario: Validate 'Review the output'
        Given Launch the url ""
        When Click on username/email id "meenakshi@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click on task sidebar
        And Click content
        Then Click on assigned to me
        And Select newest
        And Click on apply
        When Click review link
        Then Upload Reference document- Content Output  Review
        And Review the output- Content Ad Communication
        And Click 'Send for secondary review' button

      Scenario: Validate 'SOR'
         Given Launch the url ""
         When Click on username/email id "shahbaz@amuratech.com"
         And Click on password "amura!@#"
         Then Click on sign in button
         When Click on task sidebar
         And Click content
         Then Click on assigned to me
         When Select newest
         And Click on apply
         Then Click on Edit
         When Click 'Approve or Reject the output'
         And Enter Comments "Testing"
         Then Click 'Accept and Mark Delivered' button




