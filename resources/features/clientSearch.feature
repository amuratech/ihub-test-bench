Feature: Validate client search
  Finding/searching clients using filters, on the basis of different searching criteria

   Scenario: Validate the feature on the basis of Client Name
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on clients
      Then Search the client with name
      And Click on apply
      Then Show the name of the client

    Scenario: Validate the feature on the basis of Business Vertical
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on clients
      And Search the client with business vertical as Real Estate
      And Click on apply
      Then It should show all the clients which are in Real Estate

    Scenario: Validate the feature on the basis of Status
      Given Launch the url ""
      When Click on username/email id "shahbaz@amuratech.com"
      And Click on password "amura!@#"
      Then Click on sign in button
      When Click on clients
      And Search the client with status as Active
      And Click on apply
      Then It should show all the active clients
