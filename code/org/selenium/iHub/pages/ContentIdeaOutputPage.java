package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentIdeaOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[8]/input");//*[@id="edit_client_social_task_599a7e5b5461f4287c21cf29"]/div[10]/input
    UIElement understanding = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output\"]/div[1]/div/div/div/div[3]/div[2]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[8]/input
    UIElement social = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output\"]/div[2]/div/div/div/div[3]/div[2]");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[8]/input
    UIElement blog = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output\"]/div[3]/div/div/div/div/div/input");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[8]/input
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output\"]/div[6]/input");//*[@id="edit_client_content_task_599432175461f40de73ce1a5"]/div[8]/input
    UIElement addConcepts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement keyConcepts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_idea_output_concept_key_concept\"]   ");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement map = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_idea_output_concept_mapping_to_product\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement conceptDetails = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output_concept\"]/div[2]/div/div/div/div[3]/div[2]/p");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement appeal = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_idea_output_concept_appeal_to_tg\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement saveAddConcepts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_idea_output_concept\"]/div[7]/input");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement viewConcepts = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[2]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement moodboards = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement file = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[1]/div/input");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement understandingSuff = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_0_correct_true\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement blogTopic = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_1_correct_true\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement socialEngagement = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_2_correct_true\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement concept = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_3_correct_true\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement brief = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement conceptResonate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement design = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement rateConcept = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[8]/div/div/a[4]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[11]/div/div/a[4]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[10]/input[1]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[10]/input[2]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement docUpload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_idea_output_idea_document\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement briefFollowed = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");//*[@id="client_content_review_questions_attributes_0_answer"]
    UIElement tg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li/a
    UIElement designCues = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");//*[@id="client_content_review_questions_attributes_2_answer"]


    public void clickStartWorkingButtonContentIdea() {
        tDriver.myclicking(startWorking);
    }

    public void enterUnderstandingFromTheCampaignBrief(String arg0) {
        tDriver.mytype(understanding,arg0);
    }

    public void enterSocialEngagementSuggestions(String arg0) {
        tDriver.mytype(social,arg0);
    }

    public void enterBlogTopicSuggestions() {
        tDriver.mycopyideablogsuggestions(blog);
    }

    public void clickSaveButtonContentIdea() {
        tDriver.myclicking(save);
    }

    public void clickAddConcepts() {
        tDriver.myclicking(addConcepts);
    }

    public void enterKeyConcepts() {
        tDriver.mywait(keyConcepts);
    }

    public void enterHowDoesItMap() {
        tDriver.mytxtupload(map);
    }

    public void enterConceptDetails() {
        tDriver.mywait(conceptDetails);
    }

    public void enterHowDoesItAppeal() {
        tDriver.mywait(appeal);
    }

    public void clickSaveContentIdeaAddConcepts() {
        tDriver.myclicking(saveAddConcepts);
    }

    public void clickViewConcepts() {
        tDriver.myclicking(viewConcepts);
    }

    public void selectViewDetails() {
        tDriver.myviewdetails();
    }

    public void clickMoodboards() {
        tDriver.myclicking(moodboards);
    }

    public void uploadFile() {
        tDriver.myjpgupload(file);
    }

    public void selectUnderstanding() {
        tDriver.myclicking(understandingSuff);
    }

    public void selectBlogTopicSuggestion() {
        tDriver.myclicking(blogTopic);
    }

    public void selectSelectSocialEngagementSuggestions() {
        tDriver.myclicking(socialEngagement);
    }

    public void selectConcept() {
        tDriver.myclicking(concept);
    }

    public void enterHasTheBriefFollowed() {
        tDriver.mywait(brief);
    }

    public void enterDoesTheConceptResonateWell() {
        tDriver.mywait(conceptResonate);
    }

    public void enterAreTheDesingCuesInLine() {
        tDriver.mywait(design);
    }

    public void rateTheConceptTesting() {
        tDriver.myclicking(rateConcept);
    }

    public void rateTheOutputContentIdea() {
        tDriver.myclicking(rate);
    }

    public void clickDeliverContentIdea() {
        tDriver.myclicking(deliver);
    }

    public void clickReworkContentIdea() {
        tDriver.myclicking(rework);
    }

    public void uploadADetailedDoc() {
        tDriver.mytxtupload(docUpload);
    }

    public void enterHasTheBriefBeenFollowed(String arg0) {
        tDriver.mytype(briefFollowed,arg0);
    }

    public void enterDoesTheConceptResonateWellWithAllTGsMentionedInTheBrief(String arg0) {
        tDriver.mytype(tg,arg0);
    }

    public void enterAreTheDesignCuesInLineWithTheSubmittedOutput(String arg0) {
        tDriver.mytype(designCues,arg0);
    }
}
