Feature: Reason for cancelling the task
 For cancelling any task, user need to put reason

  Scenario: Validate 'If user cancel the task and enters the reason'
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing design ad"
    And Enter task type- design ad
    And Enter Brief "Testing design emailer brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button
    Then Click 'Edit task'
    And Click 'Cancel'
    Then Enter the Task cancellation reason "Cancelling the task for testing"
    And Click 'Cancel'

  Scenario: Validate when user try to cancel the task without mentioning the reason
# Negative scenario for the same feature- User should not be able to cancel the task if the reason field
#    is blank
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura!@#"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- Design
    And Click on create task
    Then Enter task name "Testing design ad"
    And Enter task type- design ad
    And Enter Brief "Testing design emailer brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button
    Then Click 'Edit task'
    And Click 'Cancel'
    Then Do not enter reason for cancelling the task
    And Click 'Cancel'