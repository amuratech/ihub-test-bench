package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.DesignBannerInputPage;

public class DesignBannerInputSteps {

    DesignBannerInputPage dp;

    public DesignBannerInputSteps(){dp = new DesignBannerInputPage();}


    @Then("^Select Image format$")
    public void selectImageFormat() {
        dp.selectImageFormat();
    }

    @And("^Enter Height \"([^\"]*)\"- Design Banner$")
    public void enterHeightDesignBanner(String arg0) {
        dp.enterHeightDesignBanner(arg0);
    }

    @And("^Enter Width \"([^\"]*)\"- Design Banner$")
    public void enterWidthDesignBanner(String arg0){
        dp.enterWidthDesignBanner(arg0);
    }

    @And("^Enter Content \"([^\"]*)\"$")
    public void enterContent(String arg0) {
        dp.enterContent(arg0);
    }

    @Then("^Click 'Save' button- Design Banner Input$")
    public void clickSaveButtonDesignBannerInput() {
        dp.clickSaveButtonDesignBannerInput();
    }

    @And("^Rate the input brief- Design Banner$")
    public void rateTheInputBriefDesignBanner(){
        dp.rateTheInputBriefDesignBanner();
    }
}
