package org.selenium.iHub.pages;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebWebsiteOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_development_task_')]/div[11]/input");//*[@id="edit_client_development_task_59bf75015461f410255580a9"]/div[11]/input
    UIElement output = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[1]/div/div/ul/li[3]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[1]/div/div[1]/div/div/ul/li[2]/a
    UIElement thought = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'output_thought_process')]");//*[@id="client_development_task_website_development_output_thought_process"]
    UIElement thoughtProcess = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'output_thought_process')]");//*[@id="client_development_task_website_development_output_thought_process"]
    UIElement softwareLink = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_software_project_link')]");//*[@id="client_development_review_questions_attributes_0_answer"]
    UIElement stagingLink = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_output_staging_link')]");//*[@id="client_development_website_development_output_staging_link"]
//    UIElement linkSoftware = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_task_website_development_output_staging_link\"]");
//    UIElement linkStaging = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_task_website_development_output_staging_link\"]");
    UIElement approvalDoc = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_output_qa_team_approval_doc\"]");
    UIElement save = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development_output\"]/div[3]/div/div/input");
    UIElement status = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[5]/div/div/div/div[1]");//*[@id="edit_client_seo_task_599150d35461f40a6e4a0507"]/div[5]/div/div/div/div[1]
    UIElement update = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_campaign_task_599d6ef55461f47b6352666a"]/div[9]/input
    UIElement process = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_0_correct_true\"]");
    UIElement staging = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_1_correct_true\"]");
    UIElement software = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_2_correct_true\"]");
    UIElement approvalQADoc = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_review_fields_attributes_3_correct_true\"]");
    UIElement rateDesign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[5]/div/div/a[4]");
    UIElement rateLibraries = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[6]/div/div/a[4]");
    UIElement rateCoding = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[7]/div/div/a[4]");
    UIElement copyReview = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_4_answer\"]");
    UIElement designReview = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_5_answer\"]");
    UIElement desktopScore = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_6_answer\"]");
    UIElement mobileScore = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_7_answer\"]");
    UIElement rateWebsite = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[13]/div/div/a[4]");
    UIElement rework = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[13]/input[2]");
    UIElement deliver = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"move_forward\"]");
    UIElement newStatus = new UIElement(UIType.Link, UILocatorType.Xpath,"");
    UIElement updateTask = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[9]/input");//*[@id="edit_client_development_task_5992c79f5461f40de73cd0bb"]/div[10]/input
    UIElement updateTaskStatus = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[4]/div/div/ul/li[2]/a/i");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[2]/div/div[4]/div/div/ul/li[3]/a/i
    UIElement start = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[4]/div/div/ul/li[2]/ul/li[1]");//*[@id="edit_client_development_task_5992c79f5461f40de73cd0bb"]/div[10]/input
    UIElement updateTaskStatusToReview = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div[4]/div/div/ul/li[3]/a/i");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[1]/div/div[2]/div/a
    UIElement review = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[2]/div/div[4]/div/div/ul/li[3]/ul/li[1]");//*[@id="edit_client_development_task_5992c79f5461f40de73cd0bb"]/div[10]/input
    UIElement link = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_development_review_questions_attributes_0_answer\"]");//*[@id="edit_client_development_task_5992c79f5461f40de73cd0bb"]/div[10]/input


    public void clickStartWorkingButtonWebdev() {
        tDriver.myclicking(startWorking);
    }

    public void clickAddOutput() {
        tDriver.myclicking(output);
    }

    public void enterWebThoughtProcess() {
        tDriver.mywait(thought);
    }

    public void enterThoughtProcess(String arg0) {
        tDriver.mytype(thoughtProcess,arg0);
    }

    public void enterQASoftwareLink() {
        tDriver.mywait(softwareLink);
    }

    public void enterStagingLink() {
        tDriver.mywait(stagingLink);
    }

    public void enterQASoftwareLink(String arg0) {
        tDriver.mytype(softwareLink,arg0);
    }

    public void enterStagingLink(String arg0) {
        tDriver.mytype(stagingLink,arg0);
    }

    public void uploadApprovalDoc() {
        tDriver.mytxtupload(approvalDoc);
    }

    public void clickSaveButton() {
        tDriver.myclicking(save);
    }

    public void changeTheStatus() {
        tDriver.myreview(status);
    }

    public void clickUpdateTaskButton() {
        tDriver.myclick(update);
    }

    public void selectWebdevThoughtProcess() {
        tDriver.myclicking(process);
    }

    public void selectStagingLink() {
        tDriver.myclicking(staging);
    }

    public void selectQALink() {
        tDriver.myclicking(software);
    }

    public void selectApprovalDoc() {
        tDriver.myclicking(approvalQADoc);
    }

    public void rateTheAdherenceToDesign() {
        tDriver.myclicking(rateDesign);
    }

    public void rateTheUsageOfLibraries() {
        tDriver.myclicking(rateLibraries);
    }

    public void rateTheAdherenceToCoding() {
        tDriver.myclicking(rateCoding);
    }

    public void enterCopyReview(String arg0) {
        tDriver.mytype(copyReview,arg0);
    }

    public void enterDesignReview(String arg0) {
        tDriver.mytype(designReview,arg0);
    }

    public void enterDesktopPageSpeedScore(String arg0) {
        tDriver.mytype(desktopScore,arg0);
    }

    public void enterMobilePageSpeedScore(String arg0) {
        tDriver.mytype(mobileScore,arg0);
    }

    public void rateTheWebsiteOutput() {
        tDriver.myclicking(rateWebsite);
    }

    public void clickRework() {
        tDriver.myclicking(rework);
    }

    public void clickDeliverButton() {
        tDriver.myscreenshot2(deliver);
    }

    public void selectStatus() {
        tDriver.myreworkstart(newStatus);
    }

    public void clickUpdate() {
        tDriver.myclicking(updateTask);
    }


    public void clickUpdateTaskStatusButton() {
        tDriver.myclicking(updateTaskStatus);
    }

    public void clickStart() {
        tDriver.myclicking(start);
    }

    public void clickUpdateTaskStatus() {
        tDriver.myclicking(updateTaskStatusToReview);
    }

    public void clickReview() {
        tDriver.myclicking(review);
    }

    public void enterLinkToQAProject(String arg0) {
        tDriver.mytype(link,arg0);
    }

}
