package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialMediaPlanInputPage extends BasePage{

    UIElement budget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_media_plan_estimated_budget\"]");
    UIElement objective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[4]/div/div/div/div[3]/div[2]");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[6]/div[1]/div/div[1]/div[1]");
    UIElement trying = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_media_plan_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[7]/div[13]/div/div[1]");//*[@id="new_client_content_blogpost"]/div[9]/div[13]/div/div[1]
    UIElement save = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[8]/div/div/input");
    UIElement reference = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[1]/div/div/div/div/div/input");
    UIElement referenceAccordion = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[1]/div/div/div/div/div/span/a/i");
    UIElement suffBrand = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_5_correct_true\"]");
    UIElement suffObjective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_6_correct_true\"]");
    UIElement suffWebsite = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_7_correct_true\"]");
    UIElement suffProduct = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_8_correct_true\"]");
    UIElement suffBudget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_9_correct_true\"]");
    UIElement suffPlatform = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_10_correct_true\"]");
    UIElement suffDuration = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_11_correct_true\"]");
    UIElement suffCampaign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_12_correct_true\"]");
    UIElement suffIdea = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_13_correct_true\"]");
    UIElement suffTarget = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_14_correct_true\"]");
    UIElement rate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[15]/div[2]/div/div/a[2]");
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[15]/div[3]/a");
    UIElement saveInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_media_plan\"]/div[11]/input");
    UIElement rateInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[17]/div/div/a[4]");
    UIElement clickAdd = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Click to add')]");


    public void clickReferenceWebsiteAccordion() {
        tDriver.myclicking(referenceAccordion);
    }

    public void enterBudgetSocialMediaPlan(String arg0) {
        tDriver.mytype(budget,arg0);
    }

    public void enterObjectiveSocialMediaPlan(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void enterClientProjectSocialMediaPlan() {
        tDriver.mywait(project);
    }

    public void enterWhoAreYouTryingToReach() {
        tDriver.mywait(trying);
    }

    public void selectWhatDoYouWantYourTgToDo() {
        tDriver.mywait(tg);
    }

    public void clickSaveButtonSocialMediaPlanInput() {
        tDriver.myclicking(save);
    }

    public void enterReferenceWebsiteLink(String arg0) {
        tDriver.mytype(reference,arg0);
    }


    public void selectBrandProductSpecificSuff() {
        tDriver.myclicking(suffBrand);
    }

    public void selectObjectiveSocialMediaPlan() {
        tDriver.myclicking(suffObjective);
    }

    public void selectReferenceWebsiteLinkSuff() {
        tDriver.myclicking(suffWebsite);
    }

    public void selectEstimatedBudgetSuff() {
        tDriver.myclicking(suffBudget);
    }

    public void selectPlatformsSuff() {
        tDriver.myclicking(suffPlatform);
    }

    public void selectSuggestedDurationSuff() {
        tDriver.myclicking(suffDuration);
    }

    public void selectProductSuffSocialMediaPlan() {
        tDriver.myclicking(suffProduct);
    }

    public void selectCampaignSuffSocialMediaPlan() {
        tDriver.myclicking(suffCampaign);
    }

    public void selectIdeaSuff() {
        tDriver.myclicking(suffIdea);
    }

    public void selectTargetGroupSuff() {
        tDriver.myclicking(suffTarget);
    }

    public void rateTheOutputSocialMediaPlan() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptButtonSocialMediaPlan() {
        tDriver.myassignscroll(accept);
    }

    public void clickSaveButtonSocialMPInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheInputSocialMediaPlan() {
        tDriver.myclicking(rateInput);
    }

    public void clickClickToAddLink() {
        tDriver.myclicking(clickAdd);
    }


}
