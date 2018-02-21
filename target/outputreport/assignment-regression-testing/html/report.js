$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("assignmentFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Project- Full Flow",
  "description": "",
  "id": "project--full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 389483,
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
      "name": "@regression"
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
  "duration": 84809014994,
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
  "duration": 2973585727,
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
  "duration": 1580645135,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 19681632565,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "duration": 14212947461,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectProject()"
});
formatter.result({
  "duration": 2259049371,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectClient()"
});
formatter.result({
  "duration": 4963395701,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickAddProject()"
});
formatter.result({
  "duration": 3476577979,
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
  "duration": 1356338778,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectProjectType()"
});
formatter.result({
  "duration": 2265774124,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectBillingMethod()"
});
formatter.result({
  "duration": 2233376028,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectDueDateOfProject()"
});
formatter.result({
  "duration": 420345677,
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
  "duration": 1228143998,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectWebsiteDesign()"
});
formatter.result({
  "duration": 2238414616,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectCampaignStartDateAssignment()"
});
formatter.result({
  "duration": 326427792,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.selectCampaignEndDateAssignment()"
});
formatter.result({
  "duration": 402632728,
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
  "duration": 1275074505,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickSaveButtonAssignment()"
});
formatter.result({
  "duration": 3941151945,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickInitiateCampaign()"
});
formatter.result({
  "duration": 3613987782,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;DIhrz39L2JhNnhHoffLda\u0026#x2F;gKaeaSfJwUEPp9A11gGOpfpqgx7Qm+t9RGr7WBztvVx3DZkGqjOvH3xk2OizIRPg\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443464359d65eb3bed5c\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:36.092Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Marketing\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Lead - Marketing\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;shahbaz@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Shahbaz Wadera\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;D\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;9873522371\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T10:55:02.274Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;dropdown quick-add\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Quick add \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\n              \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#assignment-form-modal\u0026quot;\u0026gt;Project\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\u0026lt;li\u0026gt;\n            \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;\u0026#x2F;ul\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Shahbaz Wadera \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443464359d65eb3bed5c\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Campaigns\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;campaign\u0026#x2F;assignments-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot; role\u003d\u0026quot;alert\u0026quot;\u0026gt;\n    The campaign has been initiated by Shahbaz Wadera. According to the project plan, the system has auto-generated some tasks that need to be completed before the project moves to \u0026#x27;Brief ready\u0026#x27; stage. \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks?scope\u003dall\u0026quot;\u0026gt;Here\u0026lt;\u0026#x2F;a\u0026gt; is a list of all compulsory tasks.\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Project progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:0%\u0026quot;\u0026gt;\n    0 % progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-1\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Brief Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;BR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Plan Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;PR (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 20%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Communication Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;CR (20%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 25%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Design Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DR (25%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 15%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Development Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DER (15%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-6\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Client Approved\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;CA (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-7\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Ready To Go Live\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;RTGL (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-8\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Live\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;LV (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12 task-action-bar\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;edit\u0026quot;\u0026gt;Edit project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks\u0026quot;\u0026gt;View all related tasks\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot; data-client-id\u003d\u0026quot;59ca739164359d71a3b339ed\u0026quot; data-client-name\u003d\u0026quot;Gera\u0026quot; data-assignment-id\u003d\u0026quot;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt; Add task\u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;assignment-stage-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_campaign_assignment_5a27ccbe8ec62961e3f77fac\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;DIhrz39L2JhNnhHoffLda\u0026#x2F;gKaeaSfJwUEPp9A11gGOpfpqgx7Qm+t9RGr7WBztvVx3DZkGqjOvH3xk2OizIRPg\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_campaign_assignment[event]\u0026quot; id\u003d\u0026quot;client_campaign_assignment_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;div class\u003d\u0026quot;resource-show-page padded-show-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Testing\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign budget (estimate)\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Rs. 10,000\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Initiated\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Purpose\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Testing\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign start date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign end date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Assignee\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Billing method for this Campaign\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n          Amura Credit Line\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\n          Active tasks related to this project\n          \u0026lt;a class\u003d\u0026quot;pull-right\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks?scope\u003dall \u0026quot;\u0026gt;View all related tasks\u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n          \u0026lt;table class\u003d\u0026quot;table table-striped table-condensed\u0026quot;\u0026gt;\n            \u0026lt;thead\u0026gt;\n              \u0026lt;tr\u0026gt;\u0026lt;th\u0026gt;Task\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Department\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Task type\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Status\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Assignee\u0026lt;\u0026#x2F;th\u0026gt;\n            \u0026lt;\u0026#x2F;tr\u0026gt;\u0026lt;\u0026#x2F;thead\u0026gt;\n            \u0026lt;tbody\u0026gt;\u0026lt;tr\u0026gt;\n              \u0026lt;td\u0026gt;\n                  \u0026lt;a title\u003d\u0026quot;Testing- Submit initial campaign brief\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot;\u0026gt;Testing- Submit initi..\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Marketing\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Brief\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Draft\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Shahbaz Wadera\n              \u0026lt;\u0026#x2F;td\u0026gt;\n            \u0026lt;\u0026#x2F;tr\u0026gt;\n          \u0026lt;\u0026#x2F;tbody\u0026gt;\u0026lt;\u0026#x2F;table\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \n      \u0026lt;div class\u003d\u0026quot;filters-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n      \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Resources\u0026lt;\u0026#x2F;span\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;list-unstyled resource-helper-links\u0026quot;\u0026gt;\n            \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;offline_creatives\u0026quot;\u0026gt; Offline creatives \u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;Campaign project was successfully updated.\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div id\u003d\u0026quot;noty_layout__topRight\u0026quot; class\u003d\u0026quot;noty_layout\u0026quot;\u0026gt;\u0026lt;div id\u003d\u0026quot;noty_bar_b6a11dee-cb8c-45ed-8304-70a44fab390b\u0026quot; class\u003d\u0026quot;noty_bar noty_type__success noty_theme__mint noty_close_with_click noty_has_timeout noty_has_progressbar\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;noty_body\u0026quot;\u0026gt;Campaign project was successfully updated.\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;noty_progressbar\u0026quot; style\u003d\u0026quot;transition: width 10000ms linear; width: 0%;\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/campaign/assignments/5a27ccbe8ec62961e3f77fac");
formatter.after({
  "duration": 6357416084,
  "status": "passed"
});
formatter.before({
  "duration": 181173,
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
      "name": "@regression"
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
  "line": 37,
  "name": "Click on username/email id \"jasmine@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Click Marketing",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Rate the input brief- Marketing Brief",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Click on username/email id \"gautham@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "Click Marketing",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Enter Offers",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Enter Communication guidelines",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Select a competitor",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "Select a project",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Click \u0027Save\u0027 button- Marketing Output",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Click on username/email id \"jasmine@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Click Marketing",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "Rate the output brief- Marketing Brief",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "Click deliver button",
  "keyword": "And "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickSubmitInitialCampaignBriefTask()"
});
formatter.result({
  "duration": 2934570709,
  "status": "passed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "duration": 5305756986,
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
  "duration": 1696389401,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickSaveButtonMarketingInput()"
});
formatter.result({
  "duration": 4025744072,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectPublish()"
});
formatter.result({
  "duration": 3573455094,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14175458338,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 5722905211,
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
  "duration": 1268245487,
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
  "duration": 1224663254,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4520160634,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2187018809,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickMarketing()"
});
formatter.result({
  "duration": 3451937732,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1313407678,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2292371298,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 3171943999,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 5093125754,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.rateTheInputBriefMarketingBrief()"
});
formatter.result({
  "duration": 2190658355,
  "status": "passed"
});
formatter.match({
  "location": "DesignReviewSteps.accept()"
});
formatter.result({
  "duration": 2201188251,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.selectAssignee()"
});
formatter.result({
  "duration": 4263288231,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.selectStartDate()"
});
formatter.result({
  "duration": 544351611,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.clickAssignButton()"
});
formatter.result({
  "duration": 14712009061,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14160163367,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3791377278,
  "status": "passed"
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
  "duration": 1246780296,
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
  "duration": 1191749469,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4149338768,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2197299936,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickMarketing()"
});
formatter.result({
  "duration": 3230803219,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1023395485,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2270608052,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 2999364049,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnEdit()"
});
formatter.result({
  "duration": 4099638652,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "duration": 2177817504,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickStart()"
});
formatter.result({
  "duration": 3387254561,
  "status": "passed"
});
formatter.match({
  "location": "CommonOutputFieldsSteps.clickAddYourOutputLink()"
});
formatter.result({
  "duration": 3484409715,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.enterOffers()"
});
formatter.result({
  "duration": 1416629369,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.enterCommunicationGuidelines()"
});
formatter.result({
  "duration": 1397648569,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.selectACompetitor()"
});
formatter.result({
  "duration": 2617638471,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.selectAProject()"
});
formatter.result({
  "duration": 1518545924,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.clickSaveButtonMarketingOutput()"
});
formatter.result({
  "duration": 4085576505,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.clickUpdateLink()"
});
formatter.result({
  "duration": 2199562621,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectReview()"
});
formatter.result({
  "duration": 13797455887,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14176949000,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 4432249113,
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
  "duration": 1246670583,
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
  "duration": 1178309953,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4200753475,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2200410348,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefInputSteps.clickMarketing()"
});
formatter.result({
  "duration": 4053749167,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1832674592,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2230997699,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 3186712560,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 5074419520,
  "status": "passed"
});
formatter.match({
  "location": "MarketingBriefOutputSteps.rateTheOutputBriefMarketingBrief()"
});
formatter.result({
  "duration": 2202242912,
  "status": "passed"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "duration": 4128050861,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;+XTvLzCkpNEgFh5AcMO7FGmeWXBtBcfFKoat9n5i0A6HYzdetjFd8hrxxOCiFz3fnIcskHTaSFhK5nexLyUTzw\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca442764359d65eb3becc8\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:23.281Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Marketing\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Manager - Marketing\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;jasmine@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Jasmine. Shaikh\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;C\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;9766604578\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T10:59:15.843Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;dropdown quick-add\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Quick add \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\n              \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#assignment-form-modal\u0026quot;\u0026gt;Project\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\u0026lt;li\u0026gt;\n            \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;\u0026#x2F;ul\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Jasmine. Shaikh \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca442764359d65eb3becc8\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;sc\u0026#x2F;team\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_team\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Marketing tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing- Submit initial campaign brief\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#GERA-MKT-2\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;marketing\u0026#x2F;tasks-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;!-- display wargings and error messages progress bar, status form start --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;alert alert-success\u0026quot; role\u003d\u0026quot;alert\u0026quot;\u0026gt; The task has been delivered  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:100%;\u0026quot; title\u003d\u0026quot;Completed (100%)\u0026quot;\u0026gt;\n    100% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n\n\n\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-danger btn-xs\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-clone-modal\u0026quot;\u0026gt;Clone\u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt;View project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_marketing_task_5a27ccc28ec62961e3f77fb2\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;+XTvLzCkpNEgFh5AcMO7FGmeWXBtBcfFKoat9n5i0A6HYzdetjFd8hrxxOCiFz3fnIcskHTaSFhK5nexLyUTzw\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_marketing_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_marketing_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_marketing_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_marketing_task_5a27ccc28ec62961e3f77fb2\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;+XTvLzCkpNEgFh5AcMO7FGmeWXBtBcfFKoat9n5i0A6HYzdetjFd8hrxxOCiFz3fnIcskHTaSFhK5nexLyUTzw\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_marketing_task[event]\u0026quot; id\u003d\u0026quot;client_marketing_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- display wargings and error messages progress bar, status form end --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;resource-show-page\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;This task is part of following project\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Client\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Gera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Brand\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         Brief Ready\n       \u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel panel-info\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Task output\u0026lt;\u0026#x2F;div\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n                  \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Objective\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign start date\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;15\u0026#x2F;12\u0026#x2F;2017\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign end date\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;15\u0026#x2F;12\u0026#x2F;2017\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Budget\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Rs. 10,000\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Communication guidelines\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Offers\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        \u0026lt;ul\u0026gt;\n          \u0026lt;li\u0026gt;Testing\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;hr \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n        Target group\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Minimum age\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        27\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Maximum age\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        66\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Gender\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        male\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Min. Annual Income (household)\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        Rs. 100\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Max. Annual Household (household)\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        Rs. 0\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Geos\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        Pune\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Micro-Geos\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        Pune\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Parental status\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Marital status\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Educational background\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Professional functions\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Industries\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Seniority\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Interest categories\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Aditional information\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n        -\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;hr \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Link to reference documents (on LAN)\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;hr \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\n      \u0026lt;h4 class\u003d\u0026quot;panel-title\u0026quot;\u0026gt;Product detail\u0026lt;\u0026#x2F;h4\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;large-title\u0026quot;\u0026gt;Competitor analysis\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\n    Testing\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n      \u0026lt;!-- When client is real estate--\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;ReKb competitor\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;ReKb product\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Plot area (sq. ft.)\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Carpet area (sq. ft.)\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Saleable area (sq. ft.)\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Loading\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Carpet price rate (sq. ft.)\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Rs. 0\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Total price\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Rs. 0\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Overall rating\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Amenities rating\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Specifications rating\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Specifications rating\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Offers\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n              \u0026lt;ul\u0026gt;\n              \u0026lt;\u0026#x2F;ul\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- When client is not real estate--\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n\n          \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Basic task details\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n              \u0026lt;!-- basic task details start --\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Search Id\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;GERA-MKT-2\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing- Submit initial campaign brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize text-justify\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Delivered\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Assignee\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Gautham. R\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;07\u0026#x2F;12\u0026#x2F;2017\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Time slot\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Slot A\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Start date\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;06\u0026#x2F;12\u0026#x2F;2017\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;-\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Shahbaz Wadera\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;07\u0026#x2F;12\u0026#x2F;17 12:00 AM\n      \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;2.0 hrs\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Worked on by\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Gautham. R\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;!-- task actual work time displayed on task details page --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Time spent\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div\u0026gt;\n        00 mins\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Published at\u0026lt;\u0026#x2F;div\u0026gt;\n      06\u0026#x2F;12\u0026#x2F;17 04:26 PM,\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\n          \u0026lt;!-- display input start --\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Input brief\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Objective\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Brief provided by client\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\u0026lt;p\u0026gt;Testing brief provided by the client\u0026lt;\u0026#x2F;p\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Link to reference documents (on LAN)\u0026lt;\u0026#x2F;div\u0026gt;\n      -\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;!-- display input end --\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filters-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n    \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Resources\u0026lt;\u0026#x2F;span\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;list-unstyled resource-helper-links\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026#x2F;input\u0026#x2F;reviews\u0026quot;\u0026gt; View all input reviews \u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026#x2F;output\u0026#x2F;reviews\u0026quot;\u0026gt; View all output reviews \u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;task-history\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n      \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Task history\u0026lt;\u0026#x2F;span\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Draft at 06\u0026#x2F;12\u0026#x2F;17 04:26 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Published at 06\u0026#x2F;12\u0026#x2F;17 04:26 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Jasmine. Shaikh\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Accepted at 06\u0026#x2F;12\u0026#x2F;17 04:27 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Gautham. R\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            In Progress at 06\u0026#x2F;12\u0026#x2F;17 04:28 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Gautham. R\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Under Output Review at 06\u0026#x2F;12\u0026#x2F;17 04:28 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Jasmine. Shaikh\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;task-history-item\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n            Delivered at 06\u0026#x2F;12\u0026#x2F;17 04:29 PM\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Gautham. R\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-clone-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Clone task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Clone task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;alert alert-danger\u0026quot;\u0026gt;Do not clone tasks unnecessarily. Cloned task is similar, but completely independent of this task. Cloning will not impact this task.\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;edit_client_marketing_task\u0026quot; id\u003d\u0026quot;edit_client_marketing_task_5a27ccc28ec62961e3f77fb2\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026#x2F;clone_task\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;+XTvLzCkpNEgFh5AcMO7FGmeWXBtBcfFKoat9n5i0A6HYzdetjFd8hrxxOCiFz3fnIcskHTaSFhK5nexLyUTzw\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot; for\u003d\u0026quot;client_marketing_task_name\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;label\u0026gt;\n                  \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; autofocus\u003d\u0026quot;autofocus\u0026quot; type\u003d\u0026quot;text\u0026quot; value\u003d\u0026quot;Testing- Submit initial campaign brief\u0026quot; name\u003d\u0026quot;client_marketing_task[name]\u0026quot; id\u003d\u0026quot;client_marketing_task_name\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                  \u0026lt;label class\u003d\u0026quot;checkbox-inline\u0026quot;\u0026gt;\n                    \u0026lt;input name\u003d\u0026quot;client_marketing_task[rework]\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;0\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;checkbox\u0026quot; value\u003d\u0026quot;1\u0026quot; name\u003d\u0026quot;client_marketing_task[rework]\u0026quot; id\u003d\u0026quot;client_marketing_task_rework\u0026quot; \u0026#x2F;\u0026gt; Is this task a rework?\n                  \u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    $(\u0026quot;.selectize\u0026quot;).selectize();\n    FileIcon.init($(\u0026quot;.asset-delete\u0026quot;), $(\u0026quot;.asset-icon\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/marketing/tasks/5a27ccc28ec62961e3f77fb2");
formatter.after({
  "duration": 5341085433,
  "status": "passed"
});
formatter.before({
  "duration": 170827,
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
  "line": 87,
  "name": "Validate Brief Approved",
  "description": "",
  "id": "project--full-flow;validate-brief-approved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 86,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 88,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 91,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Click \u0027Mark as brief approved\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14168573676,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3654060607,
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
  "duration": 1256282007,
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
  "duration": 1189070690,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4177912391,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickOnProjects()"
});
formatter.result({
  "duration": 3064971607,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2235501537,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 2927574959,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnEdit()"
});
formatter.result({
  "duration": 4424363264,
  "status": "passed"
});
formatter.match({
  "location": "ApprovedAndReadySteps.clickMarkAsBriefApproved()"
});
formatter.result({
  "duration": 3515027294,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;nWfccq\u0026#x2F;Q8PNpVQsWCJ5de3NqepYDlAk\u0026#x2F;SMgyZOmWwFPxeNvP4DnKRzTBr+jcq1dxpMURktABkB9NCQnmp9HRVA\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443464359d65eb3bed5c\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:36.092Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Marketing\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Lead - Marketing\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;shahbaz@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Shahbaz Wadera\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;D\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;9873522371\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T11:00:10.519Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;dropdown quick-add\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Quick add \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\n              \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#assignment-form-modal\u0026quot;\u0026gt;Project\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\u0026lt;li\u0026gt;\n            \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;\u0026#x2F;ul\u0026gt;\n            \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Shahbaz Wadera \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443464359d65eb3bed5c\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;sc\u0026#x2F;created_by_me\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Campaigns\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Testing\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;campaign\u0026#x2F;assignments-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot; role\u003d\u0026quot;alert\u0026quot;\u0026gt;\n    Shahbaz Wadera has received an approval from the client on the campaign-brief. According to the project plan, the system has auto-generated some tasks that need to be completed before the project moves to \u0026#x27;Plan ready\u0026#x27; stage. \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks?scope\u003dall\u0026quot;\u0026gt;Here\u0026lt;\u0026#x2F;a\u0026gt; is a list of all compulsory tasks.\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Project progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%\u0026quot;\u0026gt;\n    5 % progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Plan Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;PR (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 20%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Communication Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;CR (20%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 25%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Design Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DR (25%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 15%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Development Ready\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DER (15%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-6\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Client Approved\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;CA (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-7\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Ready To Go Live\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;RTGL (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-8\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 10%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Live\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;LV (10%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12 task-action-bar\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;edit\u0026quot;\u0026gt;Edit project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks\u0026quot;\u0026gt;View all related tasks\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#task-form-modal\u0026quot; data-client-id\u003d\u0026quot;59ca739164359d71a3b339ed\u0026quot; data-client-name\u003d\u0026quot;Gera\u0026quot; data-assignment-id\u003d\u0026quot;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt; Add task\u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;assignment-stage-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_campaign_assignment_5a27ccbe8ec62961e3f77fac\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;nWfccq\u0026#x2F;Q8PNpVQsWCJ5de3NqepYDlAk\u0026#x2F;SMgyZOmWwFPxeNvP4DnKRzTBr+jcq1dxpMURktABkB9NCQnmp9HRVA\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_campaign_assignment[event]\u0026quot; id\u003d\u0026quot;client_campaign_assignment_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;div class\u003d\u0026quot;resource-show-page padded-show-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Testing\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign budget (estimate)\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Rs. 10,000\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Brief Approved\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Purpose\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Testing\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign start date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign end date\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            15\u0026#x2F;12\u0026#x2F;2017\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Assignee\u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n            Shahbaz Wadera\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Billing method for this Campaign\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n          Amura Credit Line\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\n          Active tasks related to this project\n          \u0026lt;a class\u003d\u0026quot;pull-right\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;all\u0026#x2F;tasks?scope\u003dall \u0026quot;\u0026gt;View all related tasks\u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n          \u0026lt;table class\u003d\u0026quot;table table-striped table-condensed\u0026quot;\u0026gt;\n            \u0026lt;thead\u0026gt;\n              \u0026lt;tr\u0026gt;\u0026lt;th\u0026gt;Task\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Department\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Task type\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Status\u0026lt;\u0026#x2F;th\u0026gt;\n              \u0026lt;th\u0026gt;Assignee\u0026lt;\u0026#x2F;th\u0026gt;\n            \u0026lt;\u0026#x2F;tr\u0026gt;\u0026lt;\u0026#x2F;thead\u0026gt;\n            \u0026lt;tbody\u0026gt;\u0026lt;tr\u0026gt;\n              \u0026lt;td\u0026gt;\n                  \u0026lt;a title\u003d\u0026quot;Testing- Submit media plan\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot;\u0026gt;Testing- Submit media..\u0026lt;\u0026#x2F;a\u0026gt;\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                MediaPlan\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Campaign\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Draft\n              \u0026lt;\u0026#x2F;td\u0026gt;\n              \u0026lt;td\u0026gt;\n                Shahbaz Wadera\n              \u0026lt;\u0026#x2F;td\u0026gt;\n            \u0026lt;\u0026#x2F;tr\u0026gt;\n          \u0026lt;\u0026#x2F;tbody\u0026gt;\u0026lt;\u0026#x2F;table\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n    \n      \u0026lt;div class\u003d\u0026quot;filters-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;filter-title\u0026quot;\u0026gt;\n      \u0026lt;span class\u003d\u0026quot;left\u0026quot;\u0026gt;Resources\u0026lt;\u0026#x2F;span\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;list-unstyled resource-helper-links\u0026quot;\u0026gt;\n            \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026#x2F;offline_creatives\u0026quot;\u0026gt; Offline creatives \u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;Campaign project was successfully updated.\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div id\u003d\u0026quot;noty_layout__topRight\u0026quot; class\u003d\u0026quot;noty_layout\u0026quot;\u0026gt;\u0026lt;div id\u003d\u0026quot;noty_bar_703caf4b-8a53-423e-bffa-f6450d7c1a34\u0026quot; class\u003d\u0026quot;noty_bar noty_type__success noty_theme__mint noty_close_with_click noty_has_timeout noty_has_progressbar\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;noty_body\u0026quot;\u0026gt;Campaign project was successfully updated.\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;noty_progressbar\u0026quot; style\u003d\u0026quot;transition: width 10000ms linear; width: 0%;\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/campaign/assignments/5a27ccbe8ec62961e3f77fac");
formatter.after({
  "duration": 2375617993,
  "status": "passed"
});
formatter.before({
  "duration": 236105,
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
  "line": 100,
  "name": "Validate Submit Media Plan",
  "description": "",
  "id": "project--full-flow;validate-submit-media-plan",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 99,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 101,
  "name": "Testing- Submit Media Plan",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "Select \u0027Publish\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 103,
  "name": "Click user name",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "Click on username/email id \"saad@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 108,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Click on media plan",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 114,
  "name": "Rate the input brief- media input",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 117,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 119,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 120,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Click on username/email id \"saad@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 122,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Click on media plan",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "Enter name of publisher",
  "keyword": "Then "
});
formatter.step({
  "line": 134,
  "name": "Enter budget- media plan \"10000\"",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "Enter clicks \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "Enter visits \"20\"",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Enter inquiries \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "Click submit button- media plan output",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 140,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 142,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Click on username/email id \"saad@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 144,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 145,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 146,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 147,
  "name": "Click on media plan",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "Rate the output- media plan",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "Click deliver button",
  "keyword": "Then "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.testingSubmitMediaPlan()"
});
formatter.result({
  "duration": 2926870983,
  "status": "passed"
});
formatter.match({
  "location": "ChangeStatusSteps.selectPublish()"
});
formatter.result({
  "duration": 4937653679,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14159251695,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3739005570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "saad@amuratech.com",
      "offset": 28
    }
  ],
  "location": "LoginSteps.clickOnUsernameEmailId(String)"
});
formatter.result({
  "duration": 1243805960,
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
  "duration": 1193612353,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 4266691271,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnTaskSidebar()"
});
formatter.result({
  "duration": 2185511898,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlanInputSteps.clickOnMediaPlan()"
});
formatter.result({
  "duration": 3057447564,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnAssignedToMe()"
});
formatter.result({
  "duration": 1389161975,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.selectNewest()"
});
formatter.result({
  "duration": 2255993801,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickOnApply()"
});
formatter.result({
  "duration": 3005265943,
  "status": "passed"
});
formatter.match({
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "duration": 5133374224,
  "status": "passed"
});
formatter.match({
  "location": "MediaPlanInputSteps.rateTheInputBriefMediaInput()"
});
formatter.result({
  "duration": 2194527788,
  "status": "passed"
});
formatter.match({
  "location": "DesignReviewSteps.accept()"
});
formatter.result({
  "duration": 2195930213,
  "status": "passed"
});
formatter.match({
  "location": "AssignTaskSteps.selectAssignee()"
});
formatter.result({
  "duration": 2494103529,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 348 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"review-accept-modal\"]/div/div/div[2]/div[1]/div/div[2]/div/div[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myassignee(TestDriver.java:398)\n\tat org.selenium.iHub.pages.AssignTaskPage.selectAssignee(AssignTaskPage.java:16)\n\tat org.selenium.iHub.steps.AssignTaskSteps.selectAssignee(AssignTaskSteps.java:16)\n\tat ✽.Then Select assignee(assignmentFlow.feature:116)\n",
  "status": "failed"
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
      "val": "saad@amuratech.com",
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
  "location": "MediaPlanInputSteps.clickOnMediaPlan()"
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
  "location": "MediaPlanOutputSteps.enterNameOfPublisher()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 26
    }
  ],
  "location": "MediaPlanOutputSteps.enterBudgetMediaPlan(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 14
    }
  ],
  "location": "MediaPlanOutputSteps.enterClicks(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 14
    }
  ],
  "location": "MediaPlanOutputSteps.enterVisits(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 17
    }
  ],
  "location": "MediaPlanOutputSteps.enterInquiries(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MediaPlanOutputSteps.clickSubmitButtonMediaPlanOutput()"
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
      "val": "saad@amuratech.com",
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
  "location": "MediaPlanInputSteps.clickOnMediaPlan()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MediaPlanOutputSteps.rateTheOutputMediaPlan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443164359d65eb3bed40\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:33.655Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Media Planning\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Executive - Media Planning\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;saad@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Saad Bare\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;E\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;8600500909\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T11:01:01.501Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body class\u003d\u0026quot;modal-open\u0026quot; style\u003d\u0026quot;padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Saad Bare \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443164359d65eb3bed40\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Media Planning tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing- Submit media plan\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#GERA-MPN-2\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n\u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Input reviews\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;media_plan\u0026#x2F;reviews-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \n    \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot;\u0026gt;\n      Initial brief ready and task published. Saad Bare needs to add review for input-brief before accepting\u0026#x2F;rejecting the task.\n        \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n\n\n\n\n\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%;\u0026quot; title\u003d\u0026quot;Completed (5%)\u0026quot;\u0026gt;\n    5% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Accepted\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;AC (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 80%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;In Progress\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;IP (80%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Under Output Review\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;UOR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Delivered\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DE (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot;\u0026gt;View task details\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n            Update task status \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n                \u0026lt;li\u0026gt;\n                  \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-cancel-reason-modal\u0026quot; data-status\u003d\u0026quot;cancel\u0026quot;\u0026gt;Cancel\u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n          More \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n        \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;edit\u0026quot;\u0026gt;Edit task\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt;View project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_media_plan_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_task[event]\u0026quot; id\u003d\u0026quot;client_media_plan_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Task details \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign project details\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Client\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Gera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Brand\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         Brief Approved\n       \u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing- Submit media plan\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Campaign\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Shahbaz Wadera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       3.0\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Published\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;hr \u0026#x2F;\u0026gt;\n\u0026lt;form class\u003d\u0026quot;validate-form\u0026quot; id\u003d\u0026quot;new_client_media_plan_review\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;input value\u003d\u0026quot;input\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_type\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Review the task \u0026amp;amp; related brief\u0026lt;\u0026#x2F;label\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt; You can choose to mark anything as insufficient information, and request for more. If you review \u0026amp;amp; reject, the task is sent back to the creator; else you can accept and assign it to your team.\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;br \u0026#x2F;\u0026gt;\n  \n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;description\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Here is a high level objective for the campaign: Testing\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;htmlsafe\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Here is a high level objective for the campaign: Testing\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;due_date\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017 - Slot A\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            07\u0026#x2F;12\u0026#x2F;2017 - Slot A\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Marketing brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;marketing_brief_id\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task_reference\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; target\u003d\u0026quot;_blank\u0026quot;\u0026gt;\n      Testing- Submit initial campaign brief\n    \u0026lt;\u0026#x2F;a\u0026gt;\n\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\u0026lt;span class\u003d\u0026quot;translation_missing\u0026quot; title\u003d\u0026quot;translation missing: en.mongoid.attributes.client\u0026#x2F;media_plan\u0026#x2F;campaign.reference_document_links\u0026quot;\u0026gt;Reference Document Links\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_document_links\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Not specified\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;partial\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n\n    \n  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Rate this brief\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;br-wrapper br-theme-css-stars\u0026quot;\u0026gt;\u0026lt;select class\u003d\u0026quot;rating-field\u0026quot; name\u003d\u0026quot;client_media_plan_review[rating]\u0026quot; id\u003d\u0026quot;client_media_plan_review_rating\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;1\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;2\u0026quot;\u0026gt;2\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;3\u0026quot;\u0026gt;3\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;4\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;5\u0026quot;\u0026gt;5\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;br-widget\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;1\u0026quot; data-rating-text\u003d\u0026quot;1\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;2\u0026quot; data-rating-text\u003d\u0026quot;2\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;3\u0026quot; data-rating-text\u003d\u0026quot;3\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;4\u0026quot; data-rating-text\u003d\u0026quot;4\u0026quot; class\u003d\u0026quot;br-selected br-current\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;5\u0026quot; data-rating-text\u003d\u0026quot;5\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;div class\u003d\u0026quot;br-current-rating\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;actions\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;help-text\u0026quot; style\u003d\u0026quot;margin-bottom:10px;\u0026quot;\u0026gt;Only a 4 or 5 rating \u0026amp;amp; sufficient information across all fields, will allow you to Accept this task.\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;a class\u003d\u0026quot;btn btn-primary\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#review-accept-modal\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot; id\u003d\u0026quot;move_forward\u0026quot; style\u003d\u0026quot;\u0026quot;\u0026gt;\n        Accept\n      \u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Request changes\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; id\u003d\u0026quot;move_backward\u0026quot; data-disable-with\u003d\u0026quot;Request changes\u0026quot; style\u003d\u0026quot;display: none;\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal in\u0026quot; id\u003d\u0026quot;review-accept-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Accept review\u0026quot; style\u003d\u0026quot;display: block; padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;button\u0026gt;\n          \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Accept task\u0026lt;\u0026#x2F;h4\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select assignee\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;select name\u003d\u0026quot;task[assignee_id]\u0026quot; id\u003d\u0026quot;task_assignee_id\u0026quot; data-params\u003d\u0026quot;{\u0026amp;quot;fltrs\u0026amp;quot;:{\u0026amp;quot;dept\u0026amp;quot;:\u0026amp;quot;Media Planning\u0026amp;quot;}}\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; class\u003d\u0026quot;selectized\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full focus input-active dropdown-active has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;task_assignee_id-selectized\u0026quot; style\u003d\u0026quot;width: 4px; opacity: 1; position: relative; left: 0px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single\u0026quot; style\u003d\u0026quot;display: block; visibility: visible; width: 568px; top: 36px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;option active\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443164359d65eb3bed40\u0026quot;\u0026gt;Saad Bare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;option\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443264359d65eb3bed4e\u0026quot;\u0026gt;Pranav Waghmare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;If you want to assign this task to yourself or assign it later keep this field blank. Otherwise choose the assignee who will work on the task\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select start date (before 07\u0026#x2F;12\u0026#x2F;2017)\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;task[start_date]\u0026quot; id\u003d\u0026quot;task_start_date\u0026quot; value\u003d\u0026quot;\u0026quot; class\u003d\u0026quot;form-control datepicker date_validation\u0026quot; data-max-date\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-min-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-default-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Choose a date when you plan to get the work started. Start date is binding on the assignee and will impact bandwidth planning \u0026amp;amp; future resource allocation\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n          \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Assign\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Assign\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    Review.init($(\u0026quot;form\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div class\u003d\u0026quot;modal-backdrop in\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/media_plan/tasks/5a27cdcb8ec62961e3f78119/input/reviews/new");
