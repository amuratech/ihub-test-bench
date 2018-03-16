Feature: Project export feature

  Scenario: Validate 'Add export format'
    Given Launch the url ""
    When Click on username/email id "ketan@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats
    Then Click Product exports
    And Click 'Add a export format'
    Then Enter Name "Testing the task exports"
    And Click 'Save' button- Export formats

    When Click user name
    Then Click 'Sign out'

  Scenario: Validate 'Create export'
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Product exports- User
    And Click 'Generate new report'
    And Click 'Add new export'
    When Select Date range field- Product Exports
    And Select Date range field value
#    Then Select Stage
#    Then Select Client
#    Then Select Creator
    When Click 'Save' button- Product Export
    And Click 'Download' link

  Scenario: Validate 'Create export' using Stage as filter
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Product exports- User
    And Click 'Generate new report'
    And Click 'Add new export'
    When Select Date range field- Product Exports
    And Select Date range field value
    Then Select Stage
    When Click 'Save' button- Product Export
    And Click 'Download' link

  Scenario: Validate 'Create export' using Client as filter
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Product exports- User
    And Click 'Generate new report'
    And Click 'Add new export'
    When Select Date range field- Product Exports
    And Select Date range field value
    Then Select Client
    When Click 'Save' button- Product Export
    And Click 'Download' link

  Scenario: Validate 'Create export' using Creator as filter
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Product exports- User
    And Click 'Generate new report'
    And Click 'Add new export'
    When Select Date range field- Product Exports
    And Select Date range field value
    Then Select Creator
    When Click 'Save' button- Product Export
    And Click 'Download' link

  Scenario: Validate 'Create export' using all the filters
    Given Launch the url ""
    When Click on username/email id "shahbaz@amuratech.com"
    And Click on password "amura!@#"
    Then Click on sign in button
    When Click Export formats- User
    Then Click Product exports- User
    And Click 'Generate new report'
    And Click 'Add new export'
    When Select Date range field- Product Exports
    And Select Date range field value
    And Select Stage
    And Select Client
    And Select Creator
    When Click 'Save' button- Product Export
    And Click 'Download' link