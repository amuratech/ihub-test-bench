Feature: Rework once the output is reviewed
         Here, we need to check if output reviewer is able to send the task for output review, if
         there are some loopholes in the output brief

  Scenario: Validate 'if Rework button is disabled,
            when output reviewer has marked one insufficient info

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
    And Select content sitemap
    And Select content website
    And Upload website design doc
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

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
     And Rate webdev brief
     And Accept
     Then Select assignee
     And Select 'Start date'
     Then Click assign button

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update task status' button
    And Click 'Start'
    And Click 'Add your output' link
    And Enter staging link "https://www.google.co.in"
    Then Click Save button
    Then Click 'Update' link
    And Click 'Review'

    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter reason for insuff info
    And Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rate the website output
    Then Rework button should be disabled

  Scenario: Validate 'if Rework button is disabled,
            when output reviewer has given rating less than 4

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
    And Select content sitemap
    And Select content website
    And Upload website design doc
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

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
     And Rate webdev brief
     And Accept
     Then Select assignee
     And Select 'Start date'
     Then Click assign button

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update task status' button
    And Click 'Start'
    And Click 'Add your output' link
    And Enter staging link "https://www.google.co.in"
    Then Click Save button
    Then Click 'Update' link
    And Click 'Review'

    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rework button should be disabled

  Scenario: Validate 'if Rework button is disabled,
  when output reviewer has given rating less than 4

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
    And Select content sitemap
    And Select content website
    And Upload website design doc
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

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
    And Rate webdev brief
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    And Enter staging link "https://www.google.co.in"
    Then Click Save button
    Then Click 'Update' link
    And Click 'Review'

    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rework button should be disabled



  Scenario: Validate 'if Rework button is disabled,
  when output reviewer has given rating less than 4

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
    And Select content sitemap
    And Select content website
    And Upload website design doc
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

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
    And Rate webdev brief
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update task status' button
    And Click 'Start'
    And Click 'Add your output' link
    And Enter staging link "https://www.google.co.in"
    Then Click Save button
    Then Click 'Update' link
    And Click 'Review'

    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rework button should be disabled

  Scenario: Validate 'if Rework button is enabled,
            when output reviewer has marked insufficient info and rating is less than 4

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
    And Select content sitemap
    And Select content website
    And Upload website design doc
    Then Select hosting
    Then Click Save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

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
    And Rate webdev brief
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update task status' button
    And Click 'Start'
    And Click 'Add your output' link
    And Enter staging link "https://www.google.co.in"
    Then Click Save button
    Then Click 'Update' link
    And Click 'Review'

    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""
    Then Click on username/email id "atul.saini@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter reason for insuff info
    And Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    And Rework button should be enabled

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "sunil@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Review'


