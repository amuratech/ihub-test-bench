Feature: Project- Full Flow
  Background: There are few tasks which must be delivered/completed, before taking any campaign live. So,
    we need to check all the steps involved in the project/assignment
  @smoke
  Scenario: Validate 'Add new Project'
    Given Launch the url "http://localhost:3000/"
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    And Click on sign in button
    Then Click 'Quick add' link
    And Select 'Project'
    Then Select 'Client'
    And Click 'Add Project'
    And Enter Project title "Testing"
    And Select Project type
    And Select Billing method
    And Select Due date of project
    And Enter Estimated budget "10000"
    And Select website design
    And Select campaign start date- assignment
    And Select campaign end date- assignment
    And Enter Purpose "Testing"
#       And Check 'brief session required' box
    Then Click 'save' button- assignment
    And Click 'Initiate campaign'

  @smoke
  Scenario: Validate 'Submit initial campaign brief' task
    Then Click Submit initial campaign brief task
    When Click 'Add input brief' link
    Then Enter Brief provided by client "Testing brief provided by the client"
    And Click 'Save' button- Marketing Input
    Then Select 'Publish'
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "jasmine@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- Marketing Brief
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "gautham@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Enter Offers
    And Enter Communication guidelines
    Then Select a competitor
    And Select a project
    Then Click 'Save' button- Marketing Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "jasmine@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the output brief- Marketing Brief
    And Click deliver button

  @smoke
  Scenario: Validate Brief Approved
    Then Click user name
    And Click 'Sign out'
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as brief approved'

  @smoke
  Scenario: Validate Submit Media Plan
    Given Testing- Submit Media Plan
    Then Select 'Publish'
    When Click user name
    And Click 'Sign out'
    Then Click on username/email id "saad@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on media plan
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input brief- media input
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "saad@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on media plan
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter name of publisher
    And Enter budget- media plan "10000"
    And Enter clicks "10"
    And Enter visits "20"
    And Enter inquiries "100"
    Then Click submit button- media plan output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'
    Then Click on username/email id "saad@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on media plan
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the output- media plan
    Then Click deliver button

  @smoke
  Scenario: Validate Plan Approved
    Then Click user name
    And Click 'Sign out'
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as plan approved'

  @smoke
  Scenario: Validate Testing- Generate Invoice
#    Given  Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on projects
#    Then Select newest
#    And Click on apply
#    Then Click View details
    When Click on Testing- Generate Advertising Invoice
    Then Click 'Add input brief' link
    And Enter Amount "100000"
    And Click 'Save' button- Finance input
    When Click 'Update' link
    Then Select 'Publish'- Finance
