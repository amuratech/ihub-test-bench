Feature: Client Onboarding
  Here, client can be onboarded in a step wise process
  The feature describes about the client onboarding process from initial stage to final stage

  Scenario: Validate 'Create client'
    Given Launch the url ""
    When Click on username/email id "anupriya@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click 'Quick add' link
    And Click Client
    Then Enter Name of the client "TestingOnboardingClientRunwal"
    And Enter Search key "ROCR"
    And Select the category of the client
    And Select Group
    Then Select a Manager
    And Select an Executive
    And Select a Secondary Executive
    And Select a Sales User
    And Select a Business Vertical
    And Enter Revenue "10000"
    And Select Services
    And Enter Email domains "Testing"
    And Select Contract Start date
    And Select Contract End date

    And Enter Name in the Contact form "Testing contact name"
    And Enter Phone "123456"
    And Enter Email "testing@gmail.com"

    And Click 'Save' button- Client

  Scenario: Validate 'Add billing details'
#    Given Launch the url ""
#    When Click on username/email id "anupriya@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on clients
#    Then Select the Client
#    And Click on apply
    When Select 'Add Billing details'
    And Click 'Click to add' link
    Then Enter Name for billing details "Testing name for billing details"
    And Enter Phone for billing details "123456"
    And Enter Email for billing details "testing@gmail.com"
    And Click 'Save' button- Billing details

  Scenario: Validate 'Add supervisors'
#    Given Launch the url ""
#    When Click on username/email id "anupriya@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on clients
#    Then Select the Client
#    And Click on apply
    When Select 'Add supervisors'
    Then Select Copy as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Design as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Social Media as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Web Developement as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Marketing as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Paid Media as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Media Planning as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select SEO as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select Delivery as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor
    When Click 'Add supervisor' link
    Then Select QA as department
    And Select Input Reviewer- Supervisor
    And Select Output Reviewer- Supervisor
    Then Select 'Save' button- Supervisor

   Scenario: Validate 'Change the stage to Onboarding'
#     Given Launch the url ""
#     When Click on username/email id "anupriya@amuratech.com"
#     And Click on password "amura!@#"
#     Then Click on sign in button
#     When Click on clients
#     Then Select the Client
#     And Click on apply
     When Click 'Clients' breadcrumb link
     Then Click 'Edit client' link
     And Change the stage to onboarding
     And Click 'Save' button- Onboarding stage

    Scenario: Validate 'Add onboarding' project
#      Given Launch the url ""
#      When Click on username/email id "anupriya@amuratech.com"
#      And Click on password "amura!@#"
#      Then Click on sign in button
#      When Click on clients
#      Then Select the Client
#      And Click on apply
      When Click 'Clients' breadcrumb link
      And Click 'Add onboarding' link
      Then Enter Name of the project "Testing onboarding project "
      And Select Go Live date of onboarding project
      And Select Due date of onboarding project
      And Select Kick of meeting date for onboarding project
      And Enter 'Any specific delivery requriements' "Testing specific delivery requirements"
      And Enter 'Immediate invoice request' "Testing immediate invoice request"
      And Click 'Save' button- onboarding project

      When Click 'Edit project' for uploading the document
      Then Click 'Upload' button for Contract and MoU document
      And Click 'Save' button to upload the document- onboarding project

#      And Click 'Clients' breadcrumb link

#      -------Initiate client onboarding stage---------
  Scenario: Validate 'Initiate client onboarding' stage
#    Given Launch the url ""
#    When Click on username/email id "anupriya@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on clients
#    Then Select the Client
#    And Click on apply
#    When Select the onboarded project from the projects dropdown
#    And Select newest
#    And Click on apply
#    Then Click 'View details' from the actions
    And Click 'Initiate client onboarding' link

    When Click user name
    Then Click 'Sign out'

#    --- -Finance Contract Task- Get a contract signed--------
   Scenario: Validate 'Get a contract signed' task
#     Given Launch the url ""
     When Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     And Select newest
     And Click on apply
     Then Click 'View details' from the actions

#     ---Add input brief for the Finance Contract task----------
     When Click 'Get a contract signed' finance task
