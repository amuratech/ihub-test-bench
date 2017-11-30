package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignInfoOutputPage extends BasePage {

    UIElement thought = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_0_correct_true\"]");//*[@id="client_design_review_review_fields_attributes_0_correct_true"]
    UIElement doc = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_1_correct_true\"]");
    UIElement reason = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_0_answer\"]");
    UIElement brand = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_1_answer\"]");
    UIElement fonts = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_1_answer\"]");
    UIElement creative = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_2_answer\"]");
    UIElement aboutThought = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_3_answer\"]");
    UIElement ifDelayed = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_4_answer\"]");
    UIElement rate = new UIElement(UIType.RadioButton, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[8]/div/div/a[4]");

    public void selectRadioThought() {
        tDriver.myclicking(thought);
    }

    public void selectRadioDoc() {
        tDriver.myclicking(doc);
    }

    public void enterReasonForIncorrect() {
        tDriver.mywait(reason);
    }

    public void enterAboutBrandGuidelines() {
        tDriver.mywait(brand);
    }

    public void enterAboutCorrectFonts() {
        tDriver.mywait(fonts);
    }

    public void enterAboutCreative() {
        tDriver.mywait(creative);
    }

    public void enterAboutThoughtProcess() {
        tDriver.mywait(aboutThought);
    }

    public void enterIfDelayed() {
        tDriver.mywait(ifDelayed);
    }

    public void rateTheOutput() {
        tDriver.myclicking(rate);
    }
}
