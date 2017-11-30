Feature: Forgot Password
  Scenario: Validate the forgot password
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on 'click here'
    Then Enter email id "piyush@amuratech.com"
    And Click submit button
    Then Didn't receive confirmation
    And Enter email id "piyush@amuratech.com"
    And Click resend button