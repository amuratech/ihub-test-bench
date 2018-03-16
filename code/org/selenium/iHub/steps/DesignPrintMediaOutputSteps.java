package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.When;
import org.selenium.iHub.pages.DesignPrintMediaOutputPage;

/**
 * Created by amura on 7/3/18.
 */
public class DesignPrintMediaOutputSteps {
    DesignPrintMediaOutputPage dp;

    public DesignPrintMediaOutputSteps(){dp = new DesignPrintMediaOutputPage();}

    @When("^Rate the output- Desing Print Media$")
    public void rateTheOutputDesingPrintMedia() {
        dp.rateTheOutputDesingPrintMedia();
    }
}
