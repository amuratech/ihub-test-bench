package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentReviewForumInputPage extends  BasePage {

    UIElement saveInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review_forum_participation\"]/div[6]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[12]/div/div/a[4]");

    public void clickSaveButtonContentReview() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheBriefContentReviewForum() {
        tDriver.myclicking(rateInput);
    }
}
