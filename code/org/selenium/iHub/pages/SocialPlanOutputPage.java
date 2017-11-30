package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialPlanOutputPage extends BasePage{

    UIElement thoughtProcess = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_output_thought_process')]");//*[@id="client_content_sitemap_output_thought_process"]
    UIElement topic = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_plan_output_plan_models_attributes_0_topic\"]");//*[@id="client_content_seo_plan_output_outputs_attributes_0_blog_topic"]
    UIElement hashtags = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan_output\"]/div[3]/div[2]/div/div/div[4]/div[1]/div/div/div[1]");
    UIElement goal = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_plan_output_plan_models_attributes_0_goal\"]");
    UIElement imageRef = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_plan_output_plan_models_attributes_0_reference_image\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan_output\"]/div[6]/input");

    public void enterThoughtProcess(String arg0) {
        tDriver.mytype(thoughtProcess,arg0);
    }

    public void enterTopic(String arg0) {
        tDriver.mytype(topic,arg0);
    }

    public void selectTheme() {
        tDriver.mytheme();
    }

    public void selectImageFormatSocialPlan() {
        tDriver.mysocialplanimageformat();
    }

    public void enterHashtags(String arg0) {
        tDriver.mytype(hashtags,arg0);
    }

    public void selectStructure() {
        tDriver.mystructure();
    }

    public void selectTonesOfVoice() {
        tDriver.mytonesofvoice();
    }

    public void enterGoal(String arg0) {tDriver.mytype(goal,arg0);
    }

    public void uploadReferenceImage() {
        tDriver.myjpgupload(imageRef);
    }

    public void clickSaveButtonSocialPlanOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHashtagsSocialPlanOutput() {
        tDriver.mytypeaction();
    }
}
