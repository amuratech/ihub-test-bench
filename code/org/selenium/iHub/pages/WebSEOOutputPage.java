package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebSEOOutputPage extends BasePage{

    UIElement start = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_59c0c32c5461f47840bbebe3\"]/div[11]/input");
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_seo_update_output_thought_process')]");
    UIElement URL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_seo_update_output_url')]");
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_seo_update_output\"]/div[2]/div/div/input");
    UIElement status = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598c60675461f40e10dca058\"]/div[5]/div/div/div/div[1]");
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598c60675461f40e10dca058\"]/div[10]/input");//*[@id="edit_client_development_task_598d51bf5461f40e10dca2f8"]/div[10]/input
    UIElement radioURL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_1_correct_true\"]");
    UIElement rating = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[3]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_forward\"]");
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[4]/input[2]");
    UIElement updateRework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598c60675461f40e10dca058\"]/div[9]/input");

    public void clickStartWorking() {
        tDriver.mywait(start);
    }

    public void enterThoughtProcessWebseo(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void enterURLWebseo(String arg0) {
        tDriver.mytype(URL,arg0);
    }

    public void clickSubmitWebseo() {
        tDriver.myclicking(submit);
    }

    public void selectStatusWeb() {
        tDriver.mywait(status);
    }

    public void clickUpdateButton() {
        tDriver.myclicking(update);
    }

    public void selectURLWebseo() {
        tDriver.myclicking(radioURL);
    }

    public void ratingWebseoOutput() {
        tDriver.myclicking(rating);
    }

    public void clickDeliverWebseo() {
        tDriver.myclicking(deliver);
    }

    public void clickOnRework() {
        tDriver.myclicking(rework);
    }

    public void clickUpdateWeb() {
        tDriver.myclicking(updateRework);
    }
}
