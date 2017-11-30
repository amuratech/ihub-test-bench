package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialPostPromotionOutputPage;

public class SocialPostPromotionOutputSteps {

    SocialPostPromotionOutputPage dp;

    public SocialPostPromotionOutputSteps(){dp = new SocialPostPromotionOutputPage();}

    @And("^Enter Social post link \"([^\"]*)\"$")
    public void enterSocialPostLink(String arg0){
        dp.enterSocialPostLink(arg0);
    }

    @Then("^Click 'Save' button- Social Post Promotion Output$")
    public void clickSaveButtonSocialPostPromotionOutput() {
        dp.clickSaveButtonSocialPostPromotionOutput();
    }

    @Then("^Rate the output- Social Post Promotion$")
    public void rateTheOutputSocialPostPromotion() {
        dp.rateTheOutputSocialPostPromotion();
    }
}
