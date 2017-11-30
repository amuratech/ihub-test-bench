package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentSocialPostOutputPage extends BasePage{

    UIElement thought = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_socialpost_output_thought_process\"]");
    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_socialpost_output_content\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_socialpost_output\"]/div[5]/input");
    UIElement copy = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");
    UIElement designCue = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");

    public void enterThoughtProcessContentSocialPost(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void uploadContentDocContentSocialPost() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonContentSocialPost() {
        tDriver.myclicking(save);
    }

    public void enterHasTheCopyWriterFollowedTheNecessaryToneOfVoice(String arg0) {
        tDriver.mytype(copy,arg0);
    }

    public void enterAreTheDesignCuesInLineWithTheSubmittedOutputContentSocialPost(String arg0) {
        tDriver.mytype(designCue,arg0);
    }
}
