Feature: Validate 'Task Referencing'
  Scenario: Validate 'Content Sitemap' task referencing
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Sitemap"
    And Select task type- sitemap
    Then Select task sub-type- single page
    And Select purpose
    And Select time slot
    Then Click 'save and add brief' button
    Then Enter name "Testing task reference"- content sitemap
    And Enter content brief "Testing"- content sitemap
    And Enter 'campaign plan' reference task
    And Enter USPs "Testing 200"
    Then Click USP accordion
    Then Enter mininum age "27"
    And Enter maximum age "66"
    And Select gender- male
    And Enter minimum household income "1000"
    And Enter geos ""
    And Enter micro geos ""
    And Enter 'who are you trying to reach' "Testing"
    And Select 'what do you want your tg to do'- content
    Then Click 'Save' button- content sitemap



