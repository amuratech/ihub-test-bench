$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("webWebsiteFullFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Web Development- Website Full Flow",
  "description": "",
  "id": "web-development--website-full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4413382,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate \u0027Create a task\u0027 and Add input brief",
  "description": "",
  "id": "web-development--website-full-flow;validate-\u0027create-a-task\u0027-and-add-input-brief",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@regression"
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
  "name": "Click on password \"amura!@#\"",
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
  "name": "Select the department- web development",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on create task",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter task name \"Testing web dev website for assignee form\"",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Select web task type- Website",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select task sub-type",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Enter Brief \"Testing web website brief\"",
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
formatter.step({
  "line": 21,
  "name": "Select CRM",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select func req",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select CMS",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select content sitemap",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select content website",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Upload website design doc",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select hosting",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Click Save and publish later button",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Select \u0027Publish\u0027",
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
  "duration": 26157802997,
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
  "duration": 2656437473,
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
  "duration": 1315684409,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 11175788174,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "duration": 14214107546,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTask()"
});
formatter.result({
  "duration": 2241430142,
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
  "duration": 3930287951,
  "status": "passed"
});
formatter.match({
  "location": "DepartmentTypesSteps.selectTheDepartmentWebDevelopment()"
});
formatter.result({
  "duration": 1302074900,
  "status": "passed"
});
formatter.match({
  "location": "CreateTaskSteps.clickOnCreateTask()"
});
formatter.result({
  "duration": 5534868055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing web dev website for assignee form",
      "offset": 17
    }
  ],
  "location": "NewTaskSteps.enterTaskName(String)"
});
formatter.result({
  "duration": 4025070061,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectWebTaskTypeWebsite()"
});
formatter.result({
  "duration": 3193238495,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskSubType()"
});
formatter.result({
  "duration": 2472250995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing web website brief",
      "offset": 13
    }
  ],
  "location": "NewTaskSteps.enterBrief(String)"
});
formatter.result({
  "duration": 2075379006,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.enterDueDate()"
});
formatter.result({
  "duration": 726464542,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTimeSlot()"
});
formatter.result({
  "duration": 2326389494,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.saveAndAddBriefButton()"
});
formatter.result({
  "duration": 5040242047,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectCRM()"
});
formatter.result({
  "duration": 2299833633,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectFuncReq()"
});
formatter.result({
  "duration": 5456327075,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectCMS()"
});
formatter.result({
  "duration": 1262089263,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectContentSitemap()"
});
formatter.result({
  "duration": 1388449382,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectContentWebsite()"
});
formatter.result({
  "duration": 1081720174,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.uploadWebsiteDesignDoc()"
});
formatter.result({
  "duration": 1094391737,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectHosting()"
});
formatter.result({
  "duration": 2408275100,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.clickSaveAndPublishLaterButton()"
});
formatter.result({
  "duration": 8608385503,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "duration": 2201785949,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectPublish()"
});
formatter.result({
  "duration": 4328129940,
  "status": "passed"
});
formatter.write("Current URL:http://staging.work.withamura.com/clients/59e6097c8ec629036ab1c685/development/tasks/5a336d0e8ec6291942aec8ef");
formatter.after({
  "duration": 7590852334,
  "status": "passed"
});
formatter.before({
  "duration": 270877,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate Review the input brief",
  "description": "",
  "id": "web-development--website-full-flow;validate-review-the-input-brief",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on username/email id \"pankit@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on web development",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "#     Then Select name"
    },
    {
      "line": 46,
      "value": "#     And Select desc"
    },
    {
      "line": 47,
      "value": "#     And Select due date"
    },
    {
      "line": 48,
      "value": "#     And Select time"
    },
    {
      "line": 49,
      "value": "#     And Select task type suff info"
    },
    {
      "line": 50,
      "value": "#     And Select task sub-type suff info"
    },
    {
      "line": 51,
      "value": "#    And Select webdev radio name"
    },
    {
      "line": 52,
      "value": "#    And Select webdev radion desc"
    },
    {
      "line": 53,
      "value": "#    And Select webdev hosting"
    },
    {
      "line": 54,
      "value": "#    And Select webdev CMS"
    },
    {
      "line": 55,
      "value": "#    And Select webdev CRM"
    },
    {
      "line": 56,
      "value": "#    And Select webdev Func"
    },
    {
      "line": 57,
      "value": "#    And Select webdev sitemap"
    },
    {
      "line": 58,
      "value": "#     And Select webdev content"
    },
    {
      "line": 59,
      "value": "#    And Select webdev animation"
    },
    {
      "line": 60,
      "value": "#    And Select webdev form"
    },
    {
      "line": 61,
      "value": "#    And Select webdev fonts"
    },
    {
      "line": 62,
      "value": "#    And Select webdev cms req"
    },
    {
      "line": 63,
      "value": "#    And Select webdev design"
    },
    {
      "line": 64,
      "value": "#    And Select webdev script"
    },
    {
      "line": 65,
      "value": "#    And Select webdev desktop slices"
    },
    {
      "line": 66,
      "value": "#    And Select webdev mobile slices"
    },
    {
      "line": 67,
      "value": "#    And Select webdev ftp detail"
    },
    {
      "line": 68,
      "value": "#    And Select webdev server detail"
    },
    {
      "line": 69,
      "value": "#    And Select content sitemap"
    },
    {
      "line": 70,
      "value": "#    And Select content website"
    }
  ],
  "line": 71,
  "name": "Rate webdev brief",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Accept",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14176526953,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3970725145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pankit@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 1519890879,
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
  "duration": 1209458305,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4654803519,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2178569114,
  "status": "passed"
});
formatter.match({
  "location": "DevBriefSteps.clickOnWebDevelopment()"
});
formatter.result({
  "duration": 3645697610,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1416521446,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2259922727,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 3560941731,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 12300948416,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteInputSteps.rateWebdevBrief()"
});
formatter.result({
  "duration": 182703337,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"new_client_development_review\"]/div[22]/div/div/a[4]\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 173 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.9E9B6D}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 98f2b55aa664e81e8cd39d750dc31e1a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"new_client_development_review\"]/div[22]/div/div/a[4]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:493)\n\tat org.selenium.iHub.pages.WebWebsiteInputPage.rateWebdevBrief(WebWebsiteInputPage.java:208)\n\tat org.selenium.iHub.steps.WebWebsiteInputSteps.rateWebdevBrief(WebWebsiteInputSteps.java:202)\n\tat ✽.And Rate webdev brief(webWebsiteFullFlow.feature:71)\n",
  "status": "failed"
});
formatter.match({
  "location": "DesignReviewSteps.accept()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current URL:http://staging.work.withamura.com/clients/59e6097c8ec629036ab1c685/development/tasks/5a336d0e8ec6291942aec8ef/input/reviews/new");
formatter.after({
  "duration": 7691907031,
  "status": "passed"
});
});