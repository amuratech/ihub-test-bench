package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialAuditInputPage extends BasePage{

    UIElement referenceURL = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit\"]/div[1]/div/div/div/div/div/input");
    UIElement accordion = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit\"]/div[1]/div/div/div/div/div/span/a/i");
    UIElement platform = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit\"]/div[2]/div/div/div/div[1]");
    UIElement requirement = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit\"]/div[3]/div/div/div/div[1]");
    UIElement specific = new UIElement(UIType.Link, UILocatorType.Xpath,"");
    UIElement saveInput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_audit\"]/div[6]/input");
    UIElement referenceLink = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_5_correct_true\"] ");
    UIElement suffPlatform = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_6_correct_true\"]");
    UIElement suffRequriements = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_7_correct_true\"]");
    UIElement suffObjective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_8_correct_true\"]");
    UIElement rate = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[11]/a");

    public void enterReferenceLinkSocial(String arg0) {
        tDriver.mytype(referenceURL,arg0);
    }

    public void enterPlatformToConsider() {
        tDriver.myplatormtoconsider(platform);
    }

    public void enterRequirementsSocialAudit() {
        tDriver.myrequirements(requirement);
    }

    public void enterSpecificObjectives() {
        tDriver.mywait(specific);
    }

    public void clickSaveButtonSocialAuditInput() {
        tDriver.myclicking(saveInput);
    }

    public void clickReferenceLinkAccordion() {
        tDriver.myclicking(accordion);
    }

    public void selectReferenceLinkSuff() {
        tDriver.myclicking(referenceLink);
    }

    public void selectPlatformToConsiderSuff() {
        tDriver.myclicking(suffPlatform);
    }

    public void selectReqirementsSuff() {
        tDriver.myclicking(suffRequriements);
    }

    public void selectSpecificObjectivesSuff() {
        tDriver.myclicking(suffObjective);
    }

    public void rateTheInputSocialAudit() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptButtonSocialAudit() {
        tDriver.myassignscroll(accept);
    }


}
