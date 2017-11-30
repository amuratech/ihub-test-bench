package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialPostPromotionOutputPage extends BasePage {

    UIElement socialPost = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_promotion_output_social_post_link\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_post_promotion_output\"]/div[3]/div/div/input");//*[@id="new_client_social_report_output"]/div[2]/div/div/input
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[4]/div/div/a[4]");

    public void enterSocialPostLink(String arg0) {
        tDriver.mytype(socialPost,arg0);
    }

    public void clickSaveButtonSocialPostPromotionOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputSocialPostPromotion() {
        tDriver.myclicking(rateOutput);
    }
}
