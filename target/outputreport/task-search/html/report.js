$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("searchTask.feature");
formatter.feature({
  "line": 1,
  "name": "Task search box for finding any task",
  "description": "There is a feature of finding the task from the list\nWe can find it by using # as prefix",
  "id": "task-search-box-for-finding-any-task",
  "keyword": "Feature"
});
formatter.before({
  "duration": 859253,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Validate the task search feature with using # as prefix",
  "description": "",
  "id": "task-search-box-for-finding-any-task;validate-the-task-search-feature-with-using-#-as-prefix",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@retesting"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "Launch the url \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Click on sign in button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Click on dashboard",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Search the task with using # as prefix \"\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
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
  "duration": 21107860692,
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
  "duration": 3973364177,
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
  "duration": 1236056989,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 12148966704,
  "status": "passed"
});
formatter.match({
  "location": "DashboardSteps.clickOnDashboard()"
});
formatter.result({
  "duration": 3385900920,
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
  "duration": 573667245,
  "status": "passed"
});
formatter.match({
  "location": "TaskSearchSteps.theTaskShouldBeFound()"
});
formatter.result({
  "duration": 2105122201,
  "status": "passed"
});
formatter.after({
  "duration": 3832014902,
  "status": "passed"
});
});