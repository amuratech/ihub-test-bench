Feature: SEO Plan- Full Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- seo
    And Click on create task
    Then Enter task name "Testing SEO Plan"
    And Enter task type- seo plan
    And Enter Brief "Testing SEO plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar
#    And Click SEO
#    Then Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    Then Click 'Add input brief' link
    Then Enter requirements "Testing"
    And Click check box
    And Select product
    And Click Save
    Then Click 'Update' link
    And Select 'Publish'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate input brief
#    Then Click request changes- seo
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "minal@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter objective "Testing"
    And Select product
    And Enter suggested topics "Testing"
    Then Click accordion to add the topic
    Then Click 'Click to add' link
    And Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing"
    And Enter Activities done "Testing"
    And Enter Desired outcome "Testing"
    Then Click 'Click to add' link
    And Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing"
    And Enter Activities done "Testing"
    And Enter Desired outcome "Testing"
    Then Click 'Click to add' link
    And Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing"
    And Enter Activities done "Testing"
    And Enter Desired outcome "Testing"
    Then Click 'Click to add' link for Quora
    And Enter URL to Quora post ""
    And Enter Weeks to publish "2"
    And Enter Keywords of focus for Quora post
    Then Click 'Click to add' link for Google
    And Enter Existing URL ""
    And Select Category for business listing
    Then Click 'Click to add' link for Keywords
    And Enter Keyword ""
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Click to add' link for Keywords
    And Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    Then Click 'Save' button- SEO Plan Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review' the Output'
    Given Launch the url ""
    Then Click on username/email id "gaurav.m@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click SEO
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the output- SEO Plan Output
    Then Click deliver button
    


