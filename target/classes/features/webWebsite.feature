Feature: Web Development Website Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name "Runwal"
    And Select the department
    And Click on create task
    Then Enter web task name
    And Enter web task type
    And Purpose of task web
    And Enter the time web
    Then Save and add brief web

  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on development brief link
    And Enter name
    And Enter brief
    And Select type of website
    And Select CRM
    And Select CMS
    And Select func req
    And Upload sitemap doc
    And Upload content doc- webdev
    Then Select hosting
    Then Click script accordion
    And Select script type
    And Enter script
    Then Click save publish button

  Scenario: Validate 'Review the Input Brief'
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
    Then Select webdev name
    And Select webdev description
    And Select webdev due date
    And Select webdev purposes
    And Select webdev time slot
    And Select webdev radio name
    And Select webdev radion desc
    And Select webdev website type
    And Select webdev hosting
    And Select webdev CMS
    And Select webdev CRM
    And Select webdev Func
    And Select webdev sitemap
    And Select webdev animation
    And Select webdev form
    And Select webdev content
    And Select webdev fonts
    And Select webdev cms req
    And Select webdev design
    And Select webdev script
    And Select webdev desktop slices
    And Select webdev mobile slices
    And Select webdev ftp detail
    And Select webdev server detail
    And Rate webdev brief
    And Click webdev accept button
    Then Select assignee
    And Select task start date
    Then Click assign button

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click start working button- webdev
    Then Click add output
    And Enter web thought process
    And Enter QA software link
    And Enter staging link
    And Upload approval doc
    Then Click submit
    Then Change the status
    And Click update task button

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "sanjay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select webdev thought process
    And Select staging link
    And Select QA link
    And Select staging link
    And Select approval doc
    Then Rate the adherence to design
    And Rate the usage of libraries
    And Rate the adherence to coding
    Then Enter copy review
    And Enter design review
    And Enter desktop page speed score
    And Enter mobile page speed score
    Then Rate the website output
    And Click deliver button
    #    Then Click rework


    #    If Rework is selected, then need to follow below steps
  Scenario: Validate 'Review the Output', and again assign it to the member
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "sanjay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select status
    And Click update


    #    If Rework is there, then assignee has to work on the same task again
    #    For assigning it to the member, assignor/TL has to update the status to 'Start'
    #    Then need to follow below steps
  Scenario: Validate 'Rework'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "pankit@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select status
    And Click update task button


  Scenario: Validate 'Review Output of Rework'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "sanjay@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    Then Click on web development
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select webdev thought process
    And Select staging link
    And Select QA link
    And Select staging link
    And Select approval doc
    Then Rate the adherence to design
    And Rate the usage of libraries
    And Rate the adherence to coding
    Then Enter copy review
    And Enter design review
    And Enter desktop page speed score
    And Enter mobile page speed score
    Then Rate the website output
    And Click deliver button

















