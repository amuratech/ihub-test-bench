package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class MarketingBriefOutputPage extends BasePage {

    UIElement offers = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief_output\"]/div[3]/div/div/div/div/div/input");
    UIElement guidelines = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief_output\"]/div[4]/div/div/div/div/div/input");
    UIElement budget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_marketing_brief_output_budget\"]");
    UIElement competitor = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief_output\"]/div[7]/div[2]/div/div/div[2]/div[1]/div/div/div[1]");
    UIElement project = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief_output\"]/div[7]/div[2]/div/div/div[2]/div[2]/div/div/div[1]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_brief_output\"]/div[9]/input");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[13]/div/div/a[4]");


    public void enterOffers() {
        tDriver.mymarketingoffers(offers);
    }

    public void enterCommunicationGuidelines() {
        tDriver.mymarketingguidelines(guidelines);
    }

    public void enterBudgetMarketingBrief(String arg0) {
        tDriver.mytype(budget,arg0);
    }

    public void selectACompetitor() {
        tDriver.mymarketingcompetitor(competitor);
    }

    public void selectAProject() {
        tDriver.mymarketingproject(project);
    }

    public void clickSaveButtonMarketingOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputBriefMarketingBrief() {
        tDriver.myclicking(rateOutput);
    }
}