#     Then Click 'Add input brief' link
#     And Select Start date for the contract
#     And Select End date for the contract
#     And Select Billing contact details
#     And Click 'Save' button- Finance Contract Input
     When Click 'Update' link
     Then Select 'Publish'

     When Click user name
     Then Click 'Sign out'

#     ------Mark as 'Invoice Raised'-------
     Given Launch the url ""
     When Click on username/email id "mrudula@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     And Select newest
     And Click on apply
     Then Click 'View details' from the actions
     When Click 'Get a contract signed' finance task
     Then Click 'Mark as invoice raised' link

#     ----Add Payment Details------------
     When Click 'Add payment details'
     Then Select 'Signed on' date for the contract
     And Select Amura signatory
     And Enter Name of the contract "Testing name of the contract"
     And Enter Annual value "10000"
     And Click 'Save' button- Finance Contract Payment Details

#    ------- Mark as Money Received---------
     When Click 'Mark as money received'
     Then Click 'View Project' link

     When Click user name
     Then Click 'Sign out'

#    -------- Marketing Requirement Task (Self raised task)- Create a client requirement document--------
   Scenario: Validate 'Create a client requirement document' task
#     Given Launch the url ""
     When Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     And Select newest
     And Click on apply
     Then Click 'View details' from the actions
     And Click 'Create client requirement document' marketing task

#     ---Add input brief for the marketing requirement task---------
     When Click 'Add input brief' link
     And Click 'Save' button- Marketing Requirement input brief
#     When Click 'Edit input brief' link
#     Then Click 'Save' button- Marketing Requirement input brief
     Then Click 'Accept this task'
     When Click 'Start working on this task' link
     And Click 'Add your output' link
     Then Enter Technology Implementation Requirements "Testing technology implementation requirement"
     And Enter Existing Software Integration Requirements "Testing existing software integration requirements"
     And Enter Products and Services Information Gathering "Testing product and services information gathering"
     And Enter Marketing Communication Information "Testing marketing communication information"
     And Enter Brand and Creative Guidelines "Testing brand and creative guidelines"
     And Click 'Save' button- Marketing Requirement output

     When Click 'Update' link
     Then Select 'Review'

#      Review the output
      When Click 'Review the output'
      Then Rate the output- Marketing Requirement output
      And Click 'Deliver' button

     And Click 'View Project' link

#    ----Meeting- Meeting Brief- Internal kick off meeting to understand client requirements------
   Scenario: Validate 'Internal kick off meeting to understand client requirements task'
#       Given Launch the url ""
#       When Click on username/email id "shahbaz@amuratech.com"
#       And Click on password "amura!@#"
#       Then Click on sign in button
#       When Click on clients
#       Then Select the Client
#       And Click on apply
#       When Select the onboarded project from the projects dropdown
#       And Select newest
#       And Click on apply
#       Then Click 'View details' from the actions
       When Click 'Internal kick off meeting to understand client requirements' task
       Then Click 'Schedule this meeting' link
       And Click 'Mark as conducted'
       And Click 'Submit minutes of meeting'
       When Select Attendance of the meeting
       And Upload Minutes of Meeting doc
       Then Click 'Save' button to submit minutes of meeting

       And Click 'Send for review' link

       When Click user name
       Then Click 'Sign out'

#     ----Meeting task output review-----
       When Click on username/email id "jasmine@amuratech.com"
       And Click on password "amura!@#"
       Then Click on sign in button
       When Click on clients
       Then Select the Client
       And Click on apply
       When Select the onboarded project from the projects dropdown
       And Select newest
       And Click on apply
       Then Click 'View details' from the actions
       When Click 'Internal kick off meeting to understand client requirements' task
       And Click 'Review the output'
       Then Enter 'Have you shared the minutes with the team' "Testing"
       And Enter 'Was the meeting owner well prepared' "Testing"
       And Enter Were the other participants well prepared' "Testing"
       And Enter 'Did the meeting start and end on time' "Testing"
       When Rate the output- Meeting output
       Then Click 'Complete' button

       When Click 'View Project' link

       Then Click 'Mark as requirements approved'

        When Click user name
        Then Click 'Sign out'

#     ----Marketing Plan Task- Work as comprehensive marketing plan task- -----
    Scenario: Validate 'Work as comprehensive marketing plan task'
