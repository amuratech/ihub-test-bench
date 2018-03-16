package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebMaintenanceOutputPage extends BasePage{

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d82cd5461f40e10dca51c\"]/div[10]/input");
    UIElement output = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[2]/a");
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_work_output_thought_process')]");
    UIElement URL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'_work_output_url')]");
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work_output\"]/div[3]/div/div/input");
    UIElement update = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");
    UIElement radioURL = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_1_correct_true\"]");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[6]/div/div/a[4]");
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[4]/input[1]");

    public void clickStartWorkingOnThisTaskWebmaintenance() {
        tDriver.myclicking(startWorking);
    }

    public void clickAddOutputWebmaintenance() {
        tDriver.myclicking(output);
    }

    public void enterThoughtProcessWebmaintenance(String arg0) {
        tDriver.mytype(thought,arg0);
    }

    public void enterURLOutputWebmaintenance(String arg0) {
        tDriver.mytype(URL,arg0);

    }

    public void clickSubmitWebmaintenance() {
        tDriver.myclicking(submit);
    }

    public void clickUpdateOutputWebmaintenance() {
        tDriver.myclicking(update);
    }

    public void selectRadioURLWebmaintenance() {
        tDriver.myclicking(radioURL);
    }

    public void rateTheOutputWebmaintenance() {
        tDriver.myclicking(rateOutput);
    }

    public void clickTheDeliverButtonWebmaintenance() {
        tDriver.myclicking(deliver);
    }
}
