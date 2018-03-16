Feature: Client export feature
    This feature is to export the client data
    Here, user can export client on the basis of filters

    Scenario: Validate 'Add a export format for client export'
        Given Launch the url ""
        When Click on username/email id "ketan@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats
        Then Click Client exports
        When Click 'Add a export format'
        Then Enter Name "Testing the client export"
        And Click 'Save' button- Export formats

        When Click user name
        Then Click 'Sign out'

  Scenario: Validate 'Create export' with Category as filter
        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats- User
        Then Click Client exports
        And Click 'Generate new report'
        And Click 'Add new export'
#        When Select Date range field- Client Exports
        And Select Date range field value
        Then Select Category of the client
        When Click 'Save' button- Client Exports
        And Click 'Download' link

    Scenario: Validate 'Create export' with Business Vertical as filter
        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats- User
        Then Click Client exports
        And Click 'Generate new report'
        And Click 'Add new export'
#        When Select Date range field- Client Exports
        And Select Date range field value
        Then Select Business vertical
        When Click 'Save' button- Client Exports
        And Click 'Download' link

       Scenario: Validate 'Create export' with Manager as filter
        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats- User
        Then Click Client exports
        And Click 'Generate new report'
        And Click 'Add new export'
        And Select Date range field value
        And Select Manager
        When Click 'Save' button- Client Exports
        And Click 'Download' link

  Scenario: Validate 'Create export' with Executive as filter
        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats- User
        Then Click Client exports
        And Click 'Generate new report'
        And Click 'Add new export'
        And Select Date range field value
        And Select Executive
        When Click 'Save' button- Client Exports
        And Click 'Download' link

     Scenario: Validate 'Create export' with all the filters
        Given Launch the url ""
        When Click on username/email id "shahbaz@amuratech.com"
        And Click on password "amura!@#"
        Then Click on sign in button
        When Click Export formats- User
        Then Click Client exports
        And Click 'Generate new report'
        And Click 'Add new export'
#        When Select Date range field- Client Exports
        And Select Date range field value
        Then Select Category of the client
        And Select Business vertical
        And Select Manager
        And Select Executive
        When Click 'Save' button- Client Exports
        And Click 'Download' link