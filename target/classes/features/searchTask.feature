Feature: Task search box for finding any task
  There is a feature of finding the task from the list
  We can find it by using # as prefix

  @search
  Scenario: Validate the task search feature with using # as prefix
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    And Click on sign in button
    Then Click on dashboard
    When Search the task with using # as prefix ""
    Then The task should be found


#  Scenario: Validate the task search feature without using # as prefix
#    Given Launch the url ""
#    When Click on username/email id "shahbaz@amuratech.com"
#    And Click on password "amura!@#"
#    And Click on sign in button
#    Then Click on dashboard
#    When Search the task without using # as prefix ""
#    Then The task should not be found



  