formatter.after({
  "duration": 3140974355,
  "status": "passed"
});
formatter.before({
  "duration": 130036,
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
  "line": 156,
  "name": "Validate Plan Approved",
  "description": "",
  "id": "project--full-flow;validate-plan-approved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 155,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 157,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 160,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 162,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 163,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 164,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 166,
  "name": "Click \u0027Mark as plan approved\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12160272205,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"javascript:;\" class\u003d\"dropdown-toggle\" data-toggle\u003d\"dropdown\" role\u003d\"button\" aria-haspopup\u003d\"true\" aria-expanded\u003d\"false\"\u003e...\u003c/a\u003e is not clickable at point (1285, 25). Other element would receive the click: \u003cdiv class\u003d\"modal in\" id\u003d\"review-accept-modal\" role\u003d\"dialog\" aria-labelledby\u003d\"Accept review\" style\u003d\"display: block; padding-right: 15px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 95 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:157)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "ApprovedAndReadySteps.clickMarkAsPlanApproved()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443164359d65eb3bed40\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:33.655Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Media Planning\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Executive - Media Planning\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;saad@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Saad Bare\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;E\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;8600500909\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T11:01:01.501Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body class\u003d\u0026quot;modal-open\u0026quot; style\u003d\u0026quot;padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Saad Bare \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443164359d65eb3bed40\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Media Planning tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing- Submit media plan\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#GERA-MPN-2\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n\u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Input reviews\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;media_plan\u0026#x2F;reviews-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \n    \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot;\u0026gt;\n      Initial brief ready and task published. Saad Bare needs to add review for input-brief before accepting\u0026#x2F;rejecting the task.\n        \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n\n\n\n\n\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%;\u0026quot; title\u003d\u0026quot;Completed (5%)\u0026quot;\u0026gt;\n    5% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Accepted\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;AC (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 80%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;In Progress\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;IP (80%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Under Output Review\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;UOR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Delivered\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DE (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot;\u0026gt;View task details\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n            Update task status \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n                \u0026lt;li\u0026gt;\n                  \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-cancel-reason-modal\u0026quot; data-status\u003d\u0026quot;cancel\u0026quot;\u0026gt;Cancel\u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n          More \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n        \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;edit\u0026quot;\u0026gt;Edit task\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt;View project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_media_plan_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_task[event]\u0026quot; id\u003d\u0026quot;client_media_plan_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Task details \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign project details\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Client\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Gera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Brand\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         Brief Approved\n       \u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing- Submit media plan\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Campaign\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Shahbaz Wadera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       3.0\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Published\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;hr \u0026#x2F;\u0026gt;\n\u0026lt;form class\u003d\u0026quot;validate-form\u0026quot; id\u003d\u0026quot;new_client_media_plan_review\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;input value\u003d\u0026quot;input\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_type\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Review the task \u0026amp;amp; related brief\u0026lt;\u0026#x2F;label\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt; You can choose to mark anything as insufficient information, and request for more. If you review \u0026amp;amp; reject, the task is sent back to the creator; else you can accept and assign it to your team.\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;br \u0026#x2F;\u0026gt;\n  \n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;description\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Here is a high level objective for the campaign: Testing\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;htmlsafe\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Here is a high level objective for the campaign: Testing\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;due_date\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017 - Slot A\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            07\u0026#x2F;12\u0026#x2F;2017 - Slot A\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Marketing brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;marketing_brief_id\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task_reference\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; target\u003d\u0026quot;_blank\u0026quot;\u0026gt;\n      Testing- Submit initial campaign brief\n    \u0026lt;\u0026#x2F;a\u0026gt;\n\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\u0026lt;span class\u003d\u0026quot;translation_missing\u0026quot; title\u003d\u0026quot;translation missing: en.mongoid.attributes.client\u0026#x2F;media_plan\u0026#x2F;campaign.reference_document_links\u0026quot;\u0026gt;Reference Document Links\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_document_links\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Not specified\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;partial\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n\n    \n  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Rate this brief\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;br-wrapper br-theme-css-stars\u0026quot;\u0026gt;\u0026lt;select class\u003d\u0026quot;rating-field\u0026quot; name\u003d\u0026quot;client_media_plan_review[rating]\u0026quot; id\u003d\u0026quot;client_media_plan_review_rating\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;1\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;2\u0026quot;\u0026gt;2\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;3\u0026quot;\u0026gt;3\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;4\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;5\u0026quot;\u0026gt;5\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;br-widget\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;1\u0026quot; data-rating-text\u003d\u0026quot;1\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;2\u0026quot; data-rating-text\u003d\u0026quot;2\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;3\u0026quot; data-rating-text\u003d\u0026quot;3\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;4\u0026quot; data-rating-text\u003d\u0026quot;4\u0026quot; class\u003d\u0026quot;br-selected br-current\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;5\u0026quot; data-rating-text\u003d\u0026quot;5\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;div class\u003d\u0026quot;br-current-rating\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;actions\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;help-text\u0026quot; style\u003d\u0026quot;margin-bottom:10px;\u0026quot;\u0026gt;Only a 4 or 5 rating \u0026amp;amp; sufficient information across all fields, will allow you to Accept this task.\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;a class\u003d\u0026quot;btn btn-primary\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#review-accept-modal\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot; id\u003d\u0026quot;move_forward\u0026quot; style\u003d\u0026quot;\u0026quot;\u0026gt;\n        Accept\n      \u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Request changes\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; id\u003d\u0026quot;move_backward\u0026quot; data-disable-with\u003d\u0026quot;Request changes\u0026quot; style\u003d\u0026quot;display: none;\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal in\u0026quot; id\u003d\u0026quot;review-accept-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Accept review\u0026quot; style\u003d\u0026quot;display: block; padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;button\u0026gt;\n          \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Accept task\u0026lt;\u0026#x2F;h4\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select assignee\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;select name\u003d\u0026quot;task[assignee_id]\u0026quot; id\u003d\u0026quot;task_assignee_id\u0026quot; data-params\u003d\u0026quot;{\u0026amp;quot;fltrs\u0026amp;quot;:{\u0026amp;quot;dept\u0026amp;quot;:\u0026amp;quot;Media Planning\u0026amp;quot;}}\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; class\u003d\u0026quot;selectized\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full focus input-active dropdown-active has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;task_assignee_id-selectized\u0026quot; style\u003d\u0026quot;width: 4px; opacity: 1; position: relative; left: 0px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single\u0026quot; style\u003d\u0026quot;display: block; visibility: visible; width: 568px; top: 36px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;option active\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443164359d65eb3bed40\u0026quot;\u0026gt;Saad Bare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;option\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443264359d65eb3bed4e\u0026quot;\u0026gt;Pranav Waghmare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;If you want to assign this task to yourself or assign it later keep this field blank. Otherwise choose the assignee who will work on the task\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select start date (before 07\u0026#x2F;12\u0026#x2F;2017)\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;task[start_date]\u0026quot; id\u003d\u0026quot;task_start_date\u0026quot; value\u003d\u0026quot;\u0026quot; class\u003d\u0026quot;form-control datepicker date_validation\u0026quot; data-max-date\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-min-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-default-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Choose a date when you plan to get the work started. Start date is binding on the assignee and will impact bandwidth planning \u0026amp;amp; future resource allocation\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n          \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Assign\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Assign\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    Review.init($(\u0026quot;form\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div class\u003d\u0026quot;modal-backdrop in\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/media_plan/tasks/5a27cdcb8ec62961e3f78119/input/reviews/new");
formatter.after({
  "duration": 3025776377,
  "status": "passed"
});
formatter.before({
  "duration": 187038,
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
  "line": 169,
  "name": "Validate Testing- Generate Invoice",
  "description": "",
  "id": "project--full-flow;validate-testing--generate-invoice",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 168,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 170,
      "value": "#    Given  Launch the url \"\""
    },
    {
      "line": 171,
      "value": "#    When Click on username/email id \"shahbaz@amuratech.com\""
    },
    {
      "line": 172,
      "value": "#    And Click on password \"amura!@#\""
    },
    {
      "line": 173,
      "value": "#    Then Click on sign in button"
    },
    {
      "line": 174,
      "value": "#    When Click on projects"
    },
    {
      "line": 175,
      "value": "#    Then Select newest"
    },
    {
      "line": 176,
      "value": "#    And Click on apply"
    },
    {
      "line": 177,
      "value": "#    Then Click View details"
    }
  ],
  "line": 178,
  "name": "Click on Testing- Generate Advertising Invoice",
  "keyword": "When "
});
formatter.step({
  "line": 179,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 180,
  "name": "Enter Amount \"100000\"",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "Click \u0027Save\u0027 button- Finance input",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "When "
});
formatter.step({
  "line": 183,
  "name": "Select \u0027Publish\u0027- Finance",
  "keyword": "Then "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#    Then Click the alert"
    }
  ],
  "line": 185,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 186,
  "name": "Click \u0027Mark invoice raised\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 188,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "Launch the url \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "Click on username/email id \"mrudula@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 191,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 194,
  "name": "Click Finance",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 197,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "Click \u0027Add payment details\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 200,
  "name": "Enter Payment method \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "Enter Usable budget \"10000\"",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "Enter Instrument number \"10\"",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "Enter Received on",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "Click \u0027Save\u0027 button- Finance",
  "keyword": "Then "
});
formatter.step({
  "line": 205,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 206,
  "name": "Click \u0027Money received\u0027 link",
  "keyword": "And "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickOnTestingGenerateAdvertisingInvoice()"
});
formatter.result({
  "duration": 63655384,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a\"}\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 63 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:492)\n\tat org.selenium.iHub.pages.RelatedTasksOfProjectPage.clickOnTestingGenerateAdvertisingInvoice(RelatedTasksOfProjectPage.java:32)\n\tat org.selenium.iHub.steps.RelatedTasksOfProjectSteps.clickOnTestingGenerateAdvertisingInvoice(RelatedTasksOfProjectSteps.java:31)\n\tat ✽.When Click on Testing- Generate Advertising Invoice(assignmentFlow.feature:178)\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100000",
      "offset": 14
    }
  ],
  "location": "FinanceInputSteps.enterAmount(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FinanceInputSteps.clickSaveButtonFinanceInput()"
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
  "location": "ChangeStatusSteps.selectPublishFinance()"
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
  "location": "ApprovedAndReadySteps.clickMarkInvoiceRaised()"
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
      "val": "",
      "offset": 16
    }
  ],
  "location": "LoginSteps.launchTheUrl(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mrudula@amuratech.com",
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
  "location": "DepartmentTypesSteps.clickFinance()"
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
  "location": "FinanceOutputSteps.clickAddPaymentDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 22
    }
  ],
  "location": "FinanceOutputSteps.enterPaymentMethod(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10000",
      "offset": 21
    }
  ],
  "location": "FinanceOutputSteps.enterUsableBudget(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    }
  ],
  "location": "FinanceOutputSteps.enterInstrumentNumber(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FinanceOutputSteps.enterReceivedOn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FinanceOutputSteps.clickSaveButtonFinance()"
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
  "location": "ApprovedAndReadySteps.clickMoneyReceivedLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443164359d65eb3bed40\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:33.655Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Media Planning\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Executive - Media Planning\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;saad@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Saad Bare\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;E\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;8600500909\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T11:01:01.501Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body class\u003d\u0026quot;modal-open\u0026quot; style\u003d\u0026quot;padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Saad Bare \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443164359d65eb3bed40\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Media Planning tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing- Submit media plan\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#GERA-MPN-2\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n\u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Input reviews\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;media_plan\u0026#x2F;reviews-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \n    \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot;\u0026gt;\n      Initial brief ready and task published. Saad Bare needs to add review for input-brief before accepting\u0026#x2F;rejecting the task.\n        \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n\n\n\n\n\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%;\u0026quot; title\u003d\u0026quot;Completed (5%)\u0026quot;\u0026gt;\n    5% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Accepted\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;AC (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 80%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;In Progress\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;IP (80%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Under Output Review\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;UOR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Delivered\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DE (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot;\u0026gt;View task details\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n            Update task status \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n                \u0026lt;li\u0026gt;\n                  \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-cancel-reason-modal\u0026quot; data-status\u003d\u0026quot;cancel\u0026quot;\u0026gt;Cancel\u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n          More \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n        \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;edit\u0026quot;\u0026gt;Edit task\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt;View project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_media_plan_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_task[event]\u0026quot; id\u003d\u0026quot;client_media_plan_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Task details \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign project details\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Client\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Gera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Brand\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         Brief Approved\n       \u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing- Submit media plan\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Campaign\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Shahbaz Wadera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       3.0\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Published\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;hr \u0026#x2F;\u0026gt;\n\u0026lt;form class\u003d\u0026quot;validate-form\u0026quot; id\u003d\u0026quot;new_client_media_plan_review\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;input value\u003d\u0026quot;input\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_type\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Review the task \u0026amp;amp; related brief\u0026lt;\u0026#x2F;label\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt; You can choose to mark anything as insufficient information, and request for more. If you review \u0026amp;amp; reject, the task is sent back to the creator; else you can accept and assign it to your team.\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;br \u0026#x2F;\u0026gt;\n  \n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;description\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Here is a high level objective for the campaign: Testing\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;htmlsafe\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Here is a high level objective for the campaign: Testing\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;due_date\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017 - Slot A\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            07\u0026#x2F;12\u0026#x2F;2017 - Slot A\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Marketing brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;marketing_brief_id\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task_reference\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; target\u003d\u0026quot;_blank\u0026quot;\u0026gt;\n      Testing- Submit initial campaign brief\n    \u0026lt;\u0026#x2F;a\u0026gt;\n\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\u0026lt;span class\u003d\u0026quot;translation_missing\u0026quot; title\u003d\u0026quot;translation missing: en.mongoid.attributes.client\u0026#x2F;media_plan\u0026#x2F;campaign.reference_document_links\u0026quot;\u0026gt;Reference Document Links\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_document_links\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Not specified\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;partial\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n\n    \n  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Rate this brief\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;br-wrapper br-theme-css-stars\u0026quot;\u0026gt;\u0026lt;select class\u003d\u0026quot;rating-field\u0026quot; name\u003d\u0026quot;client_media_plan_review[rating]\u0026quot; id\u003d\u0026quot;client_media_plan_review_rating\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;1\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;2\u0026quot;\u0026gt;2\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;3\u0026quot;\u0026gt;3\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;4\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;5\u0026quot;\u0026gt;5\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;br-widget\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;1\u0026quot; data-rating-text\u003d\u0026quot;1\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;2\u0026quot; data-rating-text\u003d\u0026quot;2\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;3\u0026quot; data-rating-text\u003d\u0026quot;3\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;4\u0026quot; data-rating-text\u003d\u0026quot;4\u0026quot; class\u003d\u0026quot;br-selected br-current\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;5\u0026quot; data-rating-text\u003d\u0026quot;5\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;div class\u003d\u0026quot;br-current-rating\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;actions\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;help-text\u0026quot; style\u003d\u0026quot;margin-bottom:10px;\u0026quot;\u0026gt;Only a 4 or 5 rating \u0026amp;amp; sufficient information across all fields, will allow you to Accept this task.\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;a class\u003d\u0026quot;btn btn-primary\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#review-accept-modal\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot; id\u003d\u0026quot;move_forward\u0026quot; style\u003d\u0026quot;\u0026quot;\u0026gt;\n        Accept\n      \u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Request changes\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; id\u003d\u0026quot;move_backward\u0026quot; data-disable-with\u003d\u0026quot;Request changes\u0026quot; style\u003d\u0026quot;display: none;\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal in\u0026quot; id\u003d\u0026quot;review-accept-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Accept review\u0026quot; style\u003d\u0026quot;display: block; padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;button\u0026gt;\n          \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Accept task\u0026lt;\u0026#x2F;h4\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select assignee\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;select name\u003d\u0026quot;task[assignee_id]\u0026quot; id\u003d\u0026quot;task_assignee_id\u0026quot; data-params\u003d\u0026quot;{\u0026amp;quot;fltrs\u0026amp;quot;:{\u0026amp;quot;dept\u0026amp;quot;:\u0026amp;quot;Media Planning\u0026amp;quot;}}\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; class\u003d\u0026quot;selectized\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full focus input-active dropdown-active has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;task_assignee_id-selectized\u0026quot; style\u003d\u0026quot;width: 4px; opacity: 1; position: relative; left: 0px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single\u0026quot; style\u003d\u0026quot;display: block; visibility: visible; width: 568px; top: 36px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;option active\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443164359d65eb3bed40\u0026quot;\u0026gt;Saad Bare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;option\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443264359d65eb3bed4e\u0026quot;\u0026gt;Pranav Waghmare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;If you want to assign this task to yourself or assign it later keep this field blank. Otherwise choose the assignee who will work on the task\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select start date (before 07\u0026#x2F;12\u0026#x2F;2017)\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;task[start_date]\u0026quot; id\u003d\u0026quot;task_start_date\u0026quot; value\u003d\u0026quot;\u0026quot; class\u003d\u0026quot;form-control datepicker date_validation\u0026quot; data-max-date\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-min-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-default-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Choose a date when you plan to get the work started. Start date is binding on the assignee and will impact bandwidth planning \u0026amp;amp; future resource allocation\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n          \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Assign\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Assign\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    Review.init($(\u0026quot;form\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div class\u003d\u0026quot;modal-backdrop in\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/media_plan/tasks/5a27cdcb8ec62961e3f78119/input/reviews/new");
