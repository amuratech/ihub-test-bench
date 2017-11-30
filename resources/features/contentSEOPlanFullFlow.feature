Feature: Content SEO Plan- Full Flow

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
    Then Enter task name "Testing Content SEO Plan"
    And Select task type- Content SEO Plan
    And Select task sub-type- Content SEO Plan On Page
    And Enter Brief "Testing content SEO plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    And Click 'Add input brief' link
  # --------------   Below fields have been removed------
#    Then Select Planned post-count
#    And Enter Reference links
#    And Enter Keywords to focus on- Content SEO Plan
#    -----------------------------------------------------
  #   ------ -------Below fields have been added--------
    When Click 'Click to add' link
    Then Enter URL "www.google.com"- Content SEO Plan input
    And Enter Keywords- Content SEO Plan input
    And Select Month/Year
    And Click 'Save' button- Content SEO Plan Input
    Then Click 'Update' link
    And Select 'Publish'



  Scenario: Validate 'Review the Input Brief'
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the brief- Content SEO Plan
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button

  Scenario: Validate 'Add Output'
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "girish@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter Topic "Testing SEO Plan Output"- Content SEO Plan
    And Select Expected approval date
    Then Click 'Save' button- Content SEO Plan Output
    And Click 'Update' link
    And Select 'Review'

  Scenario: Validate 'Review the Output'
#    Then Click user name
#    And Click 'Sign out'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Enter 'Has the copywriter researched well' "Yes"
    And Enter 'Has the copywriter included enough references from competition' "Yes"
    And Enter 'Are the topics repeat of what you find in the market' "Yes"
    And Enter 'Do you think the topics are more consumable or are like SEO specific' "Yes"
    And Upload Reference document- Content Output  Review
    And Rate the output- Content SEO Plan
    Then Click deliver button

