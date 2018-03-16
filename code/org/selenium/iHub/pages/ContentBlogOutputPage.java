package org.selenium.iHub.pages;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentBlogOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_content_task_')]/div[8]/input");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement title = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_output_title\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement CTA = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_output_call_to_action\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement content = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost_output\"]/div[3]/div/div/div/div[3]/div[2]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_output_thought_process\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost_output\"]/div[7]/input");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement status = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_content_task_')]/div[5]/div[2]/div/div/div[1]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[5]/div[2]/div/div/div[1]
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_content_task_')]/div[8]/input");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement contentSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_0_correct_true')]");//*[@id="client_content_review_review_fields_attributes_0_correct_true"]
    UIElement CTASuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_1_correct_true')]");//*[@id="client_content_review_review_fields_attributes_1_correct_true"]
    UIElement titleSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_2_correct_true')]");//*[@id="client_content_review_review_fields_attributes_1_correct_true"]
    UIElement thoughtSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_3_correct_true')]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement designCue = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_4_correct_true')]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement cueImage = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_5_correct_true')]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement cueSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_fields_attributes_6_correct_true')]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement brief = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");
    UIElement contentCater = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement copywriter = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[14]/div/div/a[4]");//*[@id="new_client_content_review"]/div[11]/div/div/a[4]
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[12]/input[1]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement designImage = new UIElement(UIType.Button, UILocatorType.ClassName,"file_extension_validation");//*[@id="client_content_socialpost_output_design_cue_images_attributes_1510305692759_design_cue_image"]
    UIElement description = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_description')]");//*[@id="client_content_blogpost_output_design_cue_images_attributes_1510296097975_description"]
    UIElement tgCater = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input
    UIElement toneOfVoice = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");//*[@id="edit_client_content_task_599174365461f40a6e4a0793"]/div[8]/input

    public void clickStartWorkingOnThisTaskButtonContentblogpost() {
        tDriver.myclicking(startWorking);

    }

    public void enterTitleContentblogpost(String arg0) {
        tDriver.mytype(title,arg0);
    }

    public void selectCTAContentblogpost() {
        tDriver.mycontentblogpostcta();
    }

    public void enterContentContentblogpost(String arg0) {
        tDriver.mytype(content,arg0);
    }

    public void enterThoughtProcessContentblogpost(String arg0) {
        tDriver.mytype(thought,arg0);
    }


//    public void clickSaveContentblogpost() {
//        tDriver.myclicking(save);
//    }

    public void changeTheStatusContentblogpost() {
        tDriver.mywait(status);
    }

    public void clickUpdateContentblogpost() {
        tDriver.myclicking(update);
    }

    public void selectContentSuff() {
        tDriver.myclicking(contentSuff);
    }

    public void selectCTASuff() {
        tDriver.myclicking(CTASuff);
    }

    public void selectThoughtProcessSuff() {
        tDriver.myclicking(thoughtSuff);
    }

    public void rateTheOutputContentblogpost() {
        tDriver.myclicking(rate);
    }

    public void clickDeliverContentblogpost() {
        tDriver.myclicking(deliver);

    }

    public void selectDesignCueImageSuff() {
        tDriver.myclicking(designCue);
    }

    public void selectDesignCueImageRadioSuff() {
        tDriver.myclicking(cueImage);
    }

    public void selectRadioDesignCueImageSuff() {
        tDriver.myclicking(cueSuff);
    }

    public void selectHasTheBriefFollowed() {
        tDriver.mywait(brief);
    }

    public void selectContentCaterToTg() {
        tDriver.mywait(contentCater);
    }

    public void selectCopywriterFollowedTone() {
        tDriver.mywait(copywriter);
    }

    public void selectTitleSuff() {
        tDriver.myclicking(titleSuff);
    }

    public void uploadDesignCueImage() {
        tDriver.myjpgupload(designImage);
    }

    public void enterDescription(String arg0) {
        tDriver.mytype(description,arg0);
    }

    public void enterDoesTheContentCaterToGivenTG(String arg0) {
        tDriver.mytype(tgCater,arg0);
    }

    public void enterHasTheCopywriterFollowedTheNecessaryToneOfVoice(String arg0) {
        tDriver.mytype(toneOfVoice,arg0);
    }

    public void clickSaveButtonContentBlogpost() {
        tDriver.myclicking(save);
    }
}
