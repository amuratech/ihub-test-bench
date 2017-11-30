package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentSocialPostInputPage extends BasePage{

    UIElement name = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_name')]");//*[@id="client_content_sitemap_name"]
    UIElement contentBrief = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_brief')]");
    UIElement category = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[3]/div[1]/div/div/div[1]");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[4]/div[1]/div/div[1]/div[1]");
    UIElement tones = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[5]/div[1]/div/div/div[1]");
    UIElement tags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[5]/div[2]/div/div[1]");
    UIElement upload = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_socialpost_socialpost_image\"]");
    UIElement trying = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_socialpost_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[7]/div[13]/div/div[1]");
    UIElement save = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[8]/input");
    UIElement savePublish = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost\"]/div[8]/input[2]");
    UIElement suffCategory = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_7_correct_true\"]");
    UIElement suffTheme = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_8_correct_true\"]");
    UIElement suffTags = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_9_correct_true\"]");
    UIElement suffTones = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_10_correct_true\"]");
    UIElement suffPlatform = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_11_correct_true\"]");
    UIElement suffImage = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_12_correct_true\"]");
    UIElement suffTarget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_13_correct_true\"]");
    UIElement rate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[13]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[16]/a");

    public void enterNameContentSocialPost() {
        tDriver.mywait(name);
    }

    public void enterContentBriefContentSocialPost() {
        tDriver.mywait(contentBrief);
    }

    public void selectCategoryContentSocialPost() {
        tDriver.mywait(category);
    }

    public void selectClientProjectContentSocialPost() {
        tDriver.mywait(project);
    }

    public void selectTonesOfVoiceContentSocialPost() {
        tDriver.mywait(tones);
    }

    public void clickSaveButtonContentSocialPost() {
        tDriver.myclicking(save);
    }

    public void clickSaveAndPublishButtonContentSocialPost() {
        tDriver.myclicking(savePublish);
    }

    public void selectTags() {
        tDriver.mycontenttags(tags);
    }

    public void uploadSocialPostImage() {
        tDriver.myjpgupload(upload);
    }

    public void enterWhoAreYouTryingToReachContentSocialPost() {
        tDriver.mywait(trying);
    }

    public void selectWhatDoYouWanYourTgToDoContentSocialPost() {
        tDriver.mywait(tg);
    }

    public void selectCategorySuffButton() {
        tDriver.myclicking(suffCategory);
    }

    public void selectThemeSuffButton() {
        tDriver.myclicking(suffTheme);
    }

    public void selectTagsSuffButton() {
        tDriver.myclicking(suffTags);
    }

    public void selectTonesOfVoiceSuffButton() {
        tDriver.myclicking(suffTones);
    }

    public void selectPlatformsSuffButton() {
        tDriver.myclicking(suffPlatform);
    }

    public void selectSocialPostImageSuff() {
        tDriver.myclicking(suffImage);
    }

    public void selectTargetGroupSuffButton() {
        tDriver.myclicking(suffTarget);
    }

    public void rateTheInputContentSocialPost() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptButtonContentSocialPost() {
        tDriver.myclicking(accept);
    }

    public void selectThemeContentSocialpost() {
        tDriver.mycontenttheme();
    }

    public void selectTonality() {
        tDriver.mycontentsocialposttonality();
    }
}
