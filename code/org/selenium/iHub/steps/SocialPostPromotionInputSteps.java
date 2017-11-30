package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.SocialPostPromotionInputPage;

public class SocialPostPromotionInputSteps {

    SocialPostPromotionInputPage dp;

    public SocialPostPromotionInputSteps(){dp = new SocialPostPromotionInputPage();}

    @Then("^Enter Budget \"([^\"]*)\"- Social Post Promotion$")
    public void enterBudgetSocialPostPromotion(String arg0) {
        dp.enterBudgetSocialPostPromotion(arg0);
    }

    @And("^Select Start date$")
    public void selectStartDate() {
        dp.selectStartDate();
    }

    @And("^Select End date$")
    public void selectEndDate() {
        dp.selectEndDate();
    }

    @And("^Enter Social post URL \"([^\"]*)\"$")
    public void enterSocialPostURL(String arg0) {
        dp.enterSocialPostURL(arg0);
    }

    @And("^Click 'Save' button- Social Post Promotion Input$")
    public void clickSaveButtonSocialPostPromotionInput() {
        dp.clickSaveButtonSocialPostPromotionInput();
    }


}
