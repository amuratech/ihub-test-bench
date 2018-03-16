package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MarketingBriefInputPage extends BasePage {

    UIElement objective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief\"]/div[1]/div/div/div/div[3]/div[2]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief\"]/div[2]/div/div/div/div[3]/div[2]");//*[@id="new_client_marketing_brief"]/div[2]/div/div/div/div[3]/div[2]
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief\"]/div[4]/input");//*[@id="new_client_marketing_brief"]/div[4]/input
    UIElement marketing = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[7]/a");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[9]/div/div/a[4]");
    UIElement ref = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_media_plan_campaign\"]/div[1]/div[2]/div/div/div/div/div[1]");

    public void enterObjectiveMarketing(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void enterBriefProvidedByClient(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void clickSaveButtonMarketingInput() {
        tDriver.myclicking(saveInput);
    }

    public void clickMarketing() {
        tDriver.myclicking(marketing);
    }

    public void rateTheInputBriefMarketingBrief() {
        tDriver.myclicking(rateInput);
    }

    public void selectMarketingBriefTaskRef() {
        tDriver.myMarketingBriefTaskRef(ref);
    }
}
