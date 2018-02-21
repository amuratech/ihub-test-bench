package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoPlanInputPage extends BasePage {

    UIElement inputBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a
    UIElement req = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_plan_requirements\"]");
    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_seo_plan')]/div[2]/div/div/div/div[1]");//*[@id="new_client_seo_plan_output"]/div[2]/div/div/div/div[1]
    UIElement checkBox = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_plan_brand_focus\"]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan\"]/div[4]/input[2]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan\"]/div[5]/input");
    UIElement seo = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[9]/a");
    UIElement updateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[9]/input");//*[@id="edit_client_seo_task_599009d95461f40e10dcaba1"]/div[9]/input
    //*[@id="client_media_plan_review_review_fields_attributes_4_correct_true"]
    UIElement radioReq= new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_5_correct_true\"]");
    UIElement brand = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_6_correct_true\"]");
    UIElement radioProduct = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_7_correct_true\"]");
    UIElement productIISuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_8_correct_true\"]");
    UIElement productIIISuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_review_review_fields_attributes_9_correct_true\"]");
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[10]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[12]/a");
    UIElement startDate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_seo_task_start_date\"]");
    UIElement changeAssignee = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[6]/div[1]/div/div");//*[@id="edit_client_seo_task_599009d95461f40e10dcaba1"]/div[6]/div[1]/div/div
    UIElement updateTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_seo_task_599009d95461f40e10dcaba1"]/div[10]/input
    UIElement request = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'new_client_')]/div[12]/input");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[3]/div/div/div/div/div/span/a/i");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement urlObjective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_url')]");//*[@id="client_seo_plan_output_sub_objectives_attributes_1507888932735_url"]
    UIElement strategy = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_strategy')]");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement activities = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_activities')]");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement desired = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_outcome')]");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement clickAddQuora = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[5]/div[1]/a");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement url = new UIElement(UIType.TextBox, UILocatorType.Xpath,"");//*[@id="new_client_seo_plan_output"]/div[6]/div[2]/div/div/div[2]/div[2]/div/label
    UIElement weeks = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_weeks_to_publish')]");//*[@id="new_client_seo_review"]/div[12]/input
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[5]/div[2]/div/div/div[3]/div/div/div/div[1]");//*[@id="new_client_seo_plan_output"]/div[5]/div[2]/div/div/div[3]/div/div/div/div[1]
    UIElement existingURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_url')]");//*[@id="client_seo_plan_output_google_business_listings_attributes_1507890989738_url"]
    UIElement clickAddGoogle = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[6]/div[1]/a");//*[@id="client_seo_plan_output_google_business_listings_attributes_1507890486739_url"]

    public void clickInputBrief() {
        tDriver.myclicking(inputBrief);
    }

    public void enterRequirements(String arg0) {
        tDriver.mytype(req,arg0);
    }

    public void selectProduct() {
        tDriver.myseoproduct(product);
    }

    public void clickCheckBox() {
        tDriver.myclicking(checkBox);
    }

    public void clickOnSaveAndPublish() {
        tDriver.mywait(savePublish);
    }

    public void clickSave() {
        tDriver.myclicking(save);
    }

    public void clickSEO() {
        tDriver.myclicking(seo);
    }

    public void selectReq() {
        tDriver.myclicking(radioReq);
    }

    public void selectBrandFocus() {
        tDriver.myclicking(brand);
    }

    public void selectProducts() {
        tDriver.myclicking(radioProduct);
    }

    public void clickAccept() {
        tDriver.myassignscroll(accept);
    }

    public void clickUpdateTheTaskButton() {
        tDriver.myclicking(updateInput);
    }

    public void rateInputBrief() {
        tDriver.myclicking(rateInput);
    }

    public void changeTheStartDate() {
        tDriver.mywait(startDate);
    }

    public void clickUpdateTheTask() {
        tDriver.myclicking(updateTask);
    }

    public void changeTheAssignee() {
        tDriver.mytasktype(changeAssignee);
    }

    public void selectProductsII() {
        tDriver.myclicking(productIISuff);
    }

    public void selectProductsIII() {
        tDriver.myclicking(productIIISuff);
    }

    public void clickRequestChangesSeo() {
        tDriver.myclicking(request);
    }

    public void clickAccordionToAddTheTopic() {
        tDriver.myclicking(accordion);
    }

    public void enterURLForObjective(String arg0) {
        tDriver.mytype(urlObjective,arg0);
    }

    public void enterStrategy(String arg0) {
        tDriver.mytype(strategy,arg0);
    }

    public void enterActivitiesDone(String arg0) {
        tDriver.mytype(activities,arg0);
    }

    public void enterDesiredOutcome(String arg0) {
        tDriver.mytype(desired,arg0);
    }

    public void clickClickToAddLinkForQuora() {
        tDriver.myclicking(clickAddQuora);
    }

    public void enterURLToQuoraPost(String arg0) {
        tDriver.mytypesame(url,arg0);
    }

    public void enterWeeksToPublish(String arg0) {
        tDriver.mytype(weeks,arg0);
    }

    public void enterKeywordsOfFocusForQuoraPost() {
        tDriver.mykeywordsoffocus(keywords);
    }

    public void enterExistingURL(String arg0) {
        tDriver.mytypesameagain(existingURL,arg0);
    }

    public void selectCategoryForBusinessListing() {
        tDriver.mycategoryseo();
    }

    public void clickClickToAddLinkForGoogle() {
        tDriver.myclicking(clickAddGoogle);
    }
}
