$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignmentFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Project- Full Flow",
  "description": "",
  "id": "project--full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 652747,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "There are few tasks which must be delivered/completed, before taking any campaign live. So,",
  "description": "we need to check all the steps involved in the project/assignment",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Validate \u0027Add new Project\u0027",
  "description": "",
  "id": "project--full-flow;validate-\u0027add-new-project\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@assignment"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the url \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Click \u0027Quick add\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Select \u0027Project\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select \u0027Client\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Click \u0027Add Project\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter Project title \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select Project type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select Billing method",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Select Due date of project",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Enter Estimated budget \"10000\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select website design",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Select campaign start date- assignment",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select campaign end date- assignment",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter Purpose \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#       And Check \u0027brief session required\u0027 box"
    }
  ],
  "line": 25,
  "name": "Click \u0027save\u0027 button- assignment",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click \u0027Initiate campaign\u0027",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:3000/",
      "offset": 16
    }
  ],
  "location": "LoginSteps.launchTheUrl(String)"
});
formatter.result({
  "duration": 55842917977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shahbaz@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 4813888624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amura!@#",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "duration": 1423293451,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 20430143288,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "duration": 14920122221,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectProject()"
});
formatter.result({
  "duration": 2373625407,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectClient()"
});
formatter.result({
  "duration": 7878665159,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickAddProject()"
});
formatter.result({
  "duration": 4789186779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 21
    }
  ],
  "location": "AddNewProjectSteps.enterProjectTitle(String)"
});
formatter.result({
  "duration": 2423685237,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectProjectType()"
});
formatter.result({
  "duration": 2725684089,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectBillingMethod()"
});
formatter.result({
  "duration": 5749402315,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectDueDateOfProject()"
});
formatter.result({
  "duration": 837358648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 24
    }
  ],
  "location": "AddNewProjectSteps.enterEstimatedBudget(String)"
});
formatter.result({
  "duration": 5400426534,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectWebsiteDesign()"
});
formatter.result({
  "duration": 2380427889,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectCampaignStartDateAssignment()"
});
formatter.result({
  "duration": 369290656,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectCampaignEndDateAssignment()"
});
formatter.result({
  "duration": 445233140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 15
    }
  ],
  "location": "AddNewProjectSteps.enterPurpose(String)"
});
formatter.result({
  "duration": 1297022222,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickSaveButtonAssignment()"
});
formatter.result({
  "duration": 4405478629,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickInitiateCampaign()"
});
formatter.result({
  "duration": 10060091075,
  "status": "passed"
});
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/campaign/assignments/5a33961e8ec6291942aece40");
formatter.after({
  "duration": 17866569046,
  "status": "passed"
});
formatter.before({
  "duration": 220011,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "There are few tasks which must be delivered/completed, before taking any campaign live. So,",
  "description": "we need to check all the steps involved in the project/assignment",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "Validate \u0027Submit initial campaign brief\u0027 task",
  "description": "",
  "id": "project--full-flow;validate-\u0027submit-initial-campaign-brief\u0027-task",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@assignment"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "Click Submit initial campaign brief task",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Enter Brief provided by client \"Testing brief provided by the client\"",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click \u0027Save\u0027 button- Marketing Input",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Select \u0027Publish\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on username/email id \"jasmine@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Click Marketing",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Rate the input brief- Marketing Brief",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Click on username/email id \"gautham@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Click Marketing",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Enter Offers",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Enter Communication guidelines",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select a competitor",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Select a project",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Click \u0027Save\u0027 button- Marketing Output",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickSubmitInitialCampaignBriefTask()"
});
formatter.result({
  "duration": 9088916656,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "duration": 9168082163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing brief provided by the client",
      "offset": 32
    }
  ],
  "location": "MarketingBriefInputSteps.enterBriefProvidedByClient(String)"
});
formatter.result({
  "duration": 2469029644,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickSaveButtonMarketingInput()"
});
formatter.result({
  "duration": 6437567085,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectPublish()"
});
formatter.result({
  "duration": 7390943128,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14229511473,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 4225964182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jasmine@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 1357201707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amura!@#",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "duration": 1203685399,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4802675204,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2184699704,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickMarketing()"
});
formatter.result({
  "duration": 4902577307,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1115416705,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2372837639,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 4536050584,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 6268018418,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.rateTheInputBriefMarketingBrief()"
});
formatter.result({
  "duration": 513457618,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"new_client_marketing_review\"]/div[8]/div/div/a[4]\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 493 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.HsNxbL}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: b48f188021f8e8b93bde5e0b8759335f\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"new_client_marketing_review\"]/div[8]/div/div/a[4]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:493)\n\tat org.selenium.iHub.pages.MarketingBriefInputPage.rateTheInputBriefMarketingBrief(MarketingBriefInputPage.java:32)\n\tat org.selenium.iHub.steps.MarketingBriefInputSteps.rateTheInputBriefMarketingBrief(MarketingBriefInputSteps.java:36)\n\tat ✽.Then Rate the input brief- Marketing Brief(assignmentFlow.feature:47)\n",
  "status": "failed"
});
formatter.match({
  "location": "DesignReviewSteps.accept()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssignTaskSteps.selectAssignee()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssignTaskSteps.selectStartDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AssignTaskSteps.clickAssignButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "gautham@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "amura!@#",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickMarketing()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnEdit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickStart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonOutputFieldsSteps.clickAddYourOutputLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.enterOffers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.enterCommunicationGuidelines()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.selectACompetitor()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.selectAProject()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.clickSaveButtonMarketingOutput()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ChangeStatusSteps.selectReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/marketing/tasks/5a3396268ec6291942aece47/input/reviews/new");
formatter.after({
  "duration": 5707606422,
  "status": "passed"
});
});