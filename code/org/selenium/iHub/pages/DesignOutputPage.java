package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");
    UIElement designOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[2]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[1]/div/div[4]/div/div/ul/li[1]/a
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_forward\"]");//*[@id="move_forward"]
    UIElement upload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[3]/div[1]/div/div[2]/div/input");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[3]/div[1]/div/div[2]/div
    UIElement thoughtProcess = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_output_thought_process')]");//*[@id="client_design_output_thought_process"]
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_output\"]/div[3]/input");//*[@id="new_client_design_output"]/div[2]/input
    UIElement suffThoughtProcess = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'0_correct_true')]");
    UIElement suffDesign = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'1_correct_true')]");
    UIElement brandGuidelines = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_0_answer\"]");//*[@id="client_design_review_questions_attributes_0_answer"]
    UIElement fonts = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_1_answer\"]");//*[@id="client_design_review_questions_attributes_1_answer"]
    UIElement creative = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_2_answer\"]");
    UIElement designer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_3_answer\"]");
    UIElement reason = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_questions_attributes_4_answer\"]");
    UIElement uploadDesigns = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div[1]/div/div[2]/div/input");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");//*[@id="new_client_design_review"]/div[11]/div/div/a[4]
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");//*[@id="new_client_design_review"]/div[11]/div/div/a[4]

    public void clickStartWorkingOnThisTask() {
        tDriver.mywait(startWorking);
    }

    public void clickDesignOutput() {
        tDriver.mywait(designOutput);
    }

    public void clickDeliver() {
        tDriver.mywait(deliver);
    }

    public void clickUpload() {
        tDriver.myjpgupload(upload);
    }

    public void enterThoughtProcessDesign(String arg0) {
        tDriver.mytype(thoughtProcess,arg0);
    }

    public void clickSaveButton() {
        tDriver.myclicking(save);
    }

    public void selectThoughtProcessSuffInfo() {
        tDriver.myclicking(suffThoughtProcess);
    }

    public void selectDesignSuffInfo() {
        tDriver.myclicking(suffDesign);
    }

    public void enterHaveTheBrandGuidelinesBeenFollowed(String arg0) {
        tDriver.mytype(brandGuidelines,arg0);
    }

    public void enterHasTheDesignerUsedCorrectColoursFonts(String arg0) {
        tDriver.mytype(fonts,arg0);
    }

    public void enterIsTheCreativeAsPerTheBrief(String arg0) {
        tDriver.mytype(creative,arg0);
    }

    public void enterHasTheDesignerExplainedHisThoughtProcess(String arg0) {
        tDriver.mytype(designer,arg0);
    }

    public void enterIfDelayedPleaseCommentOnTheReasonForTheDelay(String arg0) {
        tDriver.mytype(reason,arg0);
    }


    public void clickDeliverButton() {
        tDriver.myclicking(deliver);
    }

    public void uploadDesigns() {
        tDriver.myjpgupload(uploadDesigns);
    }

    public void rateOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void rateTheOutputDesignWebsite() {
        tDriver.myclicking(rate);
    }

}

