Feature: Web Development- Website Full Flow

  Scenario: Validate 'Create a task' and Add input brief
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- web development
    And Click on create task
    Then Enter task name "Testing web dev website"
    And Select web task type- Website
    Then Select task sub-type
    And Enter Brief "Testing web website brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button
    And Select CRM
    And Select func req
    And Select CMS
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'


  Scenario: Validate Review the input brief
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
#     Then Select name
#     And Select desc
#     And Select due date
#     And Select time
#     And Select task type suff info
#     And Select task sub-type suff info
#    And Select webdev radio name
#    And Select webdev radion desc
#    And Select webdev hosting
#    And Select webdev CMS
#    And Select webdev CRM
#    And Select webdev Func
#    And Select webdev sitemap
#     And Select webdev content
#    And Select webdev animation
#    And Select webdev form
#    And Select webdev fonts
#    And Select webdev cms req
#    And Select webdev design
#    And Select webdev script
#    And Select webdev desktop slices
#    And Select webdev mobile slices
#    And Select webdev ftp detail
#    And Select webdev server detail
#    And Select content sitemap
#    And Select content website
     And Rate webdev brief
     And Accept
     Then Select assignee
     And Select 'Start date'
     Then Click assign button


  Scenario: Validate 'Add output'
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
#    Then Click start working button- webdev
    Then Click 'Update task status' button
    And Click 'Start'
    And Click 'Add your output' link
##    And Enter thought process "Testing"
    And Enter QA software link "https://www.google.co.in"
    And Enter staging link "https://www.google.co.in"
    And Upload approval doc
    Then Click Save button
#    Then Click 'Update Task' button
    Then Click 'Update' link
    And Click 'Review'
    Then Click user name
    And Click 'Sign out'

   Scenario: Validate 'Review the output'
     Given Launch the url "http://localhost:3000/"
     Then Click on username/email id "sanjay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
     Then Click review link
#    Then Select webdev thought process
#    And Select staging link
#    And Select QA link
#    And Select staging link
#    And Select approval doc
#    Then Rate the adherence to design
#    And Rate the usage of libraries
#    And Rate the adherence to coding
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rate the website output
    And Click deliver button

