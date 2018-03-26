Feature: Project/Assignment Full Flow
  Background: There are few tasks which must be delivered/completed, before taking any campaign live. So,
    we need to check all the steps involved in the project/assignment

#  -----------Adding new Project-----------
  Scenario: Validate 'Add new Project'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
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
    When Click 'save' button- assignment
    Then Click 'Initiate campaign'

#    --------Submit Initial Campaign Brief----------
  Scenario: Validate 'Submit initial campaign brief' task
    When Click Submit initial campaign brief task
    Then Click 'Add input brief' link
    And Enter Brief provided by client "Testing brief provided by the client"
    When Click 'Save' button- Marketing Input
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#    ----------Review input brief and assigning the task------------
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Marketing Brief
    When Accept
#    And Select 'Start date'
#    And Select 'Due date'
    Then Select assignee for Marketing Brief
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     ---------Adding the output---------------
    When Click on username/email id "gautham@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    Then Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Offers
    And Enter Communication guidelines
    And Select a competitor
    And Select a project
    And Click 'Save' button- Marketing Output
    When Click 'Update' link
    Then Select 'Review'
    When Click user name
    Then Click 'Sign out'

#     --------Review the output and send for SOR----------
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    Then Click on task sidebar
    And Click Marketing
    And Click on assigned to me
    Then Select newest
    And Click on apply
    When Click review link
    Then Rate the output brief- Marketing Brief
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     -----------SOR---------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Marketing
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click on Edit
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the marketing task delivered for an assignment"
    And Click 'Accept and Mark Delivered' button

#    When Click user name
#    Then Click 'Sign out'


#    --------Brief Approved stage-------------
  Scenario: Validate Brief Approved
    When Click 'View Project' link
    Then Click 'Mark as brief approved'

#     --------- Media Plan task----------------
  Scenario: Validate Submit Media Plan

    When Testing- Submit Media Plan
    Then Select 'Publish'
    When Click user name
    Then Click 'Sign out'

#    ------- Review the input brief and assign the task------------------
  Scenario: Validate media plan
    Given Launch the url ""
    When Click on username/email id "saad@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- media input
    When Accept
#    Then Select 'Due date'
    When Select assignee for Media Planning
#    And Select 'Start date'
    Then Click assign button


    When Click user name
    Then Click 'Sign out'

#     -------Add the output -------
    When Click on username/email id "pranav@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter name of publisher
    And Enter budget- media plan "10000"
    And Enter clicks "10"
    And Enter visits "20"
    And Enter inquiries "100"
    And Click submit button- media plan output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

#    ----Review the output brief and send for SOR-----------------
    When Click on username/email id "saad@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output- media plan
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     ---------Secondary output review-------------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on media plan
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the plan task delivered for an assignment"
    Then Click 'Accept and Mark Delivered' button

#    --------Plan Approved stage-----------
  Scenario: Validate Plan Approved
    When Click 'View Project' link
    Then Click 'Mark as plan approved'


#    -------------Finance Invoice task---------
#  Scenario: Validate Testing- Generate Invoice
#    When Click on Testing- Generate Advertising Invoice
#    Then Click 'Add input brief' link
#    And Enter Amount "100000"
#    And Click 'Save' button- Finance input
#    When Click 'Update' link
#    Then Select 'Publish'- Finance
#    Then Click the alert
#    Then Click 'Update' link
#    And Click 'Mark invoice raised'
#
#    Then Click user name
#    And Click 'Sign out'

#    Given Launch the url ""
#    Then Click on username/email id "mrudula@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    Then Click on task sidebar
#    Then Click Finance
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
#    When Click 'Add payment details'
#    And Enter Payment method "Testing"
#    And Enter Usable budget "10000"
#    And Enter Instrument number "10"
#    And Enter Received on
#    Then Click 'Save' button- Finance
#    Then Click 'Update' link
#    And Click 'Money received' link

#   -----------Content Sitemap task-----------
  Scenario: Validate Testing- Generate Sitemap
    When Click on Testing- Generate Sitemap
    Then Click 'Add input brief' link
    And Click 'Save' button- Content Sitemap Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#     ------------Review the input brief----------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the brief- Content Sitemap Input
    When Accept
#    And Select 'Due date'
    Then Select assignee for Content
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     -------------Add output------------
    When Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Thought process "Testing"
    And Upload detailed sitemap doc
    And Click 'Save' button- Content Sitemap Output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'


