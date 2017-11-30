Feature: Validate 'Task Referencing'
  Scenario: Validate 'Content Blogpost' task referencing
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click add a task
    And Enter the client name ""
    And Select the department- content
    And Click on create task
    Then Enter task name "Testing Content Sitemap"
    And Select task type- blogpost
    And Select purpose
    And Select time slot
    Then Click 'save and add brief' button
    Then Enter 'campaign plan' reference task- content blogpost
    And Enter topic "Testing task reference"
    And Select tones of voice- content blog post
    And Enter content brief "Testing"- content blog post
    And Enter client project- content blog post
    And Enter USPs "Testing"- content blog post
    And Enter accordion- content blog post
    And Enter 'who are you trying to reach' "Testing"
    And Select 'what do you want your tg to do'- content
    Then Click 'Save' button- content blog post