#      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on clients
      Then Select the Client
      And Click on apply
      When Select the onboarded project from the projects dropdown
      And Select newest
      And Click on apply
      Then Click 'View details' from the actions
      When Click 'Work on comprehensive marketing plan' task
      Then Click 'Add input brief' link
      And Select Plan start date
      And Select Plan end date
      And Select SEO plan task reference
      And Select Social plan task reference
      And Select Client meeting task reference
      Then Click 'Save' button- Marketing Plan input
      When Click 'Update' link
      Then Select 'Publish'

#      When Click user name
#      Then Click 'Sign out'

#      ----Review the input brief-----
      When Click 'Review input brief'
      Then Rate the input- Marketing Plan input
      And Accept
      When Select 'Due date'
      And Select assignee for Marketing Brief
      Then Click assign button

      When Click user name
      Then Click 'Sign out'

#     ----- Add output-------
      When Click on username/email id "gautham@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click Marketing
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click on Edit
      Then Click 'Update' link
      And Click 'Start'
      When Click 'Add your output' link
#      When Click 'Edit your output' link
      Then Enter 'Growth and innovation strategy' "Testing"
      And Enter 'Social innovation strategy' "Testing"
      And Enter 'SEO strategy' "Testing"
      And Click 'Save' button- Marketing Plan output
      When Upload reference doc
      Then Click 'Edit your output' link
      When Click 'Update' link
      Then Select 'Review'

      When Click user name
      Then Click 'Sign out'

#      -------Review the output-------
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on task sidebar
      And Click Marketing
      Then Click on assigned to me
      And Select newest
      And Click on apply
      When Click review link
      Then Rate the output- Marketing Plan output
      And Click 'Send for secondary review' button

#      ---------SOR-------
      And Click 'Approve or Reject the output'
      Then Enter Comments "Testing the secondary output review"
      And Click 'Accept and Mark Delivered' button

      And Click 'View Project' link

#      -------Meeting Meeting Brief- Kick off meeting with the client task----
  Scenario: Validate 'Kick off meeting with the client' task
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on clients
#    Then Select the Client
#    And Click on apply
#    When Select the onboarded project from the projects dropdown
#    And Select newest
#    And Click on apply
#    Then Click 'View details' from the actions

#    ---Schedule the meeting, conduct the meeting and submit minutes of meeting---
    When Click 'Kick off meeting with the client' task
    Then Click 'Schedule this meeting' link
    And Click 'Mark as conducted'
    And Click 'Submit minutes of meeting'
    When Select Attendance of the meeting
    And Upload Minutes of Meeting doc
    Then Click 'Save' button to submit minutes of meeting
    And Click 'Send for review' link

    When Click user name
    Then Click 'Sign out'

#      ----Review the output-----
#    Given Launch the url ""
    When Click on username/email id "jasmine@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click on clients
    Then Select the Client
    And Click on apply
    When Select the onboarded project from the projects dropdown
    And Select newest
    And Click on apply
    Then Click 'View details' from the actions
    When Click 'Kick off meeting with the client' task
    Then Click 'Review the output'
    And Enter 'Have you shared the minutes with the team' "Testing minutes with the client"
    And Enter 'Was the meeting owner well prepared' "Testing meeting owner well prepared"
    And Enter Were the other participants well prepared' "Testing other participants well prepared"
    And Enter 'Did the meeting start and end on time' "Testing meeting start and end on time"
    When Rate the output- Meeting output
    Then Click 'Complete' button

    When Click 'View Project' link
    Then Click 'Mark as Kick-off Approved'

    And Click 'Clients' breadcrumb link

#    ------Add Hosting details for the client-----
   Scenario: Validate 'Add hosting details' for the client
#     Given Launch the url ""
#     When Click on username/email id "jasmine@amuratech.com"
#     And Click on password "amura!@#"
#     Then Click on sign in button
#     When Click on clients
#     Then Select the Client
#     And Click on apply
    When Click 'Add hosting details' link
    Then Enter URL or IP address "www.google.com"
    And Select the Hosting type
    And Enter the Username "testing"
    And Enter the Password "testing"
    And Click 'Save' button- Client hosting details

    And Click 'Clients' breadcrumb link

    Scenario: Validate 'Add brand guidelines' for the client
