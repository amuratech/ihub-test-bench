$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("changeRequest.feature");
formatter.feature({
  "line": 1,
  "name": "Change Request once input brief is reviewed",
  "description": "User/Input Reviewer can reject the input brief and send the task for\n\u0027Changes Request\u0027 to make necessary changes in the brief\nFor making the button to be enabled, all the sufficient info should be selected and the rating should\nbe more than 3 stars",
  "id": "change-request-once-input-brief-is-reviewed",
  "keyword": "Feature"
});
formatter.before({
  "duration": 888654,
  "status": "passed"
});
formatter.scenario({
  "line": 89,
  "name": "Validate the feature when the button is enabled",
  "description": "",
  "id": "change-request-once-input-brief-is-reviewed;validate-the-feature-when-the-button-is-enabled",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 88,
      "name": "@change"
    }
  ]
});
formatter.step({
  "line": 91,
  "name": "Launch the url \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Click \u0027Quick add\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Select \u0027Task\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Enter the client name \"\"",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Select the department- Design",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Click on create task",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "Enter task name \"Testing Design Print Media\"",
  "keyword": "Then "
});
formatter.step({
  "line": 101,
  "name": "Select task type- Design Infographics",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "Select task sub-type- Website",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "Enter Brief \"Testing design print media brief\"",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "Enter Due date",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Select time slot",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Click \u0027save and add brief\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 107,
      "value": "#    Then Close the browser"
    }
  ],
  "line": 108,
  "name": "Click user name",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "LoginSteps.launchTheUrl(String)"
});
formatter.result({
  "duration": 18855983987,
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
  "duration": 1612334895,
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
  "duration": 1243212085,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 17437979073,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "duration": 14315438911,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTask()"
});
formatter.result({
  "duration": 2196964521,
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
  "duration": 3571682535,
  "status": "passed"
});
formatter.match({
  "location": "DepartmentTypesSteps.selectTheDepartmentDesign()"
});
formatter.result({
  "duration": 3287934900,
  "status": "passed"
});
formatter.match({
  "location": "CreateTaskSteps.clickOnCreateTask()"
});
formatter.result({
  "duration": 2618845316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing Design Print Media",
      "offset": 17
    }
  ],
  "location": "NewTaskSteps.enterTaskName(String)"
});
formatter.result({
  "duration": 1709227714,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskTypeDesignInfographics()"
});
formatter.result({
  "duration": 2284449451,
  "status": "passed"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskSubTypeWebsite()"
});
formatter.result({
  "duration": 2342875643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing design print media brief",
      "offset": 13
    }
  ],
  "location": "NewTaskSteps.enterBrief(String)"
});
formatter.result({
  "duration": 1588865732,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.enterDueDate()"
});
formatter.result({
  "duration": 589596362,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.selectTimeSlot()"
});
formatter.result({
  "duration": 2377236875,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.saveAndAddBriefButton()"
});
formatter.result({
  "duration": 4027834188,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14177553523,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3383047954,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;PJurncAoaY8Q3n\u0026#x2F;w0JRAbPYpLATTqq2nJMbA5nwQB3dfH0XUQYefJzp7gXQToJqTEGCzfqYXqHGEphWFbz67IQ\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; href\u003d\u0026quot;\u0026#x2F;\u0026#x2F;cdn.materialdesignicons.com\u0026#x2F;1.8.36\u0026#x2F;css\u0026#x2F;materialdesignicons.min.css\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;devise-a3e4cb70d4a91777f716db936aa054663e72d7566bfad6334705c5db4d58f571.css\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;\u0026#x2F;head\u0026gt;\n  \u0026lt;body\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;top-content\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;inner-bg\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;container\u0026quot;\u0026gt;\n\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-sm-6 col-sm-offset-3 form-box\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-top\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-sm-12 text text-center ihub-logo-container\u0026quot;\u0026gt;\n                \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-colored-575f3defd0ab56c4116595a59bdd39a2696da58b4b362971c7a54705165cbfee.png\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\n          \u0026lt;div class\u003d\u0026quot;form-bottom\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n                  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n                    \u0026lt;a class\u003d\u0026quot;col-md-12 btn btn-danger btn-large\u0026quot; href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;auth\u0026#x2F;google_oauth2\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-google-plus pull-left\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\u0026lt;span\u0026gt; Sign in with Amura\u0026#x27;s google Apps Account\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n                  \u0026lt;\u0026#x2F;div\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-md-12 text-center or-divider\u0026quot;\u0026gt;\n                \u0026lt;span class\u003d\u0026quot;lead\u0026quot;\u0026gt;OR\u0026lt;\u0026#x2F;span\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n\n            \u0026lt;form class\u003d\u0026quot;new_user\u0026quot; id\u003d\u0026quot;new_user\u0026quot; action\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_in\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;FuV1aAAEcIERrDaJxjgCHzyjI1smFDQuAaQXihHGjkz19EOhbr4rTrilXbRRxoJTswSlFbRnF2hxnJhLtk+w0g\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n                  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                    \u0026lt;label class\u003d\u0026quot;sr-only\u0026quot; for\u003d\u0026quot;form-username\u0026quot;\u0026gt;Username\u0026lt;\u0026#x2F;label\u0026gt;\n                    \u0026lt;input autofocus\u003d\u0026quot;autofocus\u0026quot; class\u003d\u0026quot;form-username form-control\u0026quot; placeholder\u003d\u0026quot;example@amuratch.com\u0026quot; type\u003d\u0026quot;email\u0026quot; value\u003d\u0026quot;\u0026quot; name\u003d\u0026quot;user[email]\u0026quot; id\u003d\u0026quot;user_email\u0026quot; \u0026#x2F;\u0026gt;\n                  \u0026lt;\u0026#x2F;div\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n\n              \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n                  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                    \u0026lt;label class\u003d\u0026quot;sr-only\u0026quot; for\u003d\u0026quot;form-password\u0026quot;\u0026gt;Password\u0026lt;\u0026#x2F;label\u0026gt;\n                    \u0026lt;input autocomplete\u003d\u0026quot;off\u0026quot; placeholder\u003d\u0026quot;password\u0026quot; class\u003d\u0026quot;form-password form-control\u0026quot; type\u003d\u0026quot;password\u0026quot; name\u003d\u0026quot;user[password]\u0026quot; id\u003d\u0026quot;user_password\u0026quot; \u0026#x2F;\u0026gt;\n                  \u0026lt;\u0026#x2F;div\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n\n              \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n                  \u0026lt;button type\u003d\u0026quot;submit\u0026quot; class\u003d\u0026quot;btn\u0026quot;\u0026gt;Sign in\u0026lt;\u0026#x2F;button\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;text-center devise-shared-links\u0026quot;\u0026gt;\n                  \n\n  Forgot your password? \u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;password\u0026#x2F;new\u0026quot;\u0026gt;Click here\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;confirmation\u0026#x2F;new\u0026quot;\u0026gt;Didn\u0026#x27;t receive confirmation instructions?\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n\n\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;background-image\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\n\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/users/sign_in");
formatter.after({
  "duration": 3986701822,
  "status": "passed"
});
formatter.uri("searchTask.feature");
formatter.feature({
  "line": 1,
  "name": "Task search box for finding any task",
  "description": "There is a feature of finding the task from the list\nWe can find it by using # as prefix",
  "id": "task-search-box-for-finding-any-task",
  "keyword": "Feature"
});
formatter.before({
  "duration": 363454,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Validate the task search feature with using # as prefix",
  "description": "",
  "id": "task-search-box-for-finding-any-task;validate-the-task-search-feature-with-using-#-as-prefix",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the url \"\"",
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
  "name": "Click on dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Search the task with using # as prefix \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "The task should be found",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 16
    }
  ],
  "location": "LoginSteps.launchTheUrl(String)"
});
formatter.result({
  "duration": 936065674,
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
  "duration": 1506511256,
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
  "duration": 1230811088,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4202248215,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.clickOnDashboard()"
});
formatter.result({
  "duration": 2837279674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "TaskSearchSteps.searchTheTaskWithUsingAsPrefix(String)"
});
formatter.result({
  "duration": 437461987,
  "status": "passed"
});
formatter.match({
  "location": "TaskSearchSteps.theTaskShouldBeFound()"
});
formatter.result({
  "duration": 90153702,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027#RUOM-DSG-27\u0027)]\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 83 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.lq5pQ3}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: c396c5ba22b3a680b2c92aab7cff361c\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027#RUOM-DSG-27\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myTaskFound(TestDriver.java:4281)\n\tat org.selenium.iHub.pages.TaskSearchPage.theTaskShouldBeFound(TaskSearchPage.java:30)\n\tat org.selenium.iHub.steps.TaskSearchSteps.theTaskShouldBeFound(TaskSearchSteps.java:36)\n\tat ✽.Then The task should be found(searchTask.feature:13)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;20LIo7yYRm8X+mdbCpd3bbwMYCcuBk9YH98LDtgc0vUZ77Joqmyoz6AS6LpvfKQMYlwmQdrspIa3AjvOb2LSzQ\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443464359d65eb3bed5c\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:36.092Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Marketing\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Lead - Marketing\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;shahbaz@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Shahbaz Wadera\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;D\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;9873522371\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T06:51:11.535Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;dropdown quick-add\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Quick add \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\n              \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#assignment-form-modal\u0026quot;\u0026gt;Project\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\u0026lt;li\u0026gt;\n            \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;\u0026#x2F;ul\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Shahbaz Wadera \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443464359d65eb3bed5c\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Runwal Omega\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Design tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing Design Print Media\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#RUOM-DSG-27\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;design\u0026#x2F;tasks-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;!-- display wargings and error messages progress bar, status form start --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \n    \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot;\u0026gt;\n      Initial brief ready and task published. Rohit Malge needs to add review for input-brief before accepting\u0026#x2F;rejecting the task.\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n\n\n\n\n\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%;\u0026quot; title\u003d\u0026quot;Completed (5%)\u0026quot;\u0026gt;\n    5% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Accepted\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;AC (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 80%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;In Progress\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;IP (80%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Under Output Review\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;UOR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Delivered\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DE (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n\n\n        \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n            Update task status \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n                \u0026lt;li\u0026gt;\n                  \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-cancel-reason-modal\u0026quot; data-status\u003d\u0026quot;cancel\u0026quot;\u0026gt;Cancel\u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n          More \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n        \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026#x2F;edit\u0026quot;\u0026gt;Edit task\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-danger btn-xs\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-clone-modal\u0026quot;\u0026gt;Clone\u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_design_task_5a1717118ec6290bf2c281e1\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;20LIo7yYRm8X+mdbCpd3bbwMYCcuBk9YH98LDtgc0vUZ77Joqmyoz6AS6LpvfKQMYlwmQdrspIa3AjvOb2LSzQ\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_design_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_design_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_design_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_design_task_5a1717118ec6290bf2c281e1\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;20LIo7yYRm8X+mdbCpd3bbwMYCcuBk9YH98LDtgc0vUZ77Joqmyoz6AS6LpvfKQMYlwmQdrspIa3AjvOb2LSzQ\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_design_task[event]\u0026quot; id\u003d\u0026quot;client_design_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- display wargings and error messages progress bar, status form end --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;resource-show-page\u0026quot;\u0026gt;\n\n          \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Basic task details\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n              \u0026lt;!-- basic task details start --\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Search Id\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;RUOM-DSG-27\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing Design Print Media\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize text-justify\u0026quot;\u0026gt;\u0026lt;p\u0026gt;Testing design print media brief\u0026lt;\u0026#x2F;p\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Infographic\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Website\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Published\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Assignee\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Rohit Malge\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;24\u0026#x2F;11\u0026#x2F;2017\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Time slot\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Slot A (10am   3pm)\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Start date\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Shahbaz Wadera\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;24\u0026#x2F;11\u0026#x2F;17 12:00 AM\n      \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;2.0 hrs\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n\u0026lt;!-- task actual work time displayed on task details page --\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Published at\u0026lt;\u0026#x2F;div\u0026gt;\n      24\u0026#x2F;11\u0026#x2F;17 12:18 AM,\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\n          \u0026lt;!-- display input start --\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Input brief\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Reference links\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;hr \u0026#x2F;\u0026gt;\n\u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\n    Referenced Tasks\u0026lt;br \u0026#x2F;\u0026gt;\n    \u0026lt;small\u0026gt;\n      This task depends on some other tasks which need to be delivered before you can start working on this one.\n    \u0026lt;\u0026#x2F;small\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n      \u0026lt;table class\u003d\u0026quot;table table-striped table-condensed reference-task-table\u0026quot;\u0026gt;\n        \u0026lt;thead\u0026gt;\n          \u0026lt;tr\u0026gt;\u0026lt;th width\u003d\u0026quot;20%\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;th\u0026gt;\n          \u0026lt;th width\u003d\u0026quot;20%\u0026quot;\u0026gt;Reference type\u0026lt;\u0026#x2F;th\u0026gt;\n          \u0026lt;th width\u003d\u0026quot;40%\u0026quot;\u0026gt;Details\u0026lt;\u0026#x2F;th\u0026gt;\n          \u0026lt;th width\u003d\u0026quot;20%\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;th\u0026gt;\n        \u0026lt;\u0026#x2F;tr\u0026gt;\u0026lt;\u0026#x2F;thead\u0026gt;\n          \u0026lt;tbody\u0026gt;\u0026lt;tr\u0026gt;\n            \u0026lt;td\u0026gt;\n              Website \u0026#x2F; Blogpost content\n            \u0026lt;\u0026#x2F;td\u0026gt;\n                \u0026lt;td\u0026gt;Data uploaded\u0026lt;\u0026#x2F;td\u0026gt;\n                \u0026lt;td\u0026gt;\n                  \u0026lt;a href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;ihub-internal.s3.amazonaws.com\u0026#x2F;uploads\u0026#x2F;client\u0026#x2F;design\u0026#x2F;infographic\u0026#x2F;client_content_task_doc\u0026#x2F;5a1717cc8ec6290bf2c281f0\u0026#x2F;Testing_iHub.txt\u0026quot; target\u003d\u0026quot;_blank\u0026quot;\u0026gt;\n                    https:\u0026#x2F;\u0026#x2F;ihub-internal.s3.amazonaws.com\u0026#x2F;uploads\u0026#x2F;client\u0026#x2F;design\u0026#x2F;infographic\u0026#x2F;client_content_task_doc\u0026#x2F;5a1717cc8ec6290bf2c281f0\u0026#x2F;Testing_iHub.txt\n                  \u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;td\u0026gt;\n                \u0026lt;td\u0026gt;-\u0026lt;\u0026#x2F;td\u0026gt;\n          \u0026lt;\u0026#x2F;tr\u0026gt;\n      \u0026lt;\u0026#x2F;tbody\u0026gt;\u0026lt;\u0026#x2F;table\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Link to reference documents (on LAN)\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;!-- display input end --\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filters-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n    \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Resources\u0026lt;\u0026#x2F;span\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;list-unstyled resource-helper-links\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026#x2F;input\u0026#x2F;reviews\u0026quot;\u0026gt; View all input reviews \u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;task-history\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n      \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Task history\u0026lt;\u0026#x2F;span\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Draft at 24\u0026#x2F;11\u0026#x2F;17 12:14 AM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Published at 24\u0026#x2F;11\u0026#x2F;17 12:18 AM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Rohit Malge\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-clone-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Clone task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Clone task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;alert alert-danger\u0026quot;\u0026gt;Do not clone tasks unnecessarily. Cloned task is similar, but completely independent of this task. Cloning will not impact this task.\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;edit_client_design_task\u0026quot; id\u003d\u0026quot;edit_client_design_task_5a1717118ec6290bf2c281e1\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59e6097c8ec629036ab1c685\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;5a1717118ec6290bf2c281e1\u0026#x2F;clone_task\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;20LIo7yYRm8X+mdbCpd3bbwMYCcuBk9YH98LDtgc0vUZ77Joqmyoz6AS6LpvfKQMYlwmQdrspIa3AjvOb2LSzQ\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot; for\u003d\u0026quot;client_design_task_name\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;label\u0026gt;\n                  \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; autofocus\u003d\u0026quot;autofocus\u0026quot; type\u003d\u0026quot;text\u0026quot; value\u003d\u0026quot;Testing Design Print Media\u0026quot; name\u003d\u0026quot;client_design_task[name]\u0026quot; id\u003d\u0026quot;client_design_task_name\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                  \u0026lt;label class\u003d\u0026quot;checkbox-inline\u0026quot;\u0026gt;\n                    \u0026lt;input name\u003d\u0026quot;client_design_task[rework]\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;0\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;checkbox\u0026quot; value\u003d\u0026quot;1\u0026quot; name\u003d\u0026quot;client_design_task[rework]\u0026quot; id\u003d\u0026quot;client_design_task_rework\u0026quot; \u0026#x2F;\u0026gt; Is this task a rework?\n                  \u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    $(\u0026quot;.selectize\u0026quot;).selectize();\n    FileIcon.init($(\u0026quot;.asset-delete\u0026quot;), $(\u0026quot;.asset-icon\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59e6097c8ec629036ab1c685/design/tasks/5a1717118ec6290bf2c281e1");
formatter.after({
  "duration": 3291792572,
  "status": "passed"
});
});