package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.ContentReviewForumOutputPage;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentReviewForumOutputSteps {

    ContentReviewForumOutputPage dp;

    public ContentReviewForumOutputSteps(){dp = new ContentReviewForumOutputPage();}

    @And("^Click 'Save' button- Content Review Output$")
    public void clickSaveButtonContentReviewOutput() {
        dp.clickSaveButtonContentReviewOutput();
    }

    @Then("^Rate the output- Content Review Forum$")
    public void rateTheOutputContentReviewForum() {
        dp.rateTheOutputContentReviewForum();
    }

    @And("^Enter 'Does your output sufficiently solve the queries on the forum or reviews platform' \"([^\"]*)\"$")
    public void enterDoesYourOutputSufficientlySolveTheQueriesOnTheForumOrReviewsPlatform(String arg0) {
        dp.enterDoesYourOutputSufficientlySolveTheQueriesOnTheForumOrReviewsPlatform(arg0);
    }
}
