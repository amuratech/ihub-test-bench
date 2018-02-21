package org.selenium.iHub.runner;

/**
 * Created by amuraqa on 26/10/17.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false,
        strict = false,
        features = {"resources/features/"},
        tags = {"@smoke"},
        glue = {"org.selenium.iHub.steps"}
//        format = {"html:target/outputreport/Assignment/Marketing-Brief-Output/html", "json:target/outputreport/Marketing-Brief-Output/junitrunner.json"},
//        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"}
)
public class RunCukes {

}
