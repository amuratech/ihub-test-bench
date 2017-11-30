Feature: Design Ad Flow
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name "Gera"
    And Select the department
    And Click on create task
    Then Enter task name
    And Enter task type
    And Purpose of task
    And Enter the time
    Then Save and add brief

  Scenario: Validate 'Add Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click design brief sidebar
    Then Enter the project name
    And Enter ad format
    And Upload ad copy doc
    And Enter trying ad
    And Select tg ad
    Then Click publish button

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select name with sufficient info
    And Description with insufficient info
    Then Due date with sufficient
    And Purposes with sufficient info
    And Time slot
    And Ref links
    And Ad radio button
    And Ad copy
    And Target radio button
    And Product radio button
    And Ref images
    Then Give rating
    And Click ad accept button
    Then Select assignee
    And Select task start date
    Then Click assign button
    Then Clik on user
    Then Click sign out

  Scenario: Validate 'Add Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "akshay.d@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click design output
#    And Click on the save button
#    Then Click design output
    And Click upload files
    Then Click back to task
    Then Select the status
    And Click save for Review

  Scenario: Validate 'Review the Output'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "vishwanath.k@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on design
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Select radio thought
    And Select radio doc
    Then Enter reason for incorrect
    And Enter about brand guidelines
    And Enter about correct fonts
    And Enter about creative
    And Enter about thought process
    And Enter if delayed
    And Rate the output
    Then Click deliver