formatter.after({
  "duration": 2939977193,
  "status": "passed"
});
formatter.before({
  "duration": 111907,
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
  "line": 209,
  "name": "Validate Testing- Generate Sitemap",
  "description": "",
  "id": "project--full-flow;validate-testing--generate-sitemap",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 208,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 212,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 213,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 214,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 215,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 216,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 217,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 218,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "Click View details",
  "keyword": "Then "
});
formatter.step({
  "line": 220,
  "name": "Click on Testing- Generate Sitemap",
  "keyword": "When "
});
formatter.step({
  "line": 221,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 222,
  "name": "Click \u0027Save\u0027 button- Content Sitemap Input",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 229,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 231,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 232,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 234,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 235,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 237,
  "name": "Rate the brief- Content Sitemap Input",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "Accept",
  "keyword": "Then "
});
formatter.step({
  "line": 239,
  "name": "Select assignee",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 242,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 243,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "Click on username/email id \"girish@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 246,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 247,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 248,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 249,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 250,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 251,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 252,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 253,
  "name": "Click on Edit",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 255,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "Enter Thought process \"Testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 258,
  "name": "Upload detailed sitemap doc",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "Click \u0027Save\u0027 button- Content Sitemap Output",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 261,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "Click user name",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 265,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 266,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 268,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 269,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 272,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "Click review link",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "Enter \u0027Does the content cater to given TG\u0027 \"Yes\"- Content Sitemap",
  "keyword": "Then "
});
formatter.step({
  "line": 275,
  "name": "Enter \u0027Has the brief been followed\u0027 \"Yes\"- Content Sitemap",
  "keyword": "And "
});
formatter.step({
  "line": 276,
  "name": "Upload Reference document- Content Output  Review",
  "keyword": "And "
});
formatter.step({
  "line": 277,
  "name": "Rate the output- Content Sitemap",
  "keyword": "Then "
});
formatter.step({
  "line": 278,
  "name": "Click deliver button",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12079229889,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca href\u003d\"javascript:;\" class\u003d\"dropdown-toggle\" data-toggle\u003d\"dropdown\" role\u003d\"button\" aria-haspopup\u003d\"true\" aria-expanded\u003d\"false\"\u003e...\u003c/a\u003e is not clickable at point (1285, 25). Other element would receive the click: \u003cdiv class\u003d\"modal in\" id\u003d\"review-accept-modal\" role\u003d\"dialog\" aria-labelledby\u003d\"Accept review\" style\u003d\"display: block; padding-right: 15px;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 44 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:210)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "EditAndReviewLinkSteps.clickViewDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickOnTestingGenerateSitemap()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSitemapInputSteps.clickSaveButtonContentSitemapInput()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSitemapInputSteps.rateTheBriefContentSitemapInput()"
});
formatter.result({
  "status": "skipped"
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
      "val": "girish@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "arguments": [
    {
      "val": "Testing",
      "offset": 23
    }
  ],
  "location": "SocialPlanOutputSteps.enterThoughtProcess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSitemapOutputSteps.uploadDetailedSitemapDoc()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSitemapOutputSteps.clickSaveButtonContentSitemapOutput()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 44
    }
  ],
  "location": "ContentSitemapOutputSteps.enterDoesTheContentCaterToGivenTGContentSitemap(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 37
    }
  ],
  "location": "ContentSitemapOutputSteps.enterHasTheBriefBeenFollowedContentSitemap(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSEOPlanOutputSteps.uploadReferenceDocumentContentOutputReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSitemapOutputSteps.rateTheOutputContentSitemap()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png");
