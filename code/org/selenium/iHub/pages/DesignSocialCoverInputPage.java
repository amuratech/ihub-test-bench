package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignSocialCoverInputPage extends BasePage{

    UIElement refDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'client_design_social_')]");//*[@id="client_design_social_post_content_socialpost_doc"]
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_design_social_')]/div[4]/input");//*[@id="new_client_design_social_cover"]/div[4]/input
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[9]/div/div/a[4]");
    UIElement refTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_design_social_')]/div[2]/div[2]/div/div/div/div/div[1]");//*[@id="new_client_design_social_post"]/div[2]/div[2]/div/div/div/div/div[1]


    public void selectPlatforms() {
        tDriver.myplatform();
    }

    public void uploadSocialPostContentReferenceDoc() {
        tDriver.mytxtupload(refDoc);
    }

    public void clickSaveButtonDesignSocialCoverInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheInputDesignSocialCover() {
        tDriver.myclicking(rateInput);
    }

    public void selectSocialPostContentTaskReference() {
        tDriver.myDesignSocialPostContentRefTask(refTask);
    }
}
