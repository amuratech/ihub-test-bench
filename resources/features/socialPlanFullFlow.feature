Feature: Social- Plan- Full Flow
#  There is an issue in Add Output
  Scenario: Validate 'Add/Create a Task'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "ketan@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click 'Quick add' link
    And Select 'Task'
    And Enter the client name ""
    And Select the department- social
    And Click on create task
    Then Enter task name "Testing Social Plan"
    And Enter task type- Social Plan
    And Enter Brief "Testing social plan brief"
    And Enter Due date
    And Select time slot
    Then Click 'save and add brief' button

  Scenario: Validate 'Add Input Brief'
#    Given Launch the url "http://localhost:3000/"
#    Then Click on username/email id "ketan@amuratech.com"
#    Then Click on password "amura123"
#    Then Click on sign in button
#    Then Click on task sidebar- Admin
#    And Click on social
#    And Click on assigned to me
#    Then Select newest
#    And Click on apply
#    Then Click on Edit
    Then Click 'Add input brief' link
    Then Click 'Click to add' link
    And Select Category
    And Enter Theme
    And Enter Hashtags
    Then Click 'Click to add' link
    And Select second Category
    And Enter second Theme
    And Enter second Hashtags
    Then Click 'Click to add' link
    And Select third Category
    And Enter third Theme
    And Enter third Hashtags
#    And Click reference link accordion
#    And Enter 'platform to consider'
#    And Enter requirements- social audit
#    And Enter specific objectives
    Then Click save button- Social Plan Input
    Then Click 'Update' link
    And Select 'Publish'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the Input Brief'
    Given Launch the url "http://localhost:3000/"
    Then Click on username/email id "rushikesh@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Rate the input- Social Plan
    And Accept
    Then Select assignee
    And Select 'Start date'
    Then Click assign button
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Add Output'
    Given Launch the url ""
    Then Click on username/email id "pranoti@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click on Edit
#    Then Click 'Update' link
#    And Click 'Start'
    Then Click 'Add your output' link
    Then Enter Thought process "Testing"
    And Enter current sentiment analysis "Testing"
    And Enter ORM issues
    And Enter strategy to drive better sentiment "Testing "
    And Enter Topic "Testing"
    And Select Theme
    And Select Image format- Social Plan
    And Enter Hashtags- Social Plan Output
    And Select Structure
    And Select Tones of voice
    And Enter Goal "Testing"
    And Upload Reference image
    And Click 'Save' button- Social Plan Output
    Then Click 'Update' link
    And Select 'Review'
    Then Click user name
    And Click 'Sign out'

  Scenario: Validate 'Review the output'
    Given Launch the url ""
    Then Click on username/email id "tabassum@amuratech.com"
    Then Click on password "amura123"
    Then Click on sign in button
    Then Click on task sidebar
    And Click on social
    And Click on assigned to me
    Then Select newest
    And Click on apply
    Then Click review link
    Then Enter 'Is this in line with the client’s business objective' "Yes"
    And Enter 'Does it cater to all kinds of audiences / TGs for the client' "Testing"
    And Enter 'Is there repetition from the earlier plan' "Yes"
    And Enter 'Are the hashtags used in line with suggestions' "Yes"
    And Enter 'Are the hashtags used trending' "Yes"
    Then Rate the output- Social Plan
    And Click deliver button
#    And Click rework- social audit










