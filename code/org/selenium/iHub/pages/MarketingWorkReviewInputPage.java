package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 2/2/18.
 */
public class MarketingWorkReviewInputPage extends BasePage {

    UIElement startDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_review_start_date\"]");
    UIElement endDate = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_review_end_date\"]");
    UIElement saveInput = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review\"]/div[5]/input");
    UIElement attendees = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review\"]/div[3]/div/div[1]");
    UIElement concern = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_concerns_from_last_review\"]");
    UIElement rateInput = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[10]/div/div/a[4]");

    public void selectReviewStartDate() {
        tDriver.myReviewStartDate(startDate);
    }

    public void selectReviewEndDate() {
        tDriver.myReviewEndDate(endDate);
    }

    public void clickSaveButtonMarketingWorkReviewInput() {
        tDriver.myclicking(saveInput);
    }

    public void selectAttendeesMarketingWorkReview() {
        tDriver.myReviewAttendees(attendees);
    }

    public void enterConcernFromLastReview(String arg0) {
        tDriver.mytype(concern,arg0);
    }

    public void rateTheInputMarketingWorkReview() {
        tDriver.myclicking(rateInput);
    }
}
