package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

import java.rmi.server.UID;

/**
 * Created by amuraqa on 23/10/17.
 */
public class ContentReviewForumOutputPage extends BasePage {

    UIElement saveOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review_forum_participation_output\"]/div[4]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[11]/div/div/a[4]");
    UIElement forum = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_3_answer\"]");

    public void clickSaveButtonContentReviewOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputContentReviewForum() {
        tDriver.myclicking(rateOutput);
    }

    public void enterDoesYourOutputSufficientlySolveTheQueriesOnTheForumOrReviewsPlatform(String arg0) {
        tDriver.mytype(forum,arg0);
    }
}
