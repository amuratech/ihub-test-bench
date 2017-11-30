package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DesignPrintMediaBriefPage extends BasePage{

    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_print_medium\"]/div[1]/div[1]/div[1]");
    UIElement subType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_print_media_type-selectized\"]");
    UIElement content = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_content\"]");
    UIElement width = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_dimension_width\"]");
    UIElement height = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_dimension_height\"]");//*[@id="client_content_hoarding_height"]
    UIElement gender = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_print_medium\"]/div[9]/div[3]/div/div/div/div[1]");
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_target_group_attributes_target_audience\"]");
    UIElement tg = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_print_medium\"]/div[9]/div[13]/div/div[1]");
    UIElement publish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_infographic\"]/div[5]/input");
    UIElement media = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_5_correct_true\"]");
    UIElement radioContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement dimension = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_6_correct_true\"]");
    UIElement usps = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_7_correct_true\"]");
    UIElement budget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_budget_per_brochure\"]");//*[@id="client_marketing_brief_output_budget"]
    UIElement paper = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_9_correct_true\"]");//*[@id="client_design_review_review_fields_attributes_10_correct_true"]
    UIElement target = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_11_correct_true\"]");
    UIElement productInfo = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_12_correct_true\"]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[16]/a");
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_review\"]/div[11]/div/div/a[4]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_design_output_598ad8815461f40e9bd1155e\"]/div[2]/input"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement paperType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_paper_type\"]"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement referenceTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_print_medium_content_print_medium_doc\"]"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement suffPMDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_10_correct_true\"]"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement suffPMReference = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_12_correct_true\"]"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement suffBudget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_8_correct_true\"]"); //*[@id="new_client_design_output"]/div[2]/input
    UIElement suffProduct = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_review_review_fields_attributes_11_correct_true\"]"); //*[@id="new_client_design_output"]/div[2]/input

    public void enterProductName() {
        tDriver.mywait(product);
    }

    public void selectSubType() {
        tDriver.myclicking(subType);
    }

    public void enterContent() {
        tDriver.mywait(content);
    }

    public void enterWidth(String arg0) {
        tDriver.mytype(width,arg0);
    }

    public void enterHeight(String arg0) {
        tDriver.mytype(height,arg0);
    }

    public void enterGender() {
        tDriver.myclicking(gender);
    }

    public void enterTryingToReach() {
        tDriver.mywait(trying);
    }

    public void selectTgForPrintMedia() {
        tDriver.myclicking(tg);
    }

    public void clickSavePublish() {
        tDriver.myclicking(publish);
    }

    public void printMediaType() {
        tDriver.myclicking(media);
    }

    public void contentRadioButton() {
        tDriver.myclicking(radioContent);
    }

    public void dimension() {
        tDriver.myclicking(dimension);
    }

    public void usps() {
        tDriver.myclicking(usps);
    }

    public void budget() {
        tDriver.myclicking(suffBudget);
    }

    public void paperType() {
        tDriver.myclicking(paper);
    }

    public void target() {
        tDriver.myclicking(target);
    }

    public void productInfo() {
        tDriver.myclicking(productInfo);
    }

    public void clickOnAcceptButton() {
        tDriver.myclicking(accept);
    }

    public void rateTheInputBrief() {
        tDriver.myclicking(rate);
    }

    public void clickOnTheSaveButton() {
        tDriver.myclicking(save);
    }

    public void enterBudget(String arg0) {
        tDriver.mytype(budget,arg0);
    }

    public void enterPaperType(String arg0) {
        tDriver.mytype(paperType,arg0);
    }

    public void uploadContentPrintMediaReferenceDoc() {
        tDriver.mytxtupload(referenceTask);
    }

    public void selectContentPrintMediaDocSuffInfo() {
        tDriver.myclicking(suffPMDoc);
    }

    public void selectProductSuffInfo() {
        tDriver.myclicking(suffProduct);
    }

    public void selectContentPrintMediaReferenceTaskSuffInfo() {
        tDriver.myclicking(suffPMReference);
    }
}
