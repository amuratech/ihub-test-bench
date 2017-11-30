Feature: Content Website- Full Flow
#  There is an error with the sub type, as they are getting changed once the
# 'save and add input brief' button is clicked
#  Task is not getting saved as Draft

  Scenario: Validate 'Add/Create a Task'
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      Then Click 'Quick add' link
      And Select 'Task'
      And Enter the client name ""
      And Select the department- content
      And Click on create task
      Then Enter task name "Testing Content Website"
      And Select task type- Content Website
      And Select task sub type- Content Website Single Scroll
      And Enter Brief "Testing content website single web page brief"
      And Enter Due date
      And Select time slot
      Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#      Given Launch the url ""
#      Then Click on username/email id "shahbaz@amuratech.com"
#      Then Click on password "amura123"
#      Then Click on sign in button
#      And Click on task sidebar
#      And Click content
#      Then Click on assigned to me
#      And Select newest
#      And Click on apply
#      Then Click on Edit
      And Click 'Add input brief' link
      And Select Tonality- Content Website
      Then Select Tags- Content
      And Enter USPs- Content Website
      And Click 'Save' button- Content Website
      Then Click 'Update' link
      And Select 'Publish'
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
      Given Launch the url ""
      Then Click on username/email id "meenakshi@amuratech.com"
      Then Click on password "amura123"
      Then Click on sign in button
      And Click on task sidebar
      And Click content
      Then Click on assigned to me
      And Select newest
      And Click on apply
      And Click review link
      Then Rate the input brief- Content Website
      And Accept
      Then Select assignee
      And Select 'Start date'
      Then Click assign button
      Then Click user name
      And Click 'Sign out'

  Scenario: Validate 'Add Output'
     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "abhay@amuratech.com"
     Then Click on password "amura123"
     Then Click on sign in button
     Then Click on task sidebar
     And Click content
     And Click on assigned to me
     Then Select newest
     And Click on apply
     Then Click on Edit
     Then Click 'Update' link
     And Click 'Start'
     Then Click 'Add your output' link
     And Enter Title "Testing title of the content website"- Content
     And Select Call to action
     And Upload Content website doc
     And Enter Thought process "Testing thought process"- Content
     And Click 'Save' button- Content Website Output
     Then Click 'Update' link
     And Select 'Review'
     Then Click user name
     And Click 'Sign out'

  Scenario: Validate 'Review the Output'
     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "meenakshi@amuratech.com"
     Then Click on password "amura123"
     Then Click on sign in button
     Then Click on task sidebar
     And Click content
     And Click on assigned to me
     Then Select newest
     And Click on apply
     And  Click review link
     Then Enter 'Has the brief been followed' "Testing"
     And Enter 'Does the content cater to given TG' "Testing"
     And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Testing"
     Then Upload Reference document- Content Output  Review
     And Rate the output- Content Website
     Then Click deliver button

