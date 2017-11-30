$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contentSocialPostFullFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Content Social Post- Full Flow",
  "description": "",
  "id": "content-social-post--full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 575456,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate \u0027Add/Create a Task\u0027",
  "description": "",
  "id": "content-social-post--full-flow;validate-\u0027add/create-a-task\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Launch the url \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on password \"amura123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Click \u0027Quick add\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Select \u0027Task\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the client name \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Select the department- content",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on create task",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter task name \"Testing Content Social Post\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select task type- Content Social Post",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select task sub-type- Content Social Post JPEG Post",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Enter Brief \"Testing content social post brief\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Enter Due date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select time slot",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click \u0027save and add brief\u0027 button",
  "keyword": "Then "
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
  "duration": 35339361098,
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
  "duration": 5653970592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amura123",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "duration": 1365964091,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 21290566445,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "duration": 1246672839,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTask()"
});
formatter.result({
  "duration": 1168313858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 23
    }
  ],
  "location": "CreateTaskSteps.enterTheClientName(String)"
});
formatter.result({
  "duration": 3935733332,
  "status": "passed"
});
formatter.match({
  "location": "DepartmentTypesSteps.selectTheDepartmentContent()"
});
formatter.result({
  "duration": 3325509158,
  "status": "passed"
});
formatter.match({
  "location": "CreateTaskSteps.clickOnCreateTask()"
});
formatter.result({
  "duration": 2136930809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Content Social Post",
      "offset": 17
    }
  ],
  "location": "NewTaskSteps.enterTaskName(String)"
});
formatter.result({
  "duration": 2474592557,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskTypeContentSocialPost()"
});
formatter.result({
  "duration": 3233481963,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskSubTypeContentSocialPostJPEGPost()"
});
formatter.result({
  "duration": 2264311901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing content social post brief",
      "offset": 13
    }
  ],
  "location": "NewTaskSteps.enterBrief(String)"
});
formatter.result({
  "duration": 1499649458,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.enterDueDate()"
});
formatter.result({
  "duration": 591136669,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTimeSlot()"
});
formatter.result({
  "duration": 2297771918,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.saveAndAddBriefButton()"
});
formatter.result({
  "duration": 3530723587,
  "status": "passed"
});
formatter.after({
  "duration": 430855,
  "status": "passed"
});
formatter.before({
  "duration": 152246,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Validate \u0027Add Input Brief\u0027",
  "description": "",
  "id": "content-social-post--full-flow;validate-\u0027add-input-brief\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 24,
      "value": "#    Given Launch the url \"http://localhost:3000/\""
    },
    {
      "line": 25,
      "value": "#    Then Click on username/email id \"shahbaz@amuratech.com\""
    },
    {
      "line": 26,
      "value": "#    Then Click on password \"amura123\""
    },
    {
      "line": 27,
      "value": "#    Then Click on sign in button"
    },
    {
      "line": 28,
      "value": "#    Then Click on task sidebar"
    },
    {
      "line": 29,
      "value": "#    And Click content"
    },
    {
      "line": 30,
      "value": "#    Then Click on assigned to me"
    },
    {
      "line": 31,
      "value": "#    Then Select newest"
    },
    {
      "line": 32,
      "value": "#    And Click on apply"
    },
    {
      "line": 33,
      "value": "#    Then Click on Edit"
    },
    {
      "line": 34,
      "value": "#    And Click \u0027Add input brief\u0027 link"
    }
  ],
  "line": 35,
  "name": "Select Theme- Content Socialpost",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Select Tonality",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Upload social post image",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Select Tags",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Click \u0027Save\u0027 button- Content Social Post",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "ContentSocialPostInputSteps.selectThemeContentSocialpost()"
});
formatter.result({
  "duration": 2288410550,
  "status": "passed"
});
formatter.match({
  "location": "ContentSocialPostInputSteps.selectTonality()"
});
formatter.result({
  "duration": 2238794395,
  "status": "passed"
});
formatter.match({
  "location": "ContentSocialPostInputSteps.uploadSocialPostImage()"
});
formatter.result({
  "duration": 2228296180,
  "status": "passed"
});
formatter.match({
  "location": "ContentSocialPostInputSteps.selectTags()"
});
formatter.result({
  "duration": 8669080880,
  "status": "passed"
});
formatter.match({
  "location": "ContentSocialPostInputSteps.clickSaveButtonContentSocialPost()"
});
formatter.result({
  "duration": 5268047047,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "duration": 1155022498,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectPublish()"
});
formatter.result({
  "duration": 15300563150,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 1130555113,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 2743726200,
  "status": "passed"
});
formatter.after({
  "duration": 109543,
  "status": "passed"
});
formatter.before({
  "duration": 285971,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Validate \u0027Review the input\u0027",
  "description": "",
  "id": "content-social-post--full-flow;validate-\u0027review-the-input\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "Launch the url \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Click on password \"amura123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Rate the input- content social post",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Click \u0027Sign out\u0027",
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
  "duration": 916495839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "meenakshi@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 1334884872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amura123",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "duration": 1135459748,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 14330908097,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 1145898677,
  "status": "passed"
});
formatter.match({
  "location": "ContentBlogInputSteps.clickContent()"
});
formatter.result({
  "duration": 2228683834,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1294467517,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2208173489,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 2184803851,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 5081043109,
  "status": "passed"
});
formatter.match({
  "location": "ContentSocialPostInputSteps.rateTheInputContentSocialPost()"
});
formatter.result({
  "duration": 1151695608,
  "status": "passed"
});
formatter.match({
  "location": "DesignReviewSteps.accept()"
});
formatter.result({
  "duration": 1156293389,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.selectAssignee()"
});
formatter.result({
  "duration": 3290665455,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.selectStartDate()"
});
formatter.result({
  "duration": 405772920,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.clickAssignButton()"
});
formatter.result({
  "duration": 14170468511,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 1126429575,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 2756506411,
  "status": "passed"
});
formatter.after({
  "duration": 86589,
  "status": "passed"
});
formatter.before({
  "duration": 165017,
  "status": "passed"
});
formatter.scenario({
  "line": 66,
  "name": "Validate \u0027Add output\u0027",
  "description": "",
  "id": "content-social-post--full-flow;validate-\u0027add-output\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "Launch the url \"http://localhost:3000/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Click on username/email id \"abhay@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "Click on password \"amura123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Click on Edit",
  "keyword": "Then "
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
  "duration": 837130134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhay@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 1339849803,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amura123",
      "offset": 19
    }
  ],
  "location": "LoginSteps.clickOnPassword(String)"
});
formatter.result({
  "duration": 1138770901,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 14800146073,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 1130628628,
  "status": "passed"
});
formatter.match({
  "location": "ContentBlogInputSteps.clickContent()"
});
formatter.result({
  "duration": 1362303263,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 134029038,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/ul/li[1]/a\"}\n  (Session info: chrome\u003d62.0.3202.75)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 130 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.pGE6So}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.75, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: f019f617cfc17fb342ef21e0dcf46bba\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/ul/li[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclick(TestDriver.java:95)\n\tat org.selenium.iHub.pages.EditAndReviewLinkPage.clickOnAssignedToMe(EditAndReviewLinkPage.java:24)\n\tat org.selenium.iHub.steps.EditAndReviewLinkSteps.clickOnAssignedToMe(EditAndReviewLinkSteps.java:22)\n\tat ✽.And Click on assigned to me(contentSocialPostFullFlow.feature:73)\n",
  "status": "failed"
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
formatter.after({
  "duration": 126122,
  "status": "passed"
});
});