#      Given Launch the url ""
#      When Click on username/email id "jasmine@amuratech.com"
#      And Click on password "amura!@#"
#      Then Click on sign in button
#      When Click on clients
#      Then Select the Client
#      And Click on apply
      When Select 'Brand guideline' link
      Then Click 'Save' button- Brand guideline

      And Click 'Clients' breadcrumb link

  Scenario: Validate 'Add target group' for the client
#    Given Launch the url ""
#    When Click on username/email id "jasmine@amuratech.com"
#    And Click on password "amura!@#"
#    Then Click on sign in button
#    When Click on clients
#    Then Select the Client
#    And Click on apply
    When Select 'Target group' link
    Then Enter Minimum age- Client Target Group "22"
    And Enter Maximum age- Client Target Group "80"
    And Select Gender- Target Group
    And Enter Minimum household income "10000"
    And Enter Geos "Testing"
    And Enter Micro Geos "Testing"
    And Click 'Save' button- Target Group

    And Click 'Clients' breadcrumb link

   Scenario: Validate 'Add a product'
#     Given Launch the url ""
#     When Click on username/email id "jasmine@amuratech.com"
#     And Click on password "amura!@#"
#     Then Click on sign in button
#     When Click on clients
#     Then Select the Client
#     And Click on apply
     When Select 'Add a product' link
     Then Select a Developer from the knowledge base
     And Select a Project from the knowledge base
     And Click 'Save' button- Client product

     And Click 'Clients' breadcrumb link

    Scenario: Validate 'Mark as ready to go live'
#      Given Launch the url ""
#      When Click on username/email id "jasmine@amuratech.com"
#      And Click on password "amura!@#"
#      Then Click on sign in button
#      When Click on clients
#      Then Select the Client
#      And Click on apply
     When Select the onboarded project from the projects dropdown
     Then Select newest
     And Click on apply
     When Click 'View details' from the actions
     Then Click 'Mark as ready to go live'
     And Click 'Mark as live'

     And Click 'Clients' breadcrumb link

      When Click user name
      Then Click 'Sign out'

#      -----Client Feedback task-
   Scenario: Validate 'Client feedback' for the client
#     Given Launch the url ""
     When Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     Then Select newest
     And Click on apply
     When Click 'View details' from the actions
     And Click 'Submit Client Feedback' task
     Then Click 'Add input brief' link
     And Enter Link to the survey form on Google forms "www.google.com"
     And Enter Link to the survey results on Google drive "www.google.com"
     And Select When is the survey scheduled
     And Click 'Save' button- Feedback input
     When Click 'Update' link
     Then Select 'Publish'
     When Click 'Review input brief'
     Then Rate the input brief- Delivery Feedback
     And Accept

     When Select assignee for Delivery
     And Click assign button
     Then Click user name
     And Click 'Sign out'

#     -----Add output--------
     Given Launch the url ""
     When Click on username/email id "anupriya@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     Then Select newest
     And Click on apply
     When Click 'View details' from the actions
     And Click 'Submit Client Feedback' task
     Then Click 'Start working on this task' link
     And Click 'Add your output' link
     Then Enter Total clients covered in the survey "29"
     And Enter Total clients who respond to this survey "29"
     And Mention specific concerns or comments "Testing comments"
     And Average rating across all clients
     And Click 'Save' button- Delivery Feedback output
     When Upload reference document- Delivery Feedback
     Then Click 'Edit your output' link
     When Click 'Update' link
     Then Select 'Review'

     When Click user name
     Then Click 'Sign out'

#     -----Review the output-------
     When Click on username/email id "shahbaz@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     When Click on clients
     Then Select the Client
     And Click on apply
     When Select the onboarded project from the projects dropdown
     Then Select newest
     And Click on apply
     When Click 'View details' from the actions
     Then Click 'Submit Client Feedback' task
     And Click 'Review the output'
     And Rate the output- Delivery Feedback output
     And Click 'Send for secondary review' button

     When Click 'Approve or Reject the output'
     Then Enter Comments "Testing"
     And Click 'Accept and Mark Delivered' button

     And Click 'View Project' link
















