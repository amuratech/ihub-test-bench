$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignmentFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Project- Full Flow",
  "description": "",
  "id": "project--full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 718559,
  "status": "passed"
});
formatter.scenario({
  "line": 769,
  "name": "Validate Mark as Ready to go Live",
  "description": "",
  "id": "project--full-flow;validate-mark-as-ready-to-go-live",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 768,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 770,
      "value": "#    Then Click user name"
    },
    {
      "line": 771,
      "value": "#    And Click \u0027Sign out\u0027"
    }
  ],
  "line": 772,
  "name": "Launch the url \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 773,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 774,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 775,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 776,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 777,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 778,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 779,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 780,
  "name": "Click \u0027Mark as ready to go live\u0027",
  "keyword": "And "
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
  "duration": 7593034539,
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
  "duration": 1499654095,
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
  "duration": 1213327502,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 20013984378,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickOnProjects()"
});
formatter.result({
  "duration": 3347162120,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2317598220,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 3080289815,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnEdit()"
});
formatter.result({
  "duration": 3879203667,
  "status": "passed"
});
formatter.match({
  "location": "ApprovedAndReadySteps.clickMarkAsReadyToGoLive()"
});
formatter.result({
  "duration": 3533610971,
  "status": "passed"
});
formatter.after({
  "duration": 2112085593,
  "status": "passed"
});
});