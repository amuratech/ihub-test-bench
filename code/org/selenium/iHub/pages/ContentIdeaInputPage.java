package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentIdeaInputPage extends BasePage{

    UIElement content = new UIElement(UIType.Link, UILocatorType.Xpath,"");
    UIElement taskType = new UIElement(UIType.Link, UILocatorType.Xpath,"");
    UIElement name = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_idea_name\"]");
    UIElement objective = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_idea_campaign_objective\"]");
    UIElement project = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea\"]/div[4]/div[1]/div/div[1]/div[1]");
    UIElement concepts = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_idea_required_minimum_concepts\"]");
    UIElement reason = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea\"]/div[6]/div/div/div[1]/div/div/input");
    UIElement accordion = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea\"]/div[6]/div/div/div[1]/div/div/span/a/i");
    UIElement save = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea\"]/div[9]/input");
    UIElement updateTask = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[7]/input");//*[@id="edit_client_content_task_59967c8b5461f4287c21c3c1"]/div[7]/input
    UIElement radioName = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_5_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement campaign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_6_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement aboutBrand = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_7_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement referenceLink = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_8_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement reasonInterest = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_9_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement requiredMinimum = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_10_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement blog = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_11_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement product = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_12_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement reference = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_13_correct_true\"]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement ratebrief = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[15]/div/div/a[4]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input
    UIElement accept = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[16]/a");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[7]/input

    public void enterNameContentIdea() {
        tDriver.mywait(name);
    }

    public void enterCampaignObjective(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void selectProjectContentIdea() {
        tDriver.mywait(project);
    }

    public void enterRequiredMinimumConcepts() {
        tDriver.mycopyideaminimumconcepts(concepts);
    }

    public void enterReasonOfInterests() {
        tDriver.mycopyideareasonsofinterest(reason);
    }

    public void clickAccordion() {
        tDriver.myclicking(accordion);
    }

    public void clickSaveContentIdea() {
        tDriver.myclicking(save);
    }

    public void changeTheStatusContentIdea() {
        tDriver.mypublish();
    }

    public void clickUpdateTaskButtonContentIdea() {
        tDriver.myclicking(updateTask);
    }

    public void selectNameRadioButton() {
        tDriver.myclicking(radioName);
    }

    public void selectCampaignObjective() {
        tDriver.myclicking(campaign);
    }

    public void selectAboutBrand() {
        tDriver.myclicking(aboutBrand);
    }

    public void selectReferenceLinks() {
        tDriver.myclicking(referenceLink);
    }

    public void selectReasonOfInterest() {
        tDriver.myclicking(reasonInterest);

    }

    public void selectRequiredMinimumConcepts() {
        tDriver.myclicking(requiredMinimum);
    }

    public void selectBlogContestIdea() {
        tDriver.myclicking(blog);
    }

    public void selectProductRadioButton() {
        tDriver.myclicking(product);
    }

    public void selectReferenceImages() {
        tDriver.myclicking(reference);
    }

    public void rateTheBriefContentIdea() {
        tDriver.myclicking(ratebrief);
    }

    public void clickAcceptContentIdea() {
        tDriver.myassignscroll(accept);
    }
}
