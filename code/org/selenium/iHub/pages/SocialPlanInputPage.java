package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialPlanInputPage extends BasePage {

    UIElement theme = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[4]/div/div/div[1]");//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div/div[4]/div/div/div[1]
    UIElement hashtags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div/div[5]/div/div/div[1]");
    UIElement secondTheme = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[4]/div/div/div[1]");//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div[1]/div[4]/div/div/div[1]
    UIElement secondHashtags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[5]/div/div/div[1]");//*[@id="new_client_social_plan"]/div[1]/div[2]/div/div[1]/div[5]/div/div/div[1]
    UIElement thirdTheme = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[4]/div/div/div[1]");
    UIElement thirdHashtags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[1]/div[2]/div/div[1]/div[5]/div/div/div[1]");
    UIElement saveInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan\"]/div[3]/input");
    UIElement rateInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[9]/div/div/a[4]");

    public void selectCategory() {
        tDriver.mysocialplancategory();
    }

    public void enterTheme() {
        tDriver.mysocialplantheme(theme);
    }

    public void enterHashtags() {
        tDriver.mysocialplanhashtags(hashtags);
    }

    public void selectSecondCategory() {
        tDriver.mysocialplancategory2();
    }

    public void enterSecondTheme() {
        tDriver.mysocialplantheme2(secondTheme);
    }

    public void enterSecondHashtags() {
        tDriver.mysocialplanhashtags2(secondHashtags);
    }

    public void selectThirdCategory() {
        tDriver.mysocialplancategory2();
    }

    public void enterThirdTheme() {
        tDriver.mysocialplantheme2(secondTheme);
    }

    public void enterThirdHashtags() {
        tDriver.mysocialplanhashtags2(secondHashtags);
    }

    public void clickSaveButtonSocialPlanInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheInputSocialPlan() {
        tDriver.myclicking(rateInput);
    }
}