#    Then Click the alert
    Then Click 'Update' link
    And Click 'Mark invoice raised'
    Then Click user name
    And Click 'Sign out'
    Given Launch the url ""
    Then Click on username/email id "mrudula@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click Finance
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Add payment details'
    And Enter Payment method "Testing"
    And Enter Usable budget "10000"
    And Enter Instrument number "10"
    And Enter Received on
    Then Click 'Save' button- Finance
    Then Click 'Update' link
    And Click 'Money received' link

  @smoke
  Scenario: Validate Testing- Generate Sitemap
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click View details
    When Click on Testing- Generate Sitemap
    Then Click 'Add input brief' link
    And Click 'Save' button- Content Sitemap Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the brief- Content Sitemap Input
    Then Accept
    And Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "girish@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter Thought process "Testing"
    And Upload detailed sitemap doc
    And Click 'Save' button- Content Sitemap Output
    Then Click 'Update' link
    And Select 'Review'
    And Click user name
    Then Click 'Sign out'

    Then Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click review link
    Then Enter 'Does the content cater to given TG' "Yes"- Content Sitemap
    And Enter 'Has the brief been followed' "Yes"- Content Sitemap
    And Upload Reference document- Content Output  Review
    Then Rate the output- Content Sitemap
    And Click deliver button

  @smoke
  Scenario: Validate Testing- Content for Landing Page
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click View details
    When Click on Testing- Content for LP
    Then Click 'Add input brief' link

    And Select Tonality- Content Website
    Then Select Tags- Content
    And Enter USPs- Content Website
    And Click 'Save' button- Content Website
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
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

    Then Click on username/email id "girish@amuratech.com"
    Then Click on password "amura!@#"
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

    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
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

  @smoke
  Scenario: Validate Testing- Request for Ad Communication
    Then Click user name
    And Click 'Sign out'
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click View details
    When Click on Testing- Request for Ad Communication

    Then Click 'Add input brief' link
    Then Enter usps
    And Add tags
    And Enter website URL- "www.google.com"- Content Ad
    And Upload Media plan reference doc
    Then Click 'Save' button- Content Ad Communication
    And Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "meenakshi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click content
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    And Rate the input brief- content ad
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "girish@amuratech.com"
    Then Click on password "amura!@#"
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

  @smoke
  Scenario: Validate Mark as Communication Approved
      Then Click user name
      And Click 'Sign out'
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as communication approved'

  @smoke
  Scenario: Validate Testing- Request Website Design
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on projects
#    Then Select newest
#    And Click on apply
#    Then Click View details
    Then Click Testing- Request website design
    And Click 'Add input brief' link
    Then Enter usp "Testing"
    And Click plus sign
    And Select Tags- Design
    And Upload functional requirements
    And Enter reference link "https://www.google.co.in/"
    Then Click plus
    And Select CTA
    Then Click save and publish later button
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

#      Given Launch the url ""

    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click review link
    Then Rate
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "varsha.j@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    And Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    And Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    Then Upload designs
    Then Click 'Edit your output' link
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "shaunak.v@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate- Output
    Then Click deliver button

  Scenario: Validate Testing- Request for Ad Design
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click View details
    When Click Testing- Request for Ad Design
    And Click 'Add input brief' link
    Then Click 'Save' button- Design Ad Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "rohit.m@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Give rating
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""

    Then Click on username/email id "varsha.j@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    Then Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    Then Upload designs
    Then Click 'Edit your output' link
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

#      Given Launch the url ""

    Then Click on username/email id "shaunak.v@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    And Rate- Design Ad Output
    Then Click deliver button

  @retesting
  Scenario: Validate Mark as Design Approved
#    When Click user name
#    Then Click 'Sign out'
      Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as design approved'

  @retesting
  Scenario: Validate Testing- Request for Website Development
    Given Testing- Request for website development
    Then Click 'Add input brief' link
    And Select CRM
    And Select func req
    And Select CMS
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

#    Given Launch the url ""
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
      And Select 'Review'
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
    Then Enter link to QA project "www.google.com"
    Then Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    Then Rate the website output
    And Click deliver button

  @retesting
  Scenario: Validate Mark as Client Approved
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as client approved'

  @retesting
  Scenario:  Validate Testing- Request for Campaign Execution
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on projects
#    Then Select newest
#    And Click on apply
#    Then Click View details

    When Click Testing- Request for Campaign Execution

    Then Click 'Add input brief' link
    Then Upload Campaign tracking file
    And Select Grant the paid media access to
    And Enter Google analytics ID "Testing"
    And Click 'Save' button- Paid Media Input
    Then Click 'Update' link
    And Select 'Publish'

    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "madhavi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input brief- campaign execution
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

#    Given Launch the url ""

    Then Click on username/email id "smita@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Update' link
    And Click 'Start'
    Then Click 'Add your output' link
    And Enter Reason for not advertising automation "Testing"
    Then Click 'Submit' button
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

    Then Click on username/email id "madhavi@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Paid Media
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the output brief- Paid Media
    And Click deliver button

  @retesting
  Scenario: Validate Mark as Ready to go Live
    Then Click user name
    And Click 'Sign out'
#    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    Then Click on Edit
    And Click 'Mark as ready to go live'

