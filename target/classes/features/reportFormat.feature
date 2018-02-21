Feature: Report format
  This feature is for creating a report format and creating a report on that format

  Scenario: Validate 'Create a format'
    Given Launch the url ""
    When Click on username/email id "ketan@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    And Click Reports
    When Click 'Add a report format'
    Then Enter Name of the report format "Testing the report format"
    When Select Metric name
    Then Select Calculate by
    And Select Group by
    And Click 'Save' button- Report Format

#   Scenario: Validate 'Add new report'
     Given Launch the url ""
     When Click on username/email id "ketan@amuratech.com"
     And Click on password "amura!@#"
     Then Click on sign in button
     And Click Reports
#     And Select 'Generate new report'
     And Select 'View all reports'
#     When Click 'Create report'
#     When Select Date range field
#     And Select Date range field value
#     And Select Department
#     Then Click 'Save' button- Create report
     And Select 'Show'

    Scenario: Validate 'Build report'
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click Reports- All users
      Then Select 'Build report'
      When Select Date range field
      And Select Date range field value
#      And Select Department
      Then Click 'Generate Report' button
      And Show the report

      













