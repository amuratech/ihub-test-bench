package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 13/2/18.
 */
public class MarketingPlanOutputPage extends BasePage {


    UIElement growthStrategy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan_output\"]/div[1]/div/div/div/div[3]/div[2]");
    UIElement socialStrategy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan_output\"]/div[2]/div/div/div/div[3]/div[2]");
    UIElement seoStrategy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan_output\"]/div[3]/div/div/div/div[3]/div[2]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_plan_output\"]/div[4]/input");
    UIElement refDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div/div[3]/div/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[9]/div/div/a[4]");

    public void enterGrowthAndInnovationStrategy(String arg0) {
        tDriver.mytype(growthStrategy,arg0);
    }

    public void enterSocialInnovationStrategy(String arg0) {
        tDriver.mytype(socialStrategy,arg0);
    }

    public void enterSEOStrategy(String arg0) {
        tDriver.mytype(seoStrategy,arg0);
    }

    public void clickSaveButtonMarketingPlanOutput() {
        tDriver.myclicking(save);
    }

    public void uploadReferenceDoc() {
        tDriver.mytxtupload(refDoc);
    }

    public void rateTheOutputMarketingPlanOutput() {
        tDriver.myclicking(rateOutput);
    }
}
