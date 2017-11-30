package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;
import sun.swing.UIAction;

public class SocialAssetCreationOutputPage extends BasePage {

    UIElement linkFB = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_asset_creation_output_asset_creation_links_attributes_0_platform_url\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_asset_creation_output\"]/div[2]/input");
    UIElement contentPublished = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement asset = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement creative = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_2_answer\"]");
    UIElement industry = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_3_answer\"]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[7]/div/div/a[4]");

    public void enterLinkToFacebook(String arg0) {
        tDriver.mytype(linkFB,arg0);
    }

    public void clickSaveButtonSocialAsset() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHowGoodIsTheContentPublishedOnEveryPlatform(String arg0) {
        tDriver.mytype(contentPublished,arg0);
    }

    public void enterHaveTheyPublishedAnyInitialSeedContentOnTheAsset(String arg0) {
        tDriver.mytype(asset,arg0);
    }

    public void enterDoesTheCreativeUsedFollowBrandGuidelines(String arg0) {
        tDriver.mytype(creative,arg0);
    }

    public void enterHaveTheyCorrectlyTaggedTheIndustryAndOtherCategorizationForTheCreatedAssets(String arg0) {
        tDriver.mytype(industry,arg0);
    }

    public void rateTheOutputSocialAssetCreation() {
        tDriver.myclicking(rateOutput);
    }
}
