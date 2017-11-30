package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialCMSOutputPage extends BasePage {

    UIElement startWorking = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[contains(@id,'edit_client_social_task_')]/div[10]/input");//*[@id="edit_client_social_task_599a7e5b5461f4287c21cf29"]/div[10]/input
    UIElement addOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[4]/a");//*[@id="edit_client_social_task_599a7e5b5461f4287c21cf29"]/div[10]/input
    UIElement postedDate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_to_be_posted_on\"]");
    UIElement hashtags = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms_output\"]/div[2]/div/div/div[1]");
    UIElement topic = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_topic\"]");
    UIElement theme = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_theme\"]");
    UIElement structure = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_structure\"]");
    UIElement tone = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_tone\"]");
    UIElement goal = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_goal\"]");
    UIElement link = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_post_output\"]/div[1]/div/div/div/input");
    UIElement upload = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_cms_output_reference_image\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_post_output\"]/div[2]/input");
    UIElement cmsI = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_0_correct_true\"]");
    UIElement cmsII = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_1_correct_true\"]");
    UIElement businessObjective = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_0_answer\"]");
    UIElement audiencesTg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement earlierCMS = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_2_answer\"]");
    UIElement hashtagsSugg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_3_answer\"]");
    UIElement hashtagsTrending = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_4_answer\"]");
    UIElement rate = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[3]/div/div/a[4]");//*[@id="new_client_social_review"]/div[3]/div/div/a[4]
    UIElement deliver = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[9]/input[1]");
    UIElement rework = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[9]/input[2]");
    UIElement linkAccordion = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_post_output\"]/div[1]/div/div/div/span/a/i");
    UIElement orm = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_plan_output\"]/div[2]/div[2]/div[2]/div/div/div/div[1]");
    UIElement objective = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_0_answer\"]//*[@id=\"new_client_social_plan_output\"]/div[2]/div[2]/div[2]/div/div/div/div[1]");
    UIElement tg = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_1_answer\"]");
    UIElement repitition = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_2_answer\"]");
    UIElement hashtag = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_3_answer\"]");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[13]/div/div/a[4]");
    UIElement hashtagTrending = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_social_review_questions_attributes_4_answer\"]");

    public void clickStartWorkingButtonSocial() {
        tDriver.mywait(startWorking);
    }

    public void selectToBePostedOnDate() {
        tDriver.mywait(postedDate);
    }

    public void enterHashtagsSocialOutput() {
        tDriver.mywait(hashtags);
    }

    public void enterTopicSocialOutput() {
        tDriver.mywait(topic);
    }

    public void enterThemeSocialOutput() {
        tDriver.mywait(theme);
    }

    public void enterStructure() {
        tDriver.mywait(structure);
    }

    public void enterTone() {
        tDriver.mywait(tone);
    }

    public void enterGoal() {
        tDriver.mywait(goal);
    }

    public void enterLinkSocialOutput(String arg0) {
        tDriver.mytype(link,arg0);
    }

    public void uploadReferenceImageSocialOutput() {
        tDriver.mytxtupload(upload);
    }

    public void clickSaveButtonSocialOutput() {
        tDriver.myclicking(save);
    }

    public void clickAddOutputSocial() {
        tDriver.myclicking(addOutput);
    }

    public void selectCmsOutputI() {
        tDriver.myclicking(cmsI);
    }

    public void selectCmsOutputII() {
        tDriver.myclicking(cmsII);
    }

    public void enterIsThisInLineWithClientSBusinessObjective() {
        tDriver.myclicking(businessObjective);
    }

    public void enterDoesItCaterToAllKindOfAudiencesTg() {
        tDriver.myclicking(audiencesTg);
    }

    public void enterIsThereRepititionFromTheEarlierCms() {
        tDriver.myclicking(earlierCMS);
    }

    public void enterAreTheHashtagsUsedInLineWithTheSuggestions() {
        tDriver.myclicking(hashtagsSugg);
    }

//    public void enterAreTheHashtagsUsedTrending() {
//        tDriver.myclicking(hashtagsTrending);
//    }

    public void rateTheOutputSocialPost() {
        tDriver.myclicking(rate);
    }

    public void clickDeliverSocialCms() {
        tDriver.myclicking(deliver);
    }

    public void clickReworkSocialCms() {
        tDriver.myclicking(rework);
    }

    public void clickLinkAccordion() {
        tDriver.myclicking(linkAccordion);
    }

    public void enterORMIssues() {
        tDriver.mysocialplanorm(orm);
    }

    public void enterIsThisInLineWithTheClientSBusinessObjective(String arg0) {
        tDriver.mytype(objective,arg0);
    }

    public void enterDoesItCaterToAllKindsOfAudiencesTGsForTheClient(String arg0) {
        tDriver.mytype(tg,arg0);
    }

    public void enterIsThereRepetitionFromTheEarlierPlan(String arg0) {
        tDriver.mytype(repitition,arg0);
    }

    public void enterAreTheHashtagsUsedInLineWithSuggestions(String arg0) {
        tDriver.mytype(hashtag,arg0);
    }

    public void rateTheOutputSocialPlan() {
        tDriver.myclicking(rateOutput);
    }

    public void enterAreTheHashtagsUsedTrending(String arg0) {
        tDriver.mytype(hashtagTrending,arg0);
    }
}
