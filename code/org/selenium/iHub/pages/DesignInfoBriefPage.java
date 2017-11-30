package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignInfoBriefPage extends BasePage{

    UIElement project = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_infographic_product_id-selectized\"]");
    UIElement content = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_infographic\"]/div[2]/div/div[3]/div[2]/p");
    UIElement info = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_infographic\"]/div[3]/div[1]/div[1]");
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_infographic_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_infographic\"]/div[5]/div[13]/div/div[1]");
    UIElement publish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_infographic\"]/div[6]/input[2]");
    UIElement radioContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_5_correct_true\"]");
    UIElement radioInfo = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement ref = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_7_correct_true\"]    ");
    UIElement target = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_8_correct_true\"]");
    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_9_correct_true\"]");
    UIElement radioRef = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_10_correct_true\"]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[14]/a");
    UIElement thoughtProcess = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[13]/a");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_output\"]/div[2]/input");
    UIElement upload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div/div/div[1]/div[2]/div/div/input");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div/div/div[1]/div[2]/div/div/input
    UIElement backTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"/html/body/nav/div[2]/ul/li[2]/a");
    UIElement status = new UIElement(UIType.TextBox, UILocatorType.Xpath,"");
    UIElement saveReview  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[2]/input");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement referenceTask  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_infographic_client_content_task_doc\"]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement suffRefLinks  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_attributes_7_correct_true')]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement suffContentTaskDoc  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_attributes_8_correct_true')]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement suffImages  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_attributes_9_correct_true')]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement suffProduct  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_attributes_10_correct_true')]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement suffContentTask  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_attributes_11_correct_true')]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input
    UIElement rateInput  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[8]/div/div/a[4]");//*[@id="edit_client_social_task_599be1615461f4119acb7835"]/div[2]/input

    public void enterProject() {
        tDriver.mywait(project);
    }

    public void selectInfographics() {
        tDriver.mywait(info);
    }

    public void selectTrying() {
        tDriver.mywait(trying);
    }

    public void selectTg() {
        tDriver.mytasktype(tg);
    }

    public void clickPublish() {
        tDriver.mywait(publish);
    }

    public void selectRadioContent() {
        tDriver.mywait(radioContent);
    }

    public void selectRadioInfographics() {
        tDriver.mywait(radioInfo);
    }

    public void selectRef() {
        tDriver.mywait(ref);
    }

    public void selectTarget() {
        tDriver.mywait(target);
    }

    public void selectRadioProduct() {
        tDriver.mywait(product);
    }

    public void selectRefImages() {
        tDriver.mywait(radioRef);
    }

    public void clickOnAccept() {
        tDriver.mywait(accept);
    }

    public void enterThoughtProcess() {
        tDriver.mywait(thoughtProcess);
    }

    public void clickOnSaveButton() {
        tDriver.mywait(save);
    }

    public void clickUploadFiles() {
        tDriver.myjpgupload(upload);
    }

    public void clickBackToTask() {
        tDriver.mywait(backTask);
    }

    public void selectTheStatus() {
        tDriver.mydetailreview(status);
    }

    public void clickSaveForReview() {
        tDriver.myclicking(saveReview);
    }

    public void enterClientContentReferenceTask() {
        tDriver.mytxtupload(referenceTask);
    }

    public void selectReferenceLinksSuffInfo() {
        tDriver.myclicking(suffRefLinks);
    }

    public void selectClientContentTaskDocSuffInfo(){
        tDriver.myclicking(suffContentTaskDoc);
    }

    public void selectReferenceImagesSuffInfo() {
        tDriver.myclicking(suffImages);
    }

    public void selectProductSufficientInfo() {
        tDriver.myclicking(suffProduct);
    }

    public void selectClientContentTaskSuffInfo() {
        tDriver.myclicking(suffContentTask);
    }

    public void rateTheInputBriefDesignInfographics() {
        tDriver.myclicking(rateInput);
    }
}