#     -----------Review the output and send for SOR---------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Does the content cater to given TG' "Yes"- Content Sitemap
    And Enter 'Has the brief been followed' "Yes"- Content Sitemap
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Sitemap
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#    -------SOR----------------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    Then Select newest
    And Click on apply
    And Click on Details
    When Click on Testing- Generate Sitemap
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the content sitemap delivered for an assignment"
    And Click 'Accept and Mark Delivered' button

#   -------------Content LP task--------------
  Scenario: Validate Testing- Content for Landing Page
    When Click 'View Project' link
    Then Click on Testing- Content for LP
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on projects
#    Then Select newest
#    And Click on apply
#    When Click on Details
#    Then Click on Testing- Content for LP
    When Click 'Add input brief' link
    And Select Tonality- Content Website
    And Select Tags- Content
    And Enter USPs- Content Website
    And Click 'Save' button- Content Website
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#     ----------Review the input brief----------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- Content Website
    When Accept
#    And Select 'Due date'
    Then Select assignee for Content
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#    ---------Add output---------
    When Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Title "Testing title of the content website"- Content
    And Select Call to action
    And Upload Content website doc
    And Enter Thought process "Testing thought process"- Content
    And Click 'Save' button- Content Website Output
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

#     -------Review the output---------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When  Click review link
    Then Enter 'Has the brief been followed' "Testing"
    And Enter 'Does the content cater to given TG' "Testing"
    And Enter 'Has the copy writer followed the necessary 'tone of voice'' "Testing"
    And Upload Reference document- Content Output  Review
    When Rate the output- Content Website
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     --------SOR---------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    And Select newest
    And Click on apply
    Then Click on Details
    When Click on Testing- Content for LP
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the content LP task delivered for an assignment"
    And Click 'Accept and Mark Delivered' button

# --------------Content Ad task---------
  Scenario: Validate Testing- Request for Ad Communication
    When Click 'View Project' link
    Then Click on Testing- Request for Ad Communication
    When Click 'Add input brief' link
    Then Enter usps
    And Add tags
    And Enter website URL- "www.google.com"- Content Ad
    And Upload Media plan reference doc
    Then Click 'Save' button- Content Ad Communication
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#     ---------------Review the input brief------------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- content ad
    When Accept
#    Then Select 'Due date'
    Then Select assignee for Content
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     ------------Add output----------
    When Click on username/email id "abhay@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
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

#     -----Review the output and send for SOR-----------
    When Click on username/email id "meenakshi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click content
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
#    And Upload Reference document- Content Output  Review
    And Review the output- Content Ad Communication
    Then Click 'Send for secondary review' button

#     ------------SOR----------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    And Select newest
    And Click on apply
    Then Click on Details
    When Click on Testing- Request for Ad Communication
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the content ad communication task delivered for an assignment"
    And Click 'Accept and Mark Delivered' button

#   ------------Communication Approved-------
  Scenario: Validate Mark as Communication Approved
    When Click 'View Project' link
    Then Click 'Mark as communication approved'

#   -------------Design Website task------------
  Scenario: Validate Testing- Request Website Design
    When Click Testing- Request website design
    Then Click 'Add input brief' link
    And Enter usp "Testing"
    And Click plus sign
    And Select Tags- Design
    And Upload functional requirements
    And Enter reference link "https://www.google.co.in/"
    And Click plus
    And Select CTA
    When Click save and publish later button
    Then Click 'Update' link
    And Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#     -------Review the input brief---------
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate
    When Accept
#    When Select 'Due date'
    Then Select assignee for Design
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     ------Add output--------
    When Click on username/email id "varsha.j@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    And Upload designs
    When Click 'Edit your output' link
    Then Click 'Update' link
    And Select 'Review'

    When Click user name
    Then Click 'Sign out'

#     -------Review the output-----------
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    When Rate- Output
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     -----SOR------------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    And Select newest
    And Click on apply
    Then Click on Details
    When Click Testing- Request website design
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the design website task delivered for an assignment"
    And Click 'Accept and Mark Delivered' button


#    ------------Ad Design task--------
  Scenario: Validate Testing- Request for Ad Design
    When Click Testing- Request for Ad Design
    Then Click 'Add input brief' link
    And Click 'Save' button- Design Ad Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#       ---------Review the input brief-----------
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Give rating
    When Accept
