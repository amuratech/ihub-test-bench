Feature:  Export format feature
  This feature is to export the data which is task specific
  Here, user can export task as per the filters present

  Scenario: Validate 'Add a export format'
    Given Launch the url ""
    When Click on username/email id "ketan@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats
    Then Click Task exports
    And Click 'Add a export format'
    Then Enter Name "Testing the export format by adding new format"
    And Click 'Save' button- Export formats

    When Click user name
    Then Click 'Sign out'

    Scenario: Validate 'Create task export' using Department filter
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click Export formats- User
      Then Click Task exports
      And Click 'Generate new report'
      And Click 'Add new export'
      Then Select Date range field- Export
      And Select Date range field value
      When Select the Department- Export
      Then Click 'Save' button- Export
      And Click 'Download' link

  Scenario: Validate 'Create task export' using Status filter
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click Export formats- User
      Then Click Task exports
      And Click 'Generate new report'
      And Click 'Add new export'
      Then Select Date range field- Export
      And Select Date range field value
      When Select the Status- Export
      Then Click 'Save' button- Export
      And Click 'Download' link

  Scenario: Validate 'Create task export' using Creator filter
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click Export formats- User
      Then Click Task exports
      And Click 'Generate new report'
      And Click 'Add new export'
      Then Select Date range field- Export
      And Select Date range field value
      And Select the Creator
      Then Click 'Save' button- Export
      And Click 'Download' link

  Scenario: Validate 'Create task export' using Assignment filter
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Task exports
    And Click 'Generate new report'
    And Click 'Add new export'
    Then Select Date range field- Export
    And Select Date range field value
    And Select the Assignment
    Then Click 'Save' button- Export
    And Click 'Download' link

  Scenario: Validate 'Create export' with Rework as the filter
#       Given Launch the url ""
#       When Click on username/email id "shahbaz@amuratech.com"
#       And Click on password "amura!@#"
#       Then Click on sign in button
       When Click Export formats- User
       And Click 'Generate new report'
       And Click 'Add new export'
       Then Select Date range field- Export
       And Select Date range field value
       When Select the Rework
       Then Click 'Save' button- Export
       And Click 'Download' link

  Scenario: Validate 'Create task export' using all the filters
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click Export formats- User
      Then Click Task exports
      And Click 'Generate new report'
      And Click 'Add new export'
      Then Select Date range field- Export
      And Select Date range field value
      When Select the Department- Export
      And Select the Status- Export
      And Select the Creator
      And Select the Assignment
      Then Click 'Save' button- Export
      And Click 'Download' link