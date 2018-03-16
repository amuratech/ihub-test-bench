Feature: Content SEO Plan- Full Flow

  Scenario: Validate 'Add/Create a Task'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Select 'Task'
    Then Enter the client name ""
    And Select the department- content
    When Click on create task
    Then Enter task name "Testing Content SEO Plan"
    And Select task type- Content SEO Plan
    And Select task sub-type- Content SEO Plan On Page
    And Enter Brief "Testing content SEO plan brief"
    And Enter Due date
    And Select time slot
    When Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    And Click 'Add input brief' link
  # --------------   Below fields have been removed------
#    Then Select Planned post-count
#    And Enter Reference links
#    And Enter Keywords to focus on- Content SEO Plan
#    -----------------------------------------------------
  #   ------ -------Below fields have been added--------
    Then Click 'Click to add' link
    And Enter URL "www.google.com"- Content SEO Plan input
    And Enter Keywords- Content SEO Plan input
    And Select Month/Year
    And Click 'Save' button- Content SEO Plan Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
#    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the brief- Content SEO Plan
    When Accept
    Then Select 'Due date'
    And Select assignee for Content
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    When Click on username/email id "abhay@amuratech.com"
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
    Then Enter 'Has the copywriter researched well' "Yes"
    And Enter 'Has the copywriter included enough references from competition' "Yes"
    And Enter 'Are the topics repeat of what you find in the market' "Yes"
    And Enter 'Do you think the topics are more consumable or are like SEO specific' "Yes"
    And Upload Reference document- Content Output  Review
    And Rate the output- Content SEO Plan
    And Click 'Send for secondary review' button

   Scenario: Validate 'SOR'
     Given Launch the url ""
     When Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on task sidebar
     And Click content
     Then Click on assigned to me
     And Select newest
     And Click on apply
     When Click on Edit
     Then Click 'Approve or Reject the output'
     When Enter Comments "Testing the task delivered"
     Then Click 'Accept and Mark Delivered' button