#    And Select 'Due date'
    Then Select assignee for Design
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     --------Add output-----------------
    When Click on username/email id "varsha.j@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter thought process "Testing"- Design
    And Click 'Save' button
    And Upload designs
    When Click 'Edit your output' link
    Then Click 'Update' link
    And Select 'Review'

    When Click user name
    Then Click 'Sign out'

#     ------------Review the output----------
    When Click on username/email id "rohit.m@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter 'Have the brand guidelines been followed' "Testing"
    And Enter 'Has the designer used correct colours & fonts' "Yes"
    And Enter 'Is the creative as per the brief' "Yes"
    And Enter 'Has the designer explained his thought process' "Yes"
    And Enter 'If delayed, please comment on the reason for the delay' "Yes"
    When Rate- Design Ad Output
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     --------SOR----------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on projects
    And Select newest
    And Click on apply
    Then Click on Details
    When Click Testing- Request for Ad Design
    Then Click 'Approve or Reject the output'
    And Enter Comments "Testing the design website task delivered for an assignment"
    And Click 'Accept and Mark Delivered' button

#     -------Design Approved--------
  Scenario: Validate Mark as Design Approved
    When Click 'View Project' link
    Then Click 'Mark as design approved'

#     --------Website Development-----
  Scenario: Validate Testing- Request for Website Development
    When Testing- Request for website development
    Then Click 'Add input brief' link
    And Select CRM
    And Select func req
    And Select CMS
    And Select hosting
    And Click Save and publish later button
    When Click 'Update' link
    Then Select 'Publish'

    Then Click user name
    And Click 'Sign out'

#     --------Review the input brief------
    When Click on username/email id "pankit@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate webdev brief
    When Accept
#    And Select 'Due date'
    Then Select assignee for Web Development
#     And Select 'Start date'
    And Click assign button

     When Click user name
     Then Click 'Sign out'

#     -----Add output----
    When Click on username/email id "ashwin@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update task status' button
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter staging link "https://www.google.co.in"
    And Click Save button
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

#     --------Review the output---------
    When Click on username/email id "atul.saini@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on web development
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Enter link to QA project "www.google.com"
    And Enter copy review "Testing copy review"
    And Enter design review "Testing design review"
    And Enter desktop page speed score "100 Testing"
    And Enter mobile page speed score "100"
    When Rate the website output
    Then Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#       ----------SOR------------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click on design
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the design website task delivered for an assignment"
    Then Click 'Accept and Mark Delivered' button

#     -----------Client Approved--------
  Scenario: Validate Mark as Client Approved
    When Click 'View Project' link
    Then Click 'Mark as client approved'

#     -------Campaign Execution task------------
  Scenario:  Validate Testing- Request for Campaign Execution
    When Click Testing- Request for Campaign Execution
    Then Click 'Add input brief' link
    And Upload Campaign tracking file
    And Enter Landing page URL "www.google.com"
    And Select Grant the paid media access to
    And Enter Google analytics ID "UA-0000-02"
    And Click 'Save' button- Paid Media Input
    When Click 'Update' link
    Then Select 'Publish'

    When Click user name
    Then Click 'Sign out'

#     -------Review the input brief----
    When Click on username/email id "madhavi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the input brief- campaign execution
    When Accept
#    And Select 'Due date'
    Then Select assignee for Campaign
#    And Select 'Start date'
    And Click assign button

    When Click user name
    Then Click 'Sign out'

#     ------Add output-----
    When Click on username/email id "smita@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Update' link
    Then Click 'Start'
    When Click 'Add your output' link
    Then Enter Reason for not advertising automation "Testing"
    And Click 'Submit' button
    When Click 'Update' link
    Then Select 'Review'

    When Click user name
    Then Click 'Sign out'

#    ------Review the output----
    When Click on username/email id "madhavi@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    When Click review link
    Then Rate the output brief- Paid Media
    And Click 'Send for secondary review' button

    When Click user name
    Then Click 'Sign out'

#     -------------SOR----------
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on task sidebar
    And Click Paid Media
    Then Click on assigned to me
    And Select newest
    And Click on apply
    And Click on Edit
    When Click 'Approve or Reject the output'
    And Enter Comments "Testing the paid media task delivered for an assignment"
    Then Click 'Accept and Mark Delivered' button

#     ---------Ready to go live-------
  Scenario: Validate Mark as Ready to go Live
    When Click 'View Project' link
    Then Click 'Mark as ready to go live'



