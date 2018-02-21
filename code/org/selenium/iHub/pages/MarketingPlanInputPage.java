package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingPlanInputPage extends BasePage{

    UIElement startDate = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"client_marketing_plan_plan_start_date\"]");
    UIElement endDate = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"client_marketing_plan_plan_end_date\"]");
    UIElement seoRef = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan\"]/div[2]/div[2]/div/div/div/div/div[1]");
    UIElement socialRef = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan\"]/div[3]/div[2]/div/div/div/div/div[1]");
    UIElement meetingRef = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan\"]/div[4]/div[2]/div/div/div/div/div[1]");
    UIElement save = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan\"]/div[6]/input");
    UIElement rate = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[12]/div/div/a[4]");


    public void selectPlanStartDate() {
        tDriver.    myMarketingPlanStartDate(startDate);
    }

    public void selectPlanEndDate() {
        tDriver.myMarketingPlanEndDate(endDate);
    }

    public void selectSEOPlanTaskReference() {
        tDriver.myMarketingPlanSEORef(seoRef);

        
    }

    public void selectSocialPlanTaskReference() {
        tDriver.myMarketingPlanSocialRef(socialRef);

    }

    public void selectClientMeetingTaskReference() {
        tDriver.myMarketingPlanMeetingRef(meetingRef);
    }

    public void clickSaveButtonMarketingPlanInput() {
        tDriver.myclicking(save);
    }

    public void rateTheInputMarketingPlanInput() {
        tDriver.myclicking(rate);
    }


}