formatter.write("Page source:\u0026lt;!DOCTYPE html\u0026gt;\u0026lt;html xmlns\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;www.w3.org\u0026#x2F;1999\u0026#x2F;xhtml\u0026quot;\u0026gt;\u0026lt;head\u0026gt;\n    \u0026lt;title\u0026gt;ihub\u0026lt;\u0026#x2F;title\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;csrf-param\u0026quot; content\u003d\u0026quot;authenticity_token\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;meta name\u003d\u0026quot;csrf-token\u0026quot; content\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta charset\u003d\u0026quot;utf-8\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta http-equiv\u003d\u0026quot;X-UA-Compatible\u0026quot; content\u003d\u0026quot;IE\u003dedge\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;meta name\u003d\u0026quot;viewport\u0026quot; content\u003d\u0026quot;width\u003ddevice-width, initial-scale\u003d1, shrink-to-fit\u003dno\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;link href\u003d\u0026quot;https:\u0026#x2F;\u0026#x2F;fonts.googleapis.com\u0026#x2F;css?family\u003dRubik\u0026quot; rel\u003d\u0026quot;stylesheet\u0026quot; \u0026#x2F;\u0026gt;\n\n    \u0026lt;link rel\u003d\u0026quot;stylesheet\u0026quot; media\u003d\u0026quot;all\u0026quot; href\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-c7934f6f6b121e26cfc32765647d78ea130f62c2c91b1aa0547198cfbcda89c5.css\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;script src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;application-782b039993a3109c91d620c22b15cf2a518319410f55323d955446c33f7a84df.js\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n    var App \u003d {};\n    App.current_user \u003d {\u0026quot;_id\u0026quot;:\u0026quot;59ca443164359d65eb3bed40\u0026quot;,\u0026quot;available\u0026quot;:true,\u0026quot;created_at\u0026quot;:\u0026quot;2017-09-26T12:12:33.655Z\u0026quot;,\u0026quot;department\u0026quot;:\u0026quot;Media Planning\u0026quot;,\u0026quot;designation\u0026quot;:\u0026quot;Executive - Media Planning\u0026quot;,\u0026quot;email\u0026quot;:\u0026quot;saad@amuratech.com\u0026quot;,\u0026quot;employee_id\u0026quot;:null,\u0026quot;meeting_ids\u0026quot;:[],\u0026quot;name\u0026quot;:\u0026quot;Saad Bare\u0026quot;,\u0026quot;officer_level\u0026quot;:\u0026quot;E\u0026quot;,\u0026quot;phone\u0026quot;:\u0026quot;8600500909\u0026quot;,\u0026quot;provider\u0026quot;:null,\u0026quot;provider_id\u0026quot;:null,\u0026quot;status\u0026quot;:\u0026quot;active\u0026quot;,\u0026quot;updated_at\u0026quot;:\u0026quot;2017-12-06T11:01:01.501Z\u0026quot;};\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;  \u0026lt;\u0026#x2F;head\u0026gt;\n\n  \u0026lt;body class\u003d\u0026quot;modal-open\u0026quot; style\u003d\u0026quot;padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;nav class\u003d\u0026quot;navbar navbar-default navbar-fixed-top top-navigation\u0026quot;\u0026gt;\n      \u0026lt;ul class\u003d\u0026quot;nav navbar-nav navbar-left\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;navbar-form navbar-left\u0026quot; id\u003d\u0026quot;global-search-container\u0026quot;\u0026gt;\n          \u0026lt;span class\u003d\u0026quot;global-search-input-wrap\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-10 col-sm-10 col-md-10 col-lg-12\u0026quot;\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control float-left\u0026quot; id\u003d\u0026quot;global-search-input\u0026quot; placeholder\u003d\u0026quot;Task search (#XXXX-XXX-ID)\u0026quot; value\u003d\u0026quot;\u0026quot; \u0026#x2F;\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;col-xs-2 col-sm-2 col-md-2 toggle-ihub-menu-item\u0026quot;\u0026gt;\n                \u0026lt;i class\u003d\u0026quot;mdi mdi-menu\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;span\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;global-search-dropdown hidden\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;grouped-nav pull-right\u0026quot;\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;nav navbar-nav\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;dropdown-toggle\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; role\u003d\u0026quot;button\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;Hi, Saad Bare \u0026lt;span class\u003d\u0026quot;caret\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot;\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;profile\u0026quot;\u0026gt;Update Profile\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;59ca443164359d65eb3bed40\u0026#x2F;change_password\u0026quot;\u0026gt;Update password\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;users\u0026#x2F;sign_out\u0026quot; data-method\u003d\u0026quot;delete\u0026quot;\u0026gt;Sign out\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;nav\u0026gt;\n    \u0026lt;div id\u003d\u0026quot;wrapper\u0026quot;\u0026gt;\n      \u0026lt;!-- Sidebar --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;sidebar-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;i-logo\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\n            \u0026lt;img src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;ihub-logo-1244248a95175d5ee61dd826982b7c62b1555bec0b4390461974d28645663f5e.png\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;sidebar-nav nav-stacked\u0026quot;\u0026gt;\n          \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;http:\u0026#x2F;\u0026#x2F;staging.work.withamura.com\u0026#x2F;dashboard\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-view-dashboard\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Dashboard\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-domain\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Clients\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; href\u003d\u0026quot;\u0026#x2F;assignments\u0026quot;\u0026gt;\u0026lt;i class\u003d\u0026quot;mdi mdi-book-open\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Projects\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n          \u0026lt;li class\u003d\u0026quot;dropdown  \u0026quot;\u0026gt;\n            \u0026lt;a class\u003d\u0026quot;nav-link\u0026quot; data-toggle\u003d\u0026quot;collapse\u0026quot; href\u003d\u0026quot;#taskLinks\u0026quot;\u0026gt;\n              \u0026lt;i class\u003d\u0026quot;mdi mdi-view-list\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt; Tasks\n            \u0026lt;\u0026#x2F;a\u0026gt;\n            \u0026lt;ul class\u003d\u0026quot;collapse\u0026quot; id\u003d\u0026quot;taskLinks\u0026quot;\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;all\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;All\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;content\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Copy\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;design\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Design\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;finance\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Finance\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Media Planning\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;campaign\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Paid Media\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;seo\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;SEO\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;social\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Social Media Marketing\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n                \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;development\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt;Web Development\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n              \u0026lt;li class\u003d\u0026quot;\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;meeting\u0026#x2F;tasks\u0026#x2F;\u0026quot;\u0026gt; Meeting\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n            \u0026lt;\u0026#x2F;ul\u0026gt;\n          \u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;!-- \u0026#x2F;#sidebar-wrapper --\u0026gt;\n      \u0026lt;!-- Page Content --\u0026gt;\n      \u0026lt;div id\u003d\u0026quot;page-content-wrapper\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n            \u0026lt;nav class\u003d\u0026quot;breadcrumb\u0026quot;\u0026gt;\n              \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Clients\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Gera\u0026lt;\u0026#x2F;a\u0026gt;\n\n\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Media Planning tasks\u0026lt;\u0026#x2F;a\u0026gt;\n  \u0026lt;a title\u003d\u0026quot;Testing- Submit media plan\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;#GERA-MPN-2\u0026lt;\u0026#x2F;a\u0026gt;\n\n\n\u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;breadcrumb-item\u0026quot;\u0026gt;Input reviews\u0026lt;\u0026#x2F;a\u0026gt;\n\n            \u0026lt;\u0026#x2F;nav\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;container-fluid clients\u0026#x2F;media_plan\u0026#x2F;reviews-wrapper\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-9 resource-details-container\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n  \n\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \n    \u0026lt;div class\u003d\u0026quot;alert alert-warning\u0026quot;\u0026gt;\n      Initial brief ready and task published. Saad Bare needs to add review for input-brief before accepting\u0026#x2F;rejecting the task.\n        \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n\n\n\n\n\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-sm-12 col-md-12 progress-bar-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;task-progress-label\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;\n    Task progress\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;progress\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-success\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width:5%;\u0026quot; title\u003d\u0026quot;Completed (5%)\u0026quot;\u0026gt;\n    5% Done\n  \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-2\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Accepted\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;AC (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-3\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 80%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;In Progress\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;IP (80%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-4\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Under Output Review\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;UOR (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;progress-bar progress-bar-5\u0026quot; role\u003d\u0026quot;progressbar\u0026quot; aria-valuemin\u003d\u0026quot;0\u0026quot; aria-valuemax\u003d\u0026quot;100\u0026quot; style\u003d\u0026quot;width: 5%;\u0026quot; data-toggle\u003d\u0026quot;tooltip\u0026quot; data-placement\u003d\u0026quot;top\u0026quot; title\u003d\u0026quot;Delivered\u0026quot;\u0026gt;\n        \u0026lt;small\u0026gt;DE (5%)\u0026lt;\u0026#x2F;small\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;row task-action-bar\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;navigation-links-container\u0026quot;\u0026gt;\n  \u0026lt;ul class\u003d\u0026quot;resource-navigation-links\u0026quot;\u0026gt;\n    \n        \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot;\u0026gt;View task details\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026#x2F;new\u0026quot;\u0026gt;Review input brief\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n\n        \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n          \u0026lt;a class\u003d\u0026quot;btn btn-primary btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n            Update task status \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n          \u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n                \u0026lt;li\u0026gt;\n                  \u0026lt;a data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#client-task-cancel-reason-modal\u0026quot; data-status\u003d\u0026quot;cancel\u0026quot;\u0026gt;Cancel\u0026lt;\u0026#x2F;a\u0026gt;\n                \u0026lt;\u0026#x2F;li\u0026gt;\n          \u0026lt;\u0026#x2F;ul\u0026gt;\n        \u0026lt;\u0026#x2F;li\u0026gt;\n\n      \u0026lt;li class\u003d\u0026quot;dropdown\u0026quot;\u0026gt;\n        \u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;javascript:;\u0026quot; data-toggle\u003d\u0026quot;dropdown\u0026quot; aria-haspopup\u003d\u0026quot;true\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot;\u0026gt;\n          More \u0026lt;i class\u003d\u0026quot;mdi mdi-menu-down\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;i\u0026gt;\n        \u0026lt;\u0026#x2F;a\u0026gt;\n        \u0026lt;ul class\u003d\u0026quot;dropdown-menu\u0026quot; aria-labelledby\u003d\u0026quot;dropdownMenuButton\u0026quot;\u0026gt;\n          \u0026lt;li\u0026gt;\u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;edit\u0026quot;\u0026gt;Edit task\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n        \u0026lt;\u0026#x2F;ul\u0026gt;\n      \u0026lt;\u0026#x2F;li\u0026gt;\n\n\n\n\n      \u0026lt;li class\u003d\u0026quot;pull-right\u0026quot;\u0026gt;\u0026lt;a class\u003d\u0026quot;btn btn-default btn-xs\u0026quot; href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;5a27ccbe8ec62961e3f77fac\u0026quot;\u0026gt;View project\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;\u0026#x2F;li\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;client-task-cancel-reason-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Cancel task\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n        \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Cancel Task\u0026lt;\u0026#x2F;h4\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n        \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;col-md-12\u0026quot;\u0026gt;\n              \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n                \u0026lt;label class\u003d\u0026quot;control-label label-required\u0026quot; for\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot;\u0026gt;Task cancellation reason\u0026lt;\u0026#x2F;label\u0026gt;\n                \u0026lt;input class\u003d\u0026quot;form-control\u0026quot; required\u003d\u0026quot;required\u0026quot; type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;client_media_plan_task[task_cancellation_reason]\u0026quot; id\u003d\u0026quot;client_media_plan_task_task_cancellation_reason\u0026quot; \u0026#x2F;\u0026gt;\n                \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please choose a reason to cancel this task\u0026lt;\u0026#x2F;p\u0026gt;\n              \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Cancel Task\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; data-disable-with\u003d\u0026quot;Cancel Task\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;\u0026#x2F;ul\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;div class\u003d\u0026quot;hide\u0026quot; id\u003d\u0026quot;task-status-change-form\u0026quot;\u0026gt;\n  \u0026lt;form class\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;edit_client_media_plan_task_5a27cdcb8ec62961e3f78119\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;_method\u0026quot; value\u003d\u0026quot;patch\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input class\u003d\u0026quot;event_field\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_task[event]\u0026quot; id\u003d\u0026quot;client_media_plan_task_event\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;commit\u0026quot; value\u003d\u0026quot;Save\u0026quot; data-disable-with\u003d\u0026quot;Save\u0026quot; \u0026#x2F;\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-container\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;panel panel-default\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Task details \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container resource-show-page\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Campaign project details\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;padded-show-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Name\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Client\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Gera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Brand\n     \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;col-md-3\u0026quot;\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Project stage\u0026lt;\u0026#x2F;div\u0026gt;\n       \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         Brief Approved\n       \u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Testing- Submit media plan\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Campaign\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Sub task type\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Creator\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Shahbaz Wadera\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;row\u0026quot;\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Estimated hours\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       3.0\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Status\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n       Published\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;div class\u003d\u0026quot;col-md-4\u0026quot;\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;small-title\u0026quot;\u0026gt;Tags\u0026lt;\u0026#x2F;div\u0026gt;\n     \u0026lt;div class\u003d\u0026quot;capitalize\u0026quot;\u0026gt;\n         -\n     \u0026lt;\u0026#x2F;div\u0026gt;\n   \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;hr \u0026#x2F;\u0026gt;\n\u0026lt;form class\u003d\u0026quot;validate-form\u0026quot; id\u003d\u0026quot;new_client_media_plan_review\u0026quot; action\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;media_plan\u0026#x2F;tasks\u0026#x2F;5a27cdcb8ec62961e3f78119\u0026#x2F;input\u0026#x2F;reviews\u0026quot; accept-charset\u003d\u0026quot;UTF-8\u0026quot; method\u003d\u0026quot;post\u0026quot;\u0026gt;\u0026lt;input name\u003d\u0026quot;utf8\u0026quot; type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;✓\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;authenticity_token\u0026quot; value\u003d\u0026quot;XUlVG5EweRi18cfQ4Xq2TqSoMHnn675eh3dODM\u0026#x2F;QmQSCsS68aGXPpYDKQFX4K91QLsoRcxnAr6tXaMCsL8nu7Q\u003d\u003d\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;input value\u003d\u0026quot;input\u0026quot; type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_type\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Review the task \u0026amp;amp; related brief\u0026lt;\u0026#x2F;label\u0026gt;\u0026lt;br \u0026#x2F;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt; You can choose to mark anything as insufficient information, and request for more. If you review \u0026amp;amp; reject, the task is sent back to the creator; else you can accept and assign it to your team.\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;br \u0026#x2F;\u0026gt;\n  \n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;description\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Here is a high level objective for the campaign: Testing\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;htmlsafe\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Here is a high level objective for the campaign: Testing\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][0][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_0_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Due date\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;due_date\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017 - Slot A\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            07\u0026#x2F;12\u0026#x2F;2017 - Slot A\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][1][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_1_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Marketing brief\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;marketing_brief_id\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;task_reference\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;\u0026#x2F;clients\u0026#x2F;59ca739164359d71a3b339ed\u0026#x2F;marketing\u0026#x2F;tasks\u0026#x2F;5a27ccc28ec62961e3f77fb2\u0026quot; target\u003d\u0026quot;_blank\u0026quot;\u0026gt;\n      Testing- Submit initial campaign brief\n    \u0026lt;\u0026#x2F;a\u0026gt;\n\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][2][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_2_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;\u0026lt;span class\u003d\u0026quot;translation_missing\u0026quot; title\u003d\u0026quot;translation missing: en.mongoid.attributes.client\u0026#x2F;media_plan\u0026#x2F;campaign.reference_document_links\u0026quot;\u0026gt;Reference Document Links\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_document_links\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;Not specified\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;self\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][3][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_3_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n      \u0026lt;div class\u003d\u0026quot;panel panel-default review-field-container\u0026quot;\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-heading\u0026quot;\u0026gt;Additional documents\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;panel-body\u0026quot;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][field_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_field_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][value]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_value\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;partial\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][view_type]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_view_type\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_id]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_id\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;reference_documents\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][relation_name]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_relation_name\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; value\u003d\u0026quot;input_document\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][related_parent_key]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_related_parent_key\u0026quot; \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;review-field-value\u0026quot;\u0026gt;\n            Not specified\n\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;true\u0026quot; checked\u003d\u0026quot;checked\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_true\u0026quot; \u0026#x2F;\u0026gt; Sufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n      \u0026lt;label class\u003d\u0026quot;radio-inline\u0026quot;\u0026gt;\n        \u0026lt;input class\u003d\u0026quot;correct\u0026quot; type\u003d\u0026quot;radio\u0026quot; value\u003d\u0026quot;false\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][correct]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_correct_false\u0026quot; \u0026#x2F;\u0026gt; Insufficient information\n      \u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;form-group hidden\u0026quot;\u0026gt;\n      \u0026lt;textarea class\u003d\u0026quot;comments form-control\u0026quot; placeholder\u003d\u0026quot;What other information do you need?\u0026quot; name\u003d\u0026quot;client_media_plan_review[review_fields_attributes][4][comments]\u0026quot; id\u003d\u0026quot;client_media_plan_review_review_fields_attributes_4_comments\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;textarea\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Please mention what is incorrect\u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n\n    \u0026lt;hr \u0026#x2F;\u0026gt;\n\n    \n  \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n    \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Rate this brief\u0026lt;\u0026#x2F;label\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;br-wrapper br-theme-css-stars\u0026quot;\u0026gt;\u0026lt;select class\u003d\u0026quot;rating-field\u0026quot; name\u003d\u0026quot;client_media_plan_review[rating]\u0026quot; id\u003d\u0026quot;client_media_plan_review_rating\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;1\u0026quot;\u0026gt;1\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;2\u0026quot;\u0026gt;2\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;3\u0026quot;\u0026gt;3\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;4\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;option\u0026gt;\n\u0026lt;option value\u003d\u0026quot;5\u0026quot;\u0026gt;5\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;br-widget\u0026quot;\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;1\u0026quot; data-rating-text\u003d\u0026quot;1\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;2\u0026quot; data-rating-text\u003d\u0026quot;2\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;3\u0026quot; data-rating-text\u003d\u0026quot;3\u0026quot; class\u003d\u0026quot;br-selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;4\u0026quot; data-rating-text\u003d\u0026quot;4\u0026quot; class\u003d\u0026quot;br-selected br-current\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;a href\u003d\u0026quot;#\u0026quot; data-rating-value\u003d\u0026quot;5\u0026quot; data-rating-text\u003d\u0026quot;5\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;a\u0026gt;\u0026lt;div class\u003d\u0026quot;br-current-rating\u0026quot;\u0026gt;4\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \u0026lt;div class\u003d\u0026quot;actions\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;help-text\u0026quot; style\u003d\u0026quot;margin-bottom:10px;\u0026quot;\u0026gt;Only a 4 or 5 rating \u0026amp;amp; sufficient information across all fields, will allow you to Accept this task.\u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;a class\u003d\u0026quot;btn btn-primary\u0026quot; data-toggle\u003d\u0026quot;modal\u0026quot; data-target\u003d\u0026quot;#review-accept-modal\u0026quot; aria-expanded\u003d\u0026quot;false\u0026quot; id\u003d\u0026quot;move_forward\u0026quot; style\u003d\u0026quot;\u0026quot;\u0026gt;\n        Accept\n      \u0026lt;\u0026#x2F;a\u0026gt;\n      \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Request changes\u0026quot; class\u003d\u0026quot;btn btn-danger\u0026quot; id\u003d\u0026quot;move_backward\u0026quot; data-disable-with\u003d\u0026quot;Request changes\u0026quot; style\u003d\u0026quot;display: none;\u0026quot; \u0026#x2F;\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;div class\u003d\u0026quot;modal in\u0026quot; id\u003d\u0026quot;review-accept-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Accept review\u0026quot; style\u003d\u0026quot;display: block; padding-right: 15px;\u0026quot;\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;button\u0026gt;\n          \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Accept task\u0026lt;\u0026#x2F;h4\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select assignee\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;select name\u003d\u0026quot;task[assignee_id]\u0026quot; id\u003d\u0026quot;task_assignee_id\u0026quot; data-params\u003d\u0026quot;{\u0026amp;quot;fltrs\u0026amp;quot;:{\u0026amp;quot;dept\u0026amp;quot;:\u0026amp;quot;Media Planning\u0026amp;quot;}}\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; class\u003d\u0026quot;selectized\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options focus input-active dropdown-active\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; id\u003d\u0026quot;task_assignee_id-selectized\u0026quot; style\u003d\u0026quot;width: 4px; opacity: 1; position: relative; left: 0px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single\u0026quot; style\u003d\u0026quot;display: block; visibility: visible; width: 568px; top: 36px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;option active\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443164359d65eb3bed40\u0026quot;\u0026gt;Saad Bare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;option\u0026quot; data-selectable\u003d\u0026quot;\u0026quot; data-value\u003d\u0026quot;59ca443264359d65eb3bed4e\u0026quot;\u0026gt;Pranav Waghmare\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;If you want to assign this task to yourself or assign it later keep this field blank. Otherwise choose the assignee who will work on the task\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n            \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select start date (before 07\u0026#x2F;12\u0026#x2F;2017)\u0026lt;\u0026#x2F;label\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;text\u0026quot; name\u003d\u0026quot;task[start_date]\u0026quot; id\u003d\u0026quot;task_start_date\u0026quot; value\u003d\u0026quot;\u0026quot; class\u003d\u0026quot;form-control datepicker date_validation\u0026quot; data-max-date\u003d\u0026quot;07\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-min-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; data-default-date\u003d\u0026quot;06\u0026#x2F;12\u0026#x2F;2017\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;p class\u003d\u0026quot;help-text\u0026quot;\u0026gt;Choose a date when you plan to get the work started. Start date is binding on the assignee and will impact bandwidth planning \u0026amp;amp; future resource allocation\u0026lt;\u0026#x2F;p\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n          \u0026lt;input type\u003d\u0026quot;submit\u0026quot; name\u003d\u0026quot;save\u0026quot; value\u003d\u0026quot;Assign\u0026quot; class\u003d\u0026quot;btn btn-primary\u0026quot; data-disable-with\u003d\u0026quot;Assign\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;form\u0026gt;\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    Review.init($(\u0026quot;form\u0026quot;));\n  })\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n  \u0026lt;\u0026#x2F;div\u0026gt;\n\u0026lt;\u0026#x2F;div\u0026gt;\n\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;!-- \u0026#x2F;#page-content-wrapper --\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n    \u0026lt;!-- Modal --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot; id\u003d\u0026quot;myModalLabel\u0026quot;\u0026gt;Add new task\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;input type\u003d\u0026quot;hidden\u0026quot; name\u003d\u0026quot;assignment_id\u0026quot; class\u003d\u0026quot;assignment_id\u0026quot; \u0026#x2F;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select Department\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;task_type selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control task_type single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full has-options\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; placeholder\u003d\u0026quot;Select\u0026quot; style\u003d\u0026quot;width: 42px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single task_type\u0026quot; style\u003d\u0026quot;display: none; width: 100px; top: 0px; left: 0px;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-task\u0026quot;\u0026gt;Add task\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;slots_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Slots Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            slots_description_div\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;project_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Project lifecycle description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Project lifecycle description\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;!-- modal for adding project --\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;assignment-form-modal\u0026quot; role\u003d\u0026quot;dialog\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-header\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;close\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot; aria-label\u003d\u0026quot;Close\u0026quot;\u0026gt;\u0026lt;span aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;×\u0026lt;\u0026#x2F;span\u0026gt;\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;h4 class\u003d\u0026quot;modal-title\u0026quot;\u0026gt;Add a Project\u0026lt;\u0026#x2F;h4\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;div class\u003d\u0026quot;form-group\u0026quot;\u0026gt;\n              \u0026lt;label class\u003d\u0026quot;control-label\u0026quot;\u0026gt;Select client\u0026lt;\u0026#x2F;label\u0026gt;\n              \u0026lt;select class\u003d\u0026quot;client_id selectized\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;option value\u003d\u0026quot;\u0026quot; selected\u003d\u0026quot;selected\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;option\u0026gt;\u0026lt;\u0026#x2F;select\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-control client_id single\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-input items not-full\u0026quot;\u0026gt;\u0026lt;input type\u003d\u0026quot;text\u0026quot; autocomplete\u003d\u0026quot;off\u0026quot; tabindex\u003d\u0026quot;\u0026quot; style\u003d\u0026quot;width: 4px;\u0026quot; \u0026#x2F;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown single client_id\u0026quot; style\u003d\u0026quot;display: none;\u0026quot;\u0026gt;\u0026lt;div class\u003d\u0026quot;selectize-dropdown-content\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\n              \u0026lt;span class\u003d\u0026quot;help-block hidden\u0026quot;\u0026gt;This field is required\u0026lt;\u0026#x2F;span\u0026gt;\n            \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-footer\u0026quot;\u0026gt;\n            \u0026lt;button type\u003d\u0026quot;button\u0026quot; class\u003d\u0026quot;btn btn-default\u0026quot; data-dismiss\u003d\u0026quot;modal\u0026quot;\u0026gt;Close\u0026lt;\u0026#x2F;button\u0026gt;\n            \u0026lt;a href\u003d\u0026quot;javascript:;\u0026quot; class\u003d\u0026quot;btn btn-primary create-project\u0026quot;\u0026gt;Add Project\u0026lt;\u0026#x2F;a\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;task-reference-modal\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Task reference Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            Task reference documentation goes here\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;div class\u003d\u0026quot;modal fade\u0026quot; id\u003d\u0026quot;status_description_div\u0026quot; tabindex\u003d\u0026quot;-1\u0026quot; role\u003d\u0026quot;dialog\u0026quot; aria-labelledby\u003d\u0026quot;Status Description\u0026quot; aria-hidden\u003d\u0026quot;true\u0026quot;\u0026gt;\n      \u0026lt;div class\u003d\u0026quot;modal-dialog modal-lg\u0026quot; role\u003d\u0026quot;document\u0026quot;\u0026gt;\n        \u0026lt;div class\u003d\u0026quot;modal-content\u0026quot;\u0026gt;\n          \u0026lt;div class\u003d\u0026quot;modal-body\u0026quot;\u0026gt;\n            \u0026lt;img style\u003d\u0026quot;width:100%\u0026quot; src\u003d\u0026quot;\u0026#x2F;assets\u0026#x2F;task-flow-diagram-c766b0df2fc8cd2d7ecd34f2cc3cecfcf61d18aef58c1137a2ec6efca8a020af.jpg\u0026quot; alt\u003d\u0026quot;Task flow diagram\u0026quot; \u0026#x2F;\u0026gt;\n          \u0026lt;\u0026#x2F;div\u0026gt;\n        \u0026lt;\u0026#x2F;div\u0026gt;\n      \u0026lt;\u0026#x2F;div\u0026gt;\n    \u0026lt;\u0026#x2F;div\u0026gt;\n\n  \n\u0026lt;script\u0026gt;\n\u0026#x2F;\u0026#x2F;\u0026amp;lt;![CDATA[\n\n  $(document).ready(function(){\n    var total_height \u003d $(\u0026quot;.navbar\u0026quot;).height() + $(\u0026quot;.navigation-links-container\u0026quot;).height();\n    $(\u0026#x27;#task-form-modal\u0026#x27;).on(\u0026#x27;shown.bs.modal\u0026#x27;, function(e){\n\n      var client_id \u003d $(e.relatedTarget).data(\u0026#x27;client-id\u0026#x27;);\n      var client_name \u003d $(e.relatedTarget).data(\u0026#x27;client-name\u0026#x27;);\n      var assignment_id \u003d $(e.relatedTarget).data(\u0026#x27;assignment-id\u0026#x27;);\n\n      $(\u0026quot;select.client_id, input[name\u003d\u0026#x27;assignment_id\u0026#x27;]\u0026quot;).val(\u0026quot;\u0026quot;);\n\n      if(!_.isEmpty(assignment_id)){\n        $(\u0026#x27;input[name\u003d\u0026quot;assignment_id\u0026quot;]\u0026#x27;).val(assignment_id);\n      }\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(client_name)){\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).addOption({id: client_id, name: client_name})\n        $(\u0026quot;select.client_id\u0026quot;).data(\u0026quot;selectize\u0026quot;).setValue(client_id);\n      }\n    });\n\n    FormInitializer.remoteSelectize($(\u0026quot;.client_id\u0026quot;), {}, {url: \u0026quot;\u0026#x2F;clients\u0026quot;});\n\n    $(\u0026quot;.task_type\u0026quot;).selectize();\n\n    $(\u0026quot;.create-task\u0026quot;).click(function(){\n      var client_id \u003d $(\u0026quot;.client_id\u0026quot;).val();\n      var task_type \u003d $(\u0026quot;.task_type\u0026quot;).val();\n      var assignment_id \u003d $(\u0026quot;.assignment_id\u0026quot;).val();\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).removeClass(\u0026quot;has-error\u0026quot;);\n      $(\u0026quot;.client_id, .task_type\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).addClass(\u0026quot;hidden\u0026quot;);\n      if(_.isEmpty(client_id)){\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).addClass(\u0026quot;has-error\u0026quot;);\n        $(\u0026quot;.client_id\u0026quot;).closest(\u0026quot;.form-group\u0026quot;).find(\u0026quot;.help-block\u0026quot;).removeClass(\u0026quot;hidden\u0026quot;);\n      }\n\n      if(!_.isEmpty(client_id) \u0026amp;amp;\u0026amp;amp; !_.isEmpty(task_type)){\n        var url \u003d \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id;\n\n        if(!_.isEmpty(assignment_id)){\n          url +\u003d \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;\u0026quot; + assignment_id;\n        }\n\n        url +\u003d task_type \u003d\u003d \u0026quot;meeting\u0026quot; ? \u0026quot;\u0026#x2F;meetings\u0026#x2F;new\u0026quot; : \u0026quot;\u0026#x2F;\u0026quot; + task_type + \u0026quot;\u0026#x2F;tasks\u0026#x2F;new\u0026quot;\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, url);\n      }else{\n        $(\u0026quot;.create-task\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    })\n    $(\u0026quot;#menu-toggle\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled\u0026quot;);\n    });\n     $(\u0026quot;#menu-toggle-2\u0026quot;).click(function(e) {\n        e.preventDefault();\n        $(\u0026quot;#wrapper\u0026quot;).toggleClass(\u0026quot;toggled-2\u0026quot;);\n        $(\u0026#x27;#menu ul\u0026#x27;).hide();\n    });\n\n     function initMenu() {\n      $(\u0026#x27;#menu ul\u0026#x27;).hide();\n      $(\u0026#x27;#menu ul\u0026#x27;).children(\u0026#x27;.current\u0026#x27;).parent().show();\n      \u0026#x2F;\u0026#x2F;$(\u0026#x27;#menu ul:first\u0026#x27;).show();\n      $(\u0026#x27;#menu li a\u0026#x27;).click(\n        function() {\n          var checkElement \u003d $(this).next();\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            return false;\n            }\n          if((checkElement.is(\u0026#x27;ul\u0026#x27;)) \u0026amp;amp;\u0026amp;amp; (!checkElement.is(\u0026#x27;:visible\u0026#x27;))) {\n            $(\u0026#x27;#menu ul:visible\u0026#x27;).slideUp(\u0026#x27;normal\u0026#x27;);\n            checkElement.slideDown(\u0026#x27;normal\u0026#x27;);\n            return false;\n            }\n          }\n        );\n      }\n    initMenu();\n    $(\u0026#x27;#assignment-form-modal select.client_id\u0026#x27;).on(\u0026quot;change\u0026quot;, function(e){\n      var client_id \u003d $(this).val();\n      if(!_.isEmpty(client_id)){\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;\u0026#x2F;clients\u0026#x2F;\u0026quot; + client_id + \u0026quot;\u0026#x2F;campaign\u0026#x2F;assignments\u0026#x2F;new\u0026quot;);\n      }else{\n        $(\u0026quot;.create-project\u0026quot;).attr(\u0026quot;href\u0026quot;, \u0026quot;javascript:;\u0026quot;);\n      }\n    });\n\n    var notice_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(notice_html)){\n      new Noty({\n        text: notice_html,\n        type: \u0026#x27;success\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n\n    var alert_html \u003d \u0026quot;\u0026quot;;\n    if(!_.isEmpty(alert_html)){\n      new Noty({\n        text: alert_html,\n        type: \u0026#x27;error\u0026#x27;,\n        timeout: 10000\n      }).show();\n    }\n  });\n\n\u0026#x2F;\u0026#x2F;]]\u0026amp;gt;\n\u0026lt;\u0026#x2F;script\u0026gt;\n\u0026lt;div class\u003d\u0026quot;modal-backdrop in\u0026quot;\u0026gt;\u0026lt;\u0026#x2F;div\u0026gt;\u0026lt;\u0026#x2F;body\u0026gt;\u0026lt;\u0026#x2F;html\u0026gt;");
formatter.write("Current URL:http://staging.work.withamura.com/clients/59ca739164359d71a3b339ed/media_plan/tasks/5a27cdcb8ec62961e3f78119/input/reviews/new");
formatter.after({
  "duration": 3247879579,
  "status": "passed"
});
formatter.before({
  "duration": 121331,
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
  "line": 281,
  "name": "Validate Testing- Content for Landing Page",
  "description": "",
  "id": "project--full-flow;validate-testing--content-for-landing-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 280,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 282,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 283,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 284,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 285,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 286,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 287,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 288,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 289,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 290,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 291,
  "name": "Click View details",
  "keyword": "Then "
});
formatter.step({
  "line": 292,
  "name": "Click on Testing- Content for LP",
  "keyword": "When "
});
formatter.step({
  "line": 293,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 295,
  "name": "Select Tonality- Content Website",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "Select Tags- Content",
  "keyword": "Then "
});
formatter.step({
  "line": 297,
  "name": "Enter USPs- Content Website",
  "keyword": "And "
});
formatter.step({
  "line": 298,
  "name": "Click \u0027Save\u0027 button- Content Website",
  "keyword": "And "
});
formatter.step({
  "line": 299,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 300,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 301,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 302,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 304,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 305,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 306,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 307,
  "name": "Click on task sidebar",
  "keyword": "And "
});
formatter.step({
  "line": 308,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 310,
  "name": "Select newest",
  "keyword": "And "
});
formatter.step({
  "line": 311,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 312,
  "name": "Click review link",
  "keyword": "And "
});
formatter.step({
  "line": 313,
  "name": "Rate the input brief- Content Website",
  "keyword": "Then "
});
formatter.step({
  "line": 314,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 315,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 316,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 317,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 318,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 319,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 321,
  "name": "Click on username/email id \"girish@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 322,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 324,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 325,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 326,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 327,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 328,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 329,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 330,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 331,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 333,
  "name": "Enter Title \"Testing title of the content website\"- Content",
  "keyword": "And "
});
formatter.step({
  "line": 334,
  "name": "Select Call to action",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "Upload Content website doc",
  "keyword": "And "
});
formatter.step({
  "line": 336,
  "name": "Enter Thought process \"Testing thought process\"- Content",
  "keyword": "And "
});
formatter.step({
  "line": 337,
  "name": "Click \u0027Save\u0027 button- Content Website Output",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 340,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 341,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 343,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 344,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 345,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 346,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 347,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 348,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 349,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 350,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 351,
  "name": "Click review link",
  "keyword": "And "
});
formatter.step({
  "line": 352,
  "name": "Enter \u0027Has the brief been followed\u0027 \"Testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 353,
  "name": "Enter \u0027Does the content cater to given TG\u0027 \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 354,
  "name": "Enter \u0027Has the copy writer followed the necessary \u0027tone of voice\u0027\u0027 \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 355,
  "name": "Upload Reference document- Content Output  Review",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "Rate the output- Content Website",
  "keyword": "And "
});
formatter.step({
  "line": 357,
  "name": "Click deliver button",
  "keyword": "Then "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 14152715631,
  "status": "passed"
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickSignOut()"
});
formatter.result({
  "duration": 3716982962,
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
  "duration": 1314503136,
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
  "duration": 1220264404,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickOnSignInButton()"
});
formatter.result({
  "duration": 6187712889,
  "status": "passed"
});
formatter.match({
  "location": "AddNewProjectSteps.clickOnProjects()"
});
formatter.result({
  "duration": 14563197,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"sidebar-wrapper\"]/ul/li[3]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:492)\n\tat org.selenium.iHub.pages.AddNewProjectPage.clickOnProjects(AddNewProjectPage.java:35)\n\tat org.selenium.iHub.steps.AddNewProjectSteps.clickOnProjects(AddNewProjectSteps.java:22)\n\tat ✽.When Click on projects(assignmentFlow.feature:288)\n",
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
  "location": "EditAndReviewLinkSteps.clickViewDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickOnTestingContentForLP()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteInputSteps.selectTonalityContentWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteInputSteps.selectTagsContent()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteInputSteps.enterUSPsContentWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteInputSteps.clickSaveButtonContentWebsite()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteInputSteps.rateTheInputBriefContentWebsite()"
});
formatter.result({
  "status": "skipped"
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
      "val": "girish@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "arguments": [
    {
      "val": "Testing title of the content website",
      "offset": 13
    }
  ],
  "location": "ContentWikipediaPageOutputSteps.enterTitleContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentHoardingOutputSteps.selectCallToAction()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteOutputSteps.uploadContentWebsiteDoc()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing thought process",
      "offset": 23
    }
  ],
  "location": "ContentHoardingOutputSteps.enterThoughtProcessContent(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteOutputSteps.clickSaveButtonContentWebsiteOutput()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 37
    }
  ],
  "location": "ContentIdeaOutputSteps.enterHasTheBriefBeenFollowed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 44
    }
  ],
  "location": "ContentBlogOutputSteps.enterDoesTheContentCaterToGivenTG(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 68
    }
  ],
  "location": "ContentSocialPostOutputSteps.enterHasTheCopyWriterFollowedTheNecessaryToneOfVoice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSEOPlanOutputSteps.uploadReferenceDocumentContentOutputReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentWebsiteOutputSteps.rateTheOutputContentWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10696458,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 225712,
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
  "line": 360,
  "name": "Validate Testing- Request for Ad Communication",
  "description": "",
  "id": "project--full-flow;validate-testing--request-for-ad-communication",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 359,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 361,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 362,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 363,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 364,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 365,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 366,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 367,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 368,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 369,
  "name": "Click View details",
  "keyword": "Then "
});
formatter.step({
  "line": 370,
  "name": "Click on Testing- Request for Ad Communication",
  "keyword": "When "
});
formatter.step({
  "line": 372,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 373,
  "name": "Enter usps",
  "keyword": "Then "
});
formatter.step({
  "line": 374,
  "name": "Add tags",
  "keyword": "And "
});
formatter.step({
  "line": 375,
  "name": "Enter website URL- \"www.google.com\"- Content Ad",
  "keyword": "And "
});
formatter.step({
  "line": 376,
  "name": "Upload Media plan reference doc",
  "keyword": "And "
});
formatter.step({
  "line": 377,
  "name": "Click \u0027Save\u0027 button- Content Ad Communication",
  "keyword": "Then "
});
formatter.step({
  "line": 378,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 379,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 380,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 381,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 383,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 384,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 385,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 386,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 387,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 388,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 389,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 390,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 391,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 392,
  "name": "Rate the input brief- content ad",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 394,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 395,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 396,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 397,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 398,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 400,
  "name": "Click on username/email id \"girish@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 401,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 402,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 403,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 404,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 405,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 407,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 408,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 409,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 410,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "Enter thought process \"Testing\"- content ad",
  "keyword": "And "
});
formatter.step({
  "line": 413,
  "name": "Upload ad content doc",
  "keyword": "And "
});
formatter.step({
  "line": 414,
  "name": "Click save button- content",
  "keyword": "Then "
});
formatter.step({
  "line": 415,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 416,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 417,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 418,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Click on username/email id \"meenakshi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 421,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 422,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 423,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 424,
  "name": "Click content",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 426,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 427,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 428,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 429,
  "name": "Upload Reference document- Content Output  Review",
  "keyword": "And "
});
formatter.step({
  "line": 430,
  "name": "Review the output- Content Ad Communication",
  "keyword": "And "
});
formatter.step({
  "line": 431,
  "name": "Click deliver button",
  "keyword": "Then "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12016092404,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:361)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "EditAndReviewLinkSteps.clickViewDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickOnTestingRequestForAdCommunication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdInputSteps.enterUsps()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdInputSteps.addTags()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 20
    }
  ],
  "location": "ContentAdInputSteps.enterWebsiteURLContentAd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PPCExecutionInputSteps.uploadMediaPlanReferenceDoc()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdInputSteps.clickSaveButtonContentAdCommunication()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdInputSteps.rateTheInputBriefContentAd()"
});
formatter.result({
  "status": "skipped"
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
      "val": "girish@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "arguments": [
    {
      "val": "Testing",
      "offset": 23
    }
  ],
  "location": "ContentAdOutputSteps.enterThoughtProcessContentAd(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdOutputSteps.uploadAdContentDoc()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdOutputSteps.clickSaveButtonContent()"
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
      "val": "meenakshi@amuratech.com",
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
  "location": "ContentBlogInputSteps.clickContent()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentSEOPlanOutputSteps.uploadReferenceDocumentContentOutputReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ContentAdOutputSteps.reviewTheOutputContentAdCommunication()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9459785,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 193283,
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
  "line": 434,
  "name": "Validate Mark as Communication Approved",
  "description": "",
  "id": "project--full-flow;validate-mark-as-communication-approved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 433,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 435,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 436,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 437,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 438,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 440,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 441,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 442,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 443,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 444,
  "name": "Click \u0027Mark as communication approved\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12010590106,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:435)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "ApprovedAndReadySteps.clickMarkAsCommunicationApproved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 12879365,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 13 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 201157,
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
  "line": 447,
  "name": "Validate Testing- Request Website Design",
  "description": "",
  "id": "project--full-flow;validate-testing--request-website-design",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 446,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 448,
      "value": "#    Given Launch the url \"\""
    },
    {
      "line": 449,
      "value": "#    When Click on username/email id \"shahbaz@amuratech.com\""
    },
    {
      "line": 450,
      "value": "#    And Click on password \"amura!@#\""
    },
    {
      "line": 451,
      "value": "#    Then Click on sign in button"
    },
    {
      "line": 452,
      "value": "#    When Click on projects"
    },
    {
      "line": 453,
      "value": "#    Then Select newest"
    },
    {
      "line": 454,
      "value": "#    And Click on apply"
    },
    {
      "line": 455,
      "value": "#    Then Click View details"
    }
  ],
  "line": 456,
  "name": "Click Testing- Request website design",
  "keyword": "Then "
});
formatter.step({
  "line": 457,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Enter usp \"Testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 459,
  "name": "Click plus sign",
  "keyword": "And "
});
formatter.step({
  "line": 460,
  "name": "Select Tags- Design",
  "keyword": "And "
});
formatter.step({
  "line": 461,
  "name": "Upload functional requirements",
  "keyword": "And "
});
formatter.step({
  "line": 462,
  "name": "Enter reference link \"https://www.google.co.in/\"",
  "keyword": "And "
});
formatter.step({
  "line": 463,
  "name": "Click plus",
  "keyword": "Then "
});
formatter.step({
  "line": 464,
  "name": "Select CTA",
  "keyword": "And "
});
formatter.step({
  "line": 465,
  "name": "Click save and publish later button",
  "keyword": "Then "
});
formatter.step({
  "line": 466,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 467,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 468,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 469,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 471,
      "value": "#      Given Launch the url \"\""
    }
  ],
  "line": 473,
  "name": "Click on username/email id \"rohit.m@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 474,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 475,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 476,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 477,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 478,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 479,
  "name": "Select newest",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 481,
  "name": "Click review link",
  "keyword": "And "
});
formatter.step({
  "line": 482,
  "name": "Rate",
  "keyword": "Then "
});
formatter.step({
  "line": 483,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 484,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 485,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 486,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 487,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 488,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 490,
  "name": "Click on username/email id \"varsha.j@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 491,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 492,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 493,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 494,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 495,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 496,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 497,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 498,
  "name": "Click on Edit",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 500,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 501,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 502,
  "name": "Enter thought process \"Testing\"- Design",
  "keyword": "Then "
});
formatter.step({
  "line": 503,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 504,
  "name": "Upload designs",
  "keyword": "Then "
});
formatter.step({
  "line": 505,
  "name": "Click \u0027Edit your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 506,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 507,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 508,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 509,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 511,
  "name": "Click on username/email id \"shaunak.v@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 512,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 513,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 514,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 515,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 516,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 517,
  "name": "Select newest",
  "keyword": "And "
});
formatter.step({
  "line": 518,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 520,
  "name": "Enter \u0027Have the brand guidelines been followed\u0027 \"Testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 521,
  "name": "Enter \u0027Has the designer used correct colours \u0026 fonts\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 522,
  "name": "Enter \u0027Is the creative as per the brief\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 523,
  "name": "Enter \u0027Has the designer explained his thought process\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 524,
  "name": "Enter \u0027If delayed, please comment on the reason for the delay\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 525,
  "name": "Rate- Output",
  "keyword": "And "
});
formatter.step({
  "line": 526,
  "name": "Click deliver button",
  "keyword": "Then "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickTestingRequestWebsiteDesign()"
});
formatter.result({
  "duration": 11550673,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr[1]/td[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:492)\n\tat org.selenium.iHub.pages.RelatedTasksOfProjectPage.clickTestingRequestWebsiteDesign(RelatedTasksOfProjectPage.java:48)\n\tat org.selenium.iHub.steps.RelatedTasksOfProjectSteps.clickTestingRequestWebsiteDesign(RelatedTasksOfProjectSteps.java:52)\n\tat ✽.Then Click Testing- Request website design(assignmentFlow.feature:456)\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 11
    }
  ],
  "location": "AddBriefSteps.enterUsp(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.clickPlusSign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.selectTagsDesign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.uploadFunctionalRequirements()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.in/",
      "offset": 22
    }
  ],
  "location": "AddBriefSteps.enterReferenceLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.clickPlus()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.selectCTA()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddBriefSteps.clickSaveAndPublishLaterButton()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "rohit.m@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignReviewSteps.rate()"
});
formatter.result({
  "status": "skipped"
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
      "val": "varsha.j@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "arguments": [
    {
      "val": "Testing",
      "offset": 23
    }
  ],
  "location": "DesignOutputSteps.enterThoughtProcessDesign(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignOutputSteps.clickSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignOutputSteps.uploadDesigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonOutputFieldsSteps.clickEditYourOutputLink()"
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
      "val": "shaunak.v@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 49
    }
  ],
  "location": "DesignOutputSteps.enterHaveTheBrandGuidelinesBeenFollowed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 55
    }
  ],
  "location": "DesignOutputSteps.enterHasTheDesignerUsedCorrectColoursFonts(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 42
    }
  ],
  "location": "DesignOutputSteps.enterIsTheCreativeAsPerTheBrief(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 56
    }
  ],
  "location": "DesignOutputSteps.enterHasTheDesignerExplainedHisThoughtProcess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 64
    }
  ],
  "location": "DesignOutputSteps.enterIfDelayedPleaseCommentOnTheReasonForTheDelay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignOutputSteps.rateOutput()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11443593,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 174610,
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
  "line": 529,
  "name": "Validate Testing- Request for Ad Design",
  "description": "",
  "id": "project--full-flow;validate-testing--request-for-ad-design",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 528,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 530,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 531,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 532,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 533,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 534,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 535,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 536,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 537,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 538,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 539,
  "name": "Click View details",
  "keyword": "Then "
});
formatter.step({
  "line": 540,
  "name": "Click Testing- Request for Ad Design",
  "keyword": "When "
});
formatter.step({
  "line": 541,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 542,
  "name": "Click \u0027Save\u0027 button- Design Ad Input",
  "keyword": "Then "
});
formatter.step({
  "line": 543,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 544,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 546,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "Click on username/email id \"rohit.m@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 549,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 550,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 551,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 552,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 553,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 554,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 555,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 556,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 557,
  "name": "Give rating",
  "keyword": "Then "
});
formatter.step({
  "line": 558,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 559,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 560,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 561,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 562,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 563,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 565,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 567,
  "name": "Click on username/email id \"varsha.j@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 568,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 569,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 570,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 571,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 572,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 574,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 575,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 576,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 577,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 578,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 579,
  "name": "Enter thought process \"Testing\"- Design",
  "keyword": "Then "
});
formatter.step({
  "line": 580,
  "name": "Click \u0027Save\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 581,
  "name": "Upload designs",
  "keyword": "Then "
});
formatter.step({
  "line": 582,
  "name": "Click \u0027Edit your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 583,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 584,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 585,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 586,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 588,
      "value": "#      Given Launch the url \"\""
    }
  ],
  "line": 590,
  "name": "Click on username/email id \"shaunak.v@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 591,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 592,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 593,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 594,
  "name": "Click on design",
  "keyword": "And "
});
formatter.step({
  "line": 595,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 596,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 597,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 598,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 599,
  "name": "Enter \u0027Have the brand guidelines been followed\u0027 \"Testing\"",
  "keyword": "Then "
});
formatter.step({
  "line": 600,
  "name": "Enter \u0027Has the designer used correct colours \u0026 fonts\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 601,
  "name": "Enter \u0027Is the creative as per the brief\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 602,
  "name": "Enter \u0027Has the designer explained his thought process\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 603,
  "name": "Enter \u0027If delayed, please comment on the reason for the delay\u0027 \"Yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 604,
  "name": "Rate- Design Ad Output",
  "keyword": "And "
});
formatter.step({
  "line": 605,
  "name": "Click deliver button",
  "keyword": "Then "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12011243355,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 11 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:530)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "EditAndReviewLinkSteps.clickViewDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickTestingRequestForAdDesign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignAdBriefSteps.clickSaveButtonDesignAdInput()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "rohit.m@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignAdBriefSteps.giveRating()"
});
formatter.result({
  "status": "skipped"
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
      "val": "varsha.j@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "arguments": [
    {
      "val": "Testing",
      "offset": 23
    }
  ],
  "location": "DesignOutputSteps.enterThoughtProcessDesign(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignOutputSteps.clickSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignOutputSteps.uploadDesigns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CommonOutputFieldsSteps.clickEditYourOutputLink()"
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
      "val": "shaunak.v@amuratech.com",
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
  "location": "AddBriefSteps.clickOnDesign()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 49
    }
  ],
  "location": "DesignOutputSteps.enterHaveTheBrandGuidelinesBeenFollowed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 55
    }
  ],
  "location": "DesignOutputSteps.enterHasTheDesignerUsedCorrectColoursFonts(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 42
    }
  ],
  "location": "DesignOutputSteps.enterIsTheCreativeAsPerTheBrief(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 56
    }
  ],
  "location": "DesignOutputSteps.enterHasTheDesignerExplainedHisThoughtProcess(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Yes",
      "offset": 64
    }
  ],
  "location": "DesignOutputSteps.enterIfDelayedPleaseCommentOnTheReasonForTheDelay(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesignAdOutputSteps.rateDesignAdOutput()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14626266,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 14 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 126555,
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
  "line": 608,
  "name": "Validate Mark as Design Approved",
  "description": "",
  "id": "project--full-flow;validate-mark-as-design-approved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 607,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 609,
      "value": "#    When Click user name"
    },
    {
      "line": 610,
      "value": "#    Then Click \u0027Sign out\u0027"
    }
  ],
  "line": 611,
  "name": "Launch the url \"\"",
  "keyword": "Given "
});
formatter.step({
  "line": 612,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 613,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 615,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 616,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 617,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 618,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 619,
  "name": "Click \u0027Mark as design approved\u0027",
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
  "duration": 12574411,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 12 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:364)\n\tat org.selenium.iHub.driver.TestDriver.myget(TestDriver.java:99)\n\tat org.selenium.iHub.pages.LoginPage.launchTheUrl(LoginPage.java:22)\n\tat org.selenium.iHub.steps.LoginSteps.launchTheUrl(LoginSteps.java:21)\n\tat ✽.Given Launch the url \"\"(assignmentFlow.feature:611)\n",
  "status": "failed"
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "ApprovedAndReadySteps.clickMarkAsDesignApproved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 11151397,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 194233,
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
  "line": 622,
  "name": "Validate Testing- Request for Website Development",
  "description": "",
  "id": "project--full-flow;validate-testing--request-for-website-development",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 621,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 623,
  "name": "Testing- Request for website development",
  "keyword": "Given "
});
formatter.step({
  "line": 624,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 625,
  "name": "Select CRM",
  "keyword": "And "
});
formatter.step({
  "line": 626,
  "name": "Select func req",
  "keyword": "And "
});
formatter.step({
  "line": 627,
  "name": "Select CMS",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "Select hosting",
  "keyword": "Then "
});
formatter.step({
  "line": 629,
  "name": "Click Save and publish later button",
  "keyword": "Then "
});
formatter.step({
  "line": 630,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 631,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 632,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 633,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 635,
  "name": "Click on username/email id \"pankit@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 636,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 637,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 638,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 639,
  "name": "Click on web development",
  "keyword": "Then "
});
formatter.step({
  "line": 640,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 641,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 642,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 643,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 644,
  "name": "Rate webdev brief",
  "keyword": "And "
});
formatter.step({
  "line": 645,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 647,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 648,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 649,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 650,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 652,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 653,
  "name": "Click on username/email id \"sunil@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 654,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 655,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 656,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 657,
  "name": "Click on web development",
  "keyword": "Then "
});
formatter.step({
  "line": 658,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 659,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 660,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 661,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 662,
  "name": "Click \u0027Update task status\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 663,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 664,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 665,
  "name": "Enter staging link \"https://www.google.co.in\"",
  "keyword": "And "
});
formatter.step({
  "line": 666,
  "name": "Click Save button",
  "keyword": "Then "
});
formatter.step({
  "line": 667,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 668,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 669,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 670,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 672,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 674,
  "name": "Click on username/email id \"atul.saini@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 675,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 676,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 677,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 678,
  "name": "Click on web development",
  "keyword": "Then "
});
formatter.step({
  "line": 679,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 680,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 681,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 682,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 683,
  "name": "Enter link to QA project \"www.google.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 684,
  "name": "Enter copy review \"Testing copy review\"",
  "keyword": "Then "
});
formatter.step({
  "line": 685,
  "name": "Enter design review \"Testing design review\"",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "Enter desktop page speed score \"100 Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 687,
  "name": "Enter mobile page speed score \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 688,
  "name": "Rate the website output",
  "keyword": "Then "
});
formatter.step({
  "line": 689,
  "name": "Click deliver button",
  "keyword": "And "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.testingRequestForWebsiteDevelopment()"
});
formatter.result({
  "duration": 10568794,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:492)\n\tat org.selenium.iHub.pages.RelatedTasksOfProjectPage.testingRequestForWebsiteDevelopment(RelatedTasksOfProjectPage.java:56)\n\tat org.selenium.iHub.steps.RelatedTasksOfProjectSteps.testingRequestForWebsiteDevelopment(RelatedTasksOfProjectSteps.java:62)\n\tat ✽.Given Testing- Request for website development(assignmentFlow.feature:623)\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectCRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectFuncReq()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectCMS()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectHosting()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.clickSaveAndPublishLaterButton()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "pankit@amuratech.com",
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
  "location": "DevBriefSteps.clickOnWebDevelopment()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.rateWebdevBrief()"
});
formatter.result({
  "status": "skipped"
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
      "val": "sunil@amuratech.com",
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
  "location": "DevBriefSteps.clickOnWebDevelopment()"
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
  "location": "WebWebsiteOutputSteps.clickUpdateTaskStatusButton()"
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
  "arguments": [
    {
      "val": "https://www.google.co.in",
      "offset": 20
    }
  ],
  "location": "WebWebsiteOutputSteps.enterStagingLink(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickSaveButton()"
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
      "val": "atul.saini@amuratech.com",
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
  "location": "DevBriefSteps.clickOnWebDevelopment()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "www.google.com",
      "offset": 26
    }
  ],
  "location": "WebWebsiteOutputSteps.enterLinkToQAProject(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing copy review",
      "offset": 19
    }
  ],
  "location": "WebWebsiteOutputSteps.enterCopyReview(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing design review",
      "offset": 21
    }
  ],
  "location": "WebWebsiteOutputSteps.enterDesignReview(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100 Testing",
      "offset": 32
    }
  ],
  "location": "WebWebsiteOutputSteps.enterDesktopPageSpeedScore(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 31
    }
  ],
  "location": "WebWebsiteOutputSteps.enterMobilePageSpeedScore(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.rateTheWebsiteOutput()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9489532,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 194625,
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
  "line": 692,
  "name": "Validate Mark as Client Approved",
  "description": "",
  "id": "project--full-flow;validate-mark-as-client-approved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 691,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 693,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 694,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 695,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 696,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 697,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 698,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 699,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 700,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 701,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 703,
  "name": "Click \u0027Mark as client approved\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12017657234,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:693)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "ApprovedAndReadySteps.clickMarkAsClientApproved()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 10115988,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 1385066,
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
  "line": 706,
  "name": "Validate Testing- Request for Campaign Execution",
  "description": "",
  "id": "project--full-flow;validate-testing--request-for-campaign-execution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 705,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 707,
      "value": "#    Given Launch the url \"\""
    },
    {
      "line": 708,
      "value": "#    When Click on username/email id \"shahbaz@amuratech.com\""
    },
    {
      "line": 709,
      "value": "#    And Click on password \"amura!@#\""
    },
    {
      "line": 710,
      "value": "#    Then Click on sign in button"
    },
    {
      "line": 711,
      "value": "#    When Click on projects"
    },
    {
      "line": 712,
      "value": "#    Then Select newest"
    },
    {
      "line": 713,
      "value": "#    And Click on apply"
    },
    {
      "line": 714,
      "value": "#    Then Click View details"
    }
  ],
  "line": 716,
  "name": "Click Testing- Request for Campaign Execution",
  "keyword": "When "
});
formatter.step({
  "line": 718,
  "name": "Click \u0027Add input brief\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 719,
  "name": "Upload Campaign tracking file",
  "keyword": "Then "
});
formatter.step({
  "line": 720,
  "name": "Select Grant the paid media access to",
  "keyword": "And "
});
formatter.step({
  "line": 721,
  "name": "Enter Google analytics ID \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 722,
  "name": "Click \u0027Save\u0027 button- Paid Media Input",
  "keyword": "And "
});
formatter.step({
  "line": 723,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 724,
  "name": "Select \u0027Publish\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 726,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 727,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 729,
  "name": "Click on username/email id \"madhavi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 730,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 731,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 732,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 733,
  "name": "Click Paid Media",
  "keyword": "And "
});
formatter.step({
  "line": 734,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 735,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 736,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 737,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 738,
  "name": "Rate the input brief- campaign execution",
  "keyword": "Then "
});
formatter.step({
  "line": 739,
  "name": "Accept",
  "keyword": "And "
});
formatter.step({
  "line": 740,
  "name": "Select assignee",
  "keyword": "Then "
});
formatter.step({
  "line": 741,
  "name": "Select \u0027Start date\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 742,
  "name": "Click assign button",
  "keyword": "Then "
});
formatter.step({
  "line": 743,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 744,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 746,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 748,
  "name": "Click on username/email id \"smita@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 749,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 750,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 751,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 752,
  "name": "Click Paid Media",
  "keyword": "And "
});
formatter.step({
  "line": 753,
  "name": "Click on assigned to me",
  "keyword": "Then "
});
formatter.step({
  "line": 754,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 755,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 756,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 757,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 758,
  "name": "Click \u0027Start\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 759,
  "name": "Click \u0027Add your output\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 760,
  "name": "Enter Reason for not advertising automation \"Testing\"",
  "keyword": "And "
});
formatter.step({
  "line": 761,
  "name": "Click \u0027Submit\u0027 button",
  "keyword": "Then "
});
formatter.step({
  "line": 762,
  "name": "Click \u0027Update\u0027 link",
  "keyword": "Then "
});
formatter.step({
  "line": 763,
  "name": "Select \u0027Review\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 764,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 765,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 767,
  "name": "Click on username/email id \"madhavi@amuratech.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 768,
  "name": "Click on password \"amura!@#\"",
  "keyword": "Then "
});
formatter.step({
  "line": 769,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 770,
  "name": "Click on task sidebar",
  "keyword": "Then "
});
formatter.step({
  "line": 771,
  "name": "Click Paid Media",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "Click on assigned to me",
  "keyword": "And "
});
formatter.step({
  "line": 773,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 774,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 775,
  "name": "Click review link",
  "keyword": "Then "
});
formatter.step({
  "line": 776,
  "name": "Rate the output brief- Paid Media",
  "keyword": "Then "
});
formatter.step({
  "line": 777,
  "name": "Click deliver button",
  "keyword": "And "
});
formatter.match({
  "location": "RelatedTasksOfProjectSteps.clickTestingRequestForCampaignExecution()"
});
formatter.result({
  "duration": 13433704,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 12 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"page-content-wrapper\"]/div[2]/div/div[1]/div[8]/div[2]/table/tbody/tr/td[1]/a}\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myclicking(TestDriver.java:492)\n\tat org.selenium.iHub.pages.RelatedTasksOfProjectPage.clickTestingRequestForCampaignExecution(RelatedTasksOfProjectPage.java:60)\n\tat org.selenium.iHub.steps.RelatedTasksOfProjectSteps.clickTestingRequestForCampaignExecution(RelatedTasksOfProjectSteps.java:67)\n\tat ✽.When Click Testing- Request for Campaign Execution(assignmentFlow.feature:716)\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTaskSteps.clickAddInputBriefLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PPCExecutionInputSteps.uploadCampaignTrackingFile()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PPCExecutionInputSteps.selectGrantThePaidMediaAccessTo()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing",
      "offset": 27
    }
  ],
  "location": "PPCExecutionInputSteps.enterGoogleAnalyticsID(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PPCExecutionInputSteps.clickSaveButtonPaidMediaInput()"
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
  "location": "ChangeStatusSteps.selectPublish()"
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
      "val": "madhavi@amuratech.com",
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
  "location": "DepartmentTypesSteps.clickPaidMedia()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CampaignExecutionInputSteps.rateTheInputBriefCampaignExecution()"
});
formatter.result({
  "status": "skipped"
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
      "val": "smita@amuratech.com",
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
  "location": "DepartmentTypesSteps.clickPaidMedia()"
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
  "arguments": [
    {
      "val": "Testing",
      "offset": 45
    }
  ],
  "location": "PPCExecutionOutputSteps.enterReasonForNotAdvertisingAutomation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CampaignExecutionOutputSteps.clickSubmitButton()"
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
      "val": "madhavi@amuratech.com",
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
  "location": "DepartmentTypesSteps.clickPaidMedia()"
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
  "location": "EditAndReviewLinkSteps.clickReviewLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PPCExecutionOutputSteps.rateTheOutputBriefPaidMedia()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteOutputSteps.clickDeliverButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9859647,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 223898,
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
  "line": 780,
  "name": "Validate Mark as Ready to go Live",
  "description": "",
  "id": "project--full-flow;validate-mark-as-ready-to-go-live",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 779,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 781,
  "name": "Click user name",
  "keyword": "Then "
});
formatter.step({
  "line": 782,
  "name": "Click \u0027Sign out\u0027",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 783,
      "value": "#    Given Launch the url \"\""
    }
  ],
  "line": 784,
  "name": "Click on username/email id \"shahbaz@amuratech.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 785,
  "name": "Click on password \"amura!@#\"",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "Click on sign in button",
  "keyword": "Then "
});
formatter.step({
  "line": 787,
  "name": "Click on projects",
  "keyword": "When "
});
formatter.step({
  "line": 788,
  "name": "Select newest",
  "keyword": "Then "
});
formatter.step({
  "line": 789,
  "name": "Click on apply",
  "keyword": "And "
});
formatter.step({
  "line": 790,
  "name": "Click on Edit",
  "keyword": "Then "
});
formatter.step({
  "line": 791,
  "name": "Click \u0027Mark as ready to go live\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "NormalUserSignOutSteps.clickUserName()"
});
formatter.result({
  "duration": 12011551944,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4236)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(assignmentFlow.feature:781)\n",
  "status": "failed"
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
      "val": "shahbaz@amuratech.com",
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
  "location": "AddNewProjectSteps.clickOnProjects()"
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
  "location": "ApprovedAndReadySteps.clickMarkAsReadyToGoLive()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 9566530,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 9 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.kAyGhm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4833a6e0f53fcc09dcc2de00af7e69d7\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.GeneratedMethodAccessor19.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
});