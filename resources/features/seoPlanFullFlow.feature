Feature: SEO Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- seo
    And Click on create task
    Then Enter task name "Testing SEO Plan for product details and brand guidelines"
    And Enter task type- seo plan
    And Enter Brief "Testing SEO plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "shahbaz@amuratech.com"
#    Then Click on password "amura!@#"
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
#    And Select product
    And Click Save
    Then Click 'Update' link
    And Select 'Publish'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url ""
    Then Click on username/email id "gaurav.m@amuratech.com"
    And Click on password "amura!@#"
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
    When Select 'Due date'
    Then Select assignee for seo
#    And Select 'Start date'
    And Click assign button

    When Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "minal@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    Then Click SEO
    When Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
#    Then Click 'Update' link
#    And Click 'Start'
    When Click 'Add your output' link
    Then Enter objective "Testing"
#    And Select product
    And Enter suggested topics "Testing suggested topics"
    And Click accordion to add the topic
    When Click 'Click to add' link
    Then Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing strategy"
    And Enter Activities done "Testing activities done"
    And Enter Desired outcome "Testing desired outcome"
    When Click 'Click to add' link
    Then Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing strategy"
    And Enter Activities done "Testing activities done"
    And Enter Desired outcome "Testing desired outcome"
    When Click 'Click to add' link
    Then Enter URL "www.google.com" for Objective
    And Enter Strategy "Testing strategy"
    And Enter Activities done "Testing activities done"
    And Enter Desired outcome "Testing desired outcome"
    When Click 'Click to add' link for Quora
    Then Enter URL to Quora post ""
    And Enter Weeks to publish "2"
    And Enter Keywords of focus for Quora post
    When Click 'Click to add' link for Google
    Then Enter Existing URL ""
    And Select Category for business listing
    When Click 'Click to add' link for Keywords
    Then Enter Keyword ""
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing keyword"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Click to add' link for Keywords
    Then Enter Keyword "Testing"
    And Enter Impressions "2"
    And Enter Current SEO rank "2"
    And Enter Target SEO rank "2"
    And Select Category for keywords
    And Enter Competition
    When Click 'Save' button- SEO Plan Output
    Then Click 'Update' link
    And Select 'Review'
    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review' the Output'
    Given Launch the url ""
    When Click on username/email id "gaurav.m@amuratech.com"
    Then Click on password "amura!@#"
    And Click on sign in button
    When Click on task sidebar
    Then Click SEO
    And Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output- SEO Plan Output
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

    Scenario: Validate 'SOR'
#      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      Then Click on web development
      And Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Approve or Reject the output'
      And Enter Comments "Testing comments"
      And Click 'Accept and Mark Delivered' button


