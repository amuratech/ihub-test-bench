package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentHoardingOutputPage extends BasePage {

    UIElement title  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_hoarding_output_title\"]");
    UIElement content = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'new_client_content_')]/div[3]/div/div/div/div[3]/div[2]");//*[@id="new_client_content_print_medium_output"]/div[3]/div/div/div/div[3]/div[2]
    UIElement thought = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[contains(@id,'_output_thought_process')]");//*[@id="client_content_website_output_thought_process"]
    UIElement saveOutput = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_content_hoarding_output\"]/div[7]/input");
    UIElement contentHoarding = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");
    UIElement brief = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");
    UIElement tg = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");
    UIElement copywriter = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_3_answer\"]");
    UIElement rateOutput = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[14]/div/div/a[4]");

    public void enterTitleContentHoarding(String arg0) {
        tDriver.mytype(title,arg0);
    }

    public void selectCallToAction() {
        tDriver.mycontentcta();
    }

    public void enterContentContent(String arg0) {
        tDriver.mytype(content,arg0);
    }

    public void enterThoughtProcessContent(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void clickSaveButtonContentHoardingOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterDoesTheContentEnsureItFitsForTheGivenTypeOfHoardingTheMentionedDimensions(String arg0) {
        tDriver.mytype(contentHoarding,arg0);
    }

    public void enterHasTheBriefBeenFollowedContentHoarding(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterDoesTheContentCaterToGivenTGContentHoading(String arg0) {
        tDriver.mytype(tg,arg0);
    }

    public void enterHasTheCopywriterFollowedTheNecessaryToneOfVoiceContentHoarding(String arg0) {
        tDriver.mytype(copywriter,arg0);
    }

    public void rateTheOutputContentHoarding() {
        tDriver.myclicking(rateOutput);
    }
}
