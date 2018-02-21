package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentEmailerOutputPage extends BasePage {

    UIElement cta = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_emailer_output_call_to_action\"]");
    UIElement subject = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_emailer_output_subject_line\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_emailer_output\"]/div[8]/input");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");
    UIElement design = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");
    UIElement tg = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_3_answer\"]");
    UIElement copy = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_4_answer\"]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[17]/div/div/a[4]");

    public void enterCallToAction(String arg0) {
        tDriver.mytype(cta, arg0);
    }

    public void enterSubjectLine(String arg0) {
        tDriver.mytype(subject,arg0);
    }

    public void clickSaveButtonContentEmailerOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHasTheBriefBeenFollowedContentEmailer(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterAreTheDesignCuesIfSubmittedInLineWithTheSubmittedOutput(String arg0) {
        tDriver.mytype(design,arg0);
    }

    public void enterDoesTheContentCaterToGivenTGContentEmailer(String arg0) {
        tDriver.mytype(tg,arg0);
    }

    public void enterHasTheCopyWriterFollowedTheNecessaryToneOfVoiceContentEmailer(String arg0) {
        tDriver.mytype(copy,arg0);
    }

    public void rateTheOutputContentEmailer() {
        tDriver.myclicking(rateOutput);
    }
}
