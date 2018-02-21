$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("webWebsiteFullFlow.feature");
formatter.feature({
  "line": 1,
  "name": "Web Development- Website Full Flow",
  "description": "",
  "id": "web-development--website-full-flow",
  "keyword": "Feature"
});
formatter.before({
  "duration": 510578,
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
  "name": "Enter task name \"Testing web dev website\"",
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
  "duration": 117522900922,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 96.03 seconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: driver.version: TestDriver\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$new$0(JsonWireProtocolResponse.java:53)\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$getResponseFunction$2(JsonWireProtocolResponse.java:91)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$22(ProtocolHandshake.java:365)\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:368)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:159)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:250)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:236)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:137)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:184)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:171)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\n\tat org.selenium.iHub.driver.TestDriver.\u003cinit\u003e(TestDriver.java:31)\n\tat org.selenium.iHub.driver.TestDriver.getDriver(TestDriver.java:61)\n\tat org.selenium.iHub.pages.BasePage.\u003cinit\u003e(BasePage.java:16)\n\tat org.selenium.iHub.pages.LoginPage.\u003cinit\u003e(LoginPage.java:10)\n\tat org.selenium.iHub.steps.LoginSteps.\u003cinit\u003e(LoginSteps.java:18)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat cucumber.runtime.java.picocontainer.PicoFactory.getInstance(PicoFactory.java:40)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n\tat ✽.Given Launch the url \"http://localhost:3000/\"(webWebsiteFullFlow.feature:5)\n",
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
  "location": "NewTaskSteps.clickQuickAddLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.selectTask()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "DepartmentTypesSteps.selectTheDepartmentWebDevelopment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateTaskSteps.clickOnCreateTask()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testing web dev website",
      "offset": 17
    }
  ],
  "location": "NewTaskSteps.enterTaskName(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaskTypeSteps.selectWebTaskTypeWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TaskTypeSteps.selectTaskSubType()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.enterDueDate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.selectTimeSlot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTaskSteps.saveAndAddBriefButton()"
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
  "location": "WebWebsiteInputSteps.selectContentSitemap()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.selectContentWebsite()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "WebWebsiteInputSteps.uploadWebsiteDesignDoc()"
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
formatter.after({
  "duration": 115572849,
  "error_message": "java.lang.NullPointerException\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
formatter.before({
  "duration": 243350,
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
  "duration": 78478964143,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 26 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.Wq6qNx}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 31633e77c8164a438ebda5ea723c029a\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Hi\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\n\tat org.selenium.iHub.driver.TestDriver.myUsername(TestDriver.java:4296)\n\tat org.selenium.iHub.pages.NormalUserSignOutPage.clickUserName(NormalUserSignOutPage.java:21)\n\tat org.selenium.iHub.steps.NormalUserSignOutSteps.clickUserName(NormalUserSignOutSteps.java:26)\n\tat ✽.Then Click user name(webWebsiteFullFlow.feature:34)\n",
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
formatter.after({
  "duration": 98032145,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4),platform\u003dLinux 3.13.0-24-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 97 milliseconds\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027amuraqa-Inspiron-3542\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00273.13.0-24-generic\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506092 (733a02544d189eeb751fe0d7ddca79a0ee28cce4), userDataDir\u003d/tmp/.org.chromium.Chromium.Wq6qNx}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dLINUX, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 31633e77c8164a438ebda5ea723c029a\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:694)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:382)\n\tat org.selenium.iHub.steps.AutomationHooks.afterRunning(AutomationHooks.java:98)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:117)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:42)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:262)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:147)\n",
  "status": "failed"
});
});