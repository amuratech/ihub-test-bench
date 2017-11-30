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
        tags = {"@retesting"},
        features = {"resources/features/"},
        glue = {"org.selenium.iHub.steps"},
        format = {"html:target/outputreport/projecttesting/html", "json:target/outputreport/projecttesting/junitrunner.json"},
        plugin = {"com.cucumber.listener.ExtentCucumberFormatter:output/report.html"}
)
public class RunCukes {
}
