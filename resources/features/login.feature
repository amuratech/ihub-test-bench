Feature: Login
  Scenario: Valid login
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on username/email id "piyush@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button

  Scenario: Login with Valid Email id and Invalid Password
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on username/email id "piyush@amuratech.com"
    Then Click on password "amura12"
    Then Click on sign in button

  Scenario: Login with Invalid Email id and Valid Password
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on username/email id "something@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button

  Scenario: Login with Invalid Email id and Invalid Password
    Given Launch the url "http://192.168.0.222:4040/"
    Then Click on username/email id "something@amuratech.com"
    Then Click on password "amura12"
    Then Click on sign in button

  Scenario: Login with account manager
    Given Launch the url ""
    Then Click on username/email id "shahbaz@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Check for SSL
    Then Message displayed login successfully
    And Click on dashboard
    And Show the task overview counts- Design
#    Then Take the screenshot

  Scenario: Login with delivery team
    Given Launch the url ""
    Then Click on username/email id "anupriya@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click Unassigned
    And Check the status

#   Sign in with google- Error is there

      #  ------------ Departments and Types---------------
#  Design- Done--------
  #  Design- Website- Done
  #  Design- Infographics- Done
  #  Design- Print Media- Done
  #  Design- Ad- Done
  #  Design- Emailer- Done

#    Web Development- Done--------
  #  Web Development- Website- Done
  #  Web Development- SEO- Done
  #  Web Development- Mailer- Done
  #  Web Development- Maintenance Work- Done
  #  Web Development- Customized Work- Done

#  SEO
  #  SEO- Plan- Not Done as there are some issues
  #  SEO- Audit- Done


#Campaign
  #  Campaign Plan- Pending from development
  #  Campaign Execution- Pending from development
    #   Copy Idea- Issues from development
    #   Website Development - Full flow done
    #   Design Ad- Full flow done
    #   Media Plan- Full flow done
    #   Content Ad-

#  Fields kept generic-
  #  Add/Create the Task
  # Start working on this task button
  # Change the start date field
  #  Update Task button
  #  Change the status

