Feature: Checking pre selected values/task status under all the stage
  User should be able to check tasks under different stages/status, from the Task Overview section
  For all the stages, respective field should be auto filled with the correct value/stage/tags

    Scenario: Validate Priority task list under the pagination
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Priority
      Then It should display the number of tasks
      And It should display the pre selected tag

    Scenario: Validate Brief Change task list under the pagination
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Brief Change
      Then It should display the number of tasks
      And Check the status

    Scenario: Validate Ongoing task list under the pagination
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Ongoing
      Then It should display the number of tasks
      And Check the status

    Scenario: Validate Unassigned task list under the pagination
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Unassigned
      Then It should display the number of tasks
      And Check the status

    Scenario: Validate Paused task list under the pagination
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Paused Tasks
      Then It should display the number of tasks
      And Check the status

    Scenario: Validate Due today task list under the paginationx
      Given Launch the url ""
      Then Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When I will click on Due Today
      Then It should display the number of tasks
      And Check the date