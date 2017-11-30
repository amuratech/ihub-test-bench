package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.selenium.iHub.pages.ContentReviewForumInputPage;

public class ContentReviewForumInputSteps {

    ContentReviewForumInputPage dp;

    public ContentReviewForumInputSteps(){dp = new ContentReviewForumInputPage();}

    @And("^Click 'Save' button- Content Review$")
    public void clickSaveButtonContentReview() {
        dp.clickSaveButtonContentReview();
    }

    @And("^Rate the brief- Content Review Forum$")
    public void rateTheBriefContentReviewForum() {
        dp.rateTheBriefContentReviewForum();
    }

}
