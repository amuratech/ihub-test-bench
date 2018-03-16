package org.selenium.iHub.pages;

import org.selenium.iHub.steps.WebMaintenanceOutputSteps;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebCustomizedOutputPage extends BasePage {

    //-- For dynamically changing xpath, use 'contains'--
    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'task_')]/div[10]/input");
    UIElement thought = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_task_customized_requirement_output_thought_process\"]");
    UIElement stagingLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_customized_requirement_output_staging_link\"]");
    UIElement uploadDoc = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_customized_requirement_output_qa_team_approval_doc\"]");
    UIElement submit = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_customized_requirement_output\"]/div[3]/div/div/input");
    UIElement changeStatus = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[1]");//*[@id="edit_client_seo_task_599009d95461f40e10dcaba1"]/div[5]/div/div/div/div[1]
    UIElement updateStatus = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_development_task_598f4dbd5461f40e10dca7f2"]/div[10]/input
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[7]/div/div/a[4]");//*[@id="new_client_development_review"]/div[5]/div/div/a[5]
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"move_forward\"]");//*[@id="edit_client_development_task_598f4dbd5461f40e10dca7f2"]/div[10]/input
    UIElement projectLink = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_customized_requirement_output_qa_software_project_link\"]");//*[@id="edit_client_development_task_598f4dbd5461f40e10dca7f2"]/div[10]/input
    UIElement link = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_0_answer\"]");//*[@id="edit_client_development_task_598f4dbd5461f40e10dca7f2"]/div[10]/input

    public void clickStartWorkingWebcustomized() {
        tDriver.myclick(startWorking);
    }

    public void enterQASoftwareLinkWebcustomized(String arg0) {
        tDriver.mytype(projectLink,arg0);
    }

    public void enterStagingLinkWebcustomized(String arg0) {
        tDriver.mytype(stagingLink,arg0);
    }

    public void uploadApprovalDocWebcustomized() {
        tDriver.mytxtupload(uploadDoc);
    }

    public void clickSubmitWebcustomized() {
        tDriver.myscreenshot2(submit);
    }

    public void changeTheStatusWebdev() {
        tDriver.mywait(changeStatus);
    }

    public void clickUpdateButtonWebdev() {
        tDriver.mywait(updateStatus);
    }

    public void rateTheOutputWebcustomized() {
        tDriver.myclicking(rateOutput);
    }

    public void clickDeliverWebcustomized() {
        tDriver.myclick(deliver);
    }

    public void giveLinkToQAProject(String arg0) {
        tDriver.mytype(link, arg0);
    }
}
