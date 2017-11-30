package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialAssetCreationInputPage extends BasePage{

    UIElement platforms = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_asset_creation\"]/div[1]/div/div/div/div[1]");
    UIElement contact = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_asset_creation_contact_name\"]");
    UIElement email = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_asset_creation_email_id\"]");
    UIElement contactEmail = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_asset_creation_contact_email\"]");
    UIElement phone = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_asset_creation_contact_phone\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_asset_creation\"]/div[7]/input");
    UIElement suffPlatforms = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_5_correct_true\"]");
    UIElement suffContact = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_6_correct_true\"]");
    UIElement suffEmail = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_7_correct_true\"]");
    UIElement suffContactEmail = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_8_correct_true\"]");
    UIElement suffNumber = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_9_correct_true\"]");
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/a");
    UIElement request = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/input");//*[@id="new_client_seo_review"]/div[12]/input

    public void selectPlatformsToBeCreated() {
        tDriver.myplatform();
    }

    public void enterContactName(String arg0) {
        tDriver.mytype(contact,arg0);
    }

    public void enterEmail(String arg0) {
        tDriver.mytype(email,arg0);
    }

    public void enterContactEmail(String arg0) {
        tDriver.mytype(contactEmail,arg0);
    }

    public void enterPhoneNumber(String arg0) {
        tDriver.mytype(phone,arg0);
    }

    public void clickSaveButtonSocialAssetCreationInput() {
        tDriver.myclicking(save);
    }

    public void selectPlatformsToBeCreatedSuff() {
        tDriver.myclicking(suffPlatforms);
    }

    public void selectContactNameSuff() {
        tDriver.myclicking(suffContact);
    }

    public void selectEmailSuff() {
        tDriver.myclicking(suffEmail);
    }

    public void selectContactEmailSuff() {
        tDriver.myclicking(suffContactEmail);
    }

    public void selectContactNumberSuff() {
        tDriver.myclicking(suffNumber);
    }

    public void rateTheInputSocialAssetCreation() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptButtonSocialAssetCreation() {
        tDriver.myclicking(accept);
    }

    public void clickRequestChangesSocialAssetCreation() {
        tDriver.myclicking(request);
    }
}
