package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialPostPromotionInputPage extends BasePage {

    UIElement budget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_promotion_budget\"]");
    UIElement postURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_promotion_social_post_url\"]");
    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_promotion_start_date\"]");
    UIElement endDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_promotion_end_date\"]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_post_promotion\"]/div[6]/input");

    public void enterBudgetSocialPostPromotion(String arg0) {
        tDriver.mytype(budget,arg0);
    }

    public void selectStartDate() {
        tDriver.mypromotionstartdate(startDate);
    }

    public void selectEndDate() {
        tDriver.mypromotionenddate(endDate);
    }

    public void enterSocialPostURL(String arg0) {
        tDriver.mytype(postURL,arg0);
    }

    public void clickSaveButtonSocialPostPromotionInput() {
        tDriver.myclicking(saveInput);
    }
}
