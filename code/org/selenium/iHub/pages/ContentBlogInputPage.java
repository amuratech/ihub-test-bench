package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentBlogInputPage extends BasePage{

    UIElement time = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_task_due_date\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_task\"]/div[7]/input");
    UIElement content = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[3]/a");
    UIElement topic = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_blog_topic\"]");
    UIElement tones = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[1]/div[2]/div/div/div[1]");//*[@id="new_client_content_blogpost"]/div[3]/div/div/div/div[1]
    UIElement contentBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_brief\"]");
    UIElement project = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[3]/div[1]/div/div[1]/div[1]");//*[@id="new_client_content_blogpost"]/div[5]/div/div/div[1]/div[1]
    UIElement usp = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[5]/div/div/div/div/div/input");//*[@id="new_client_content_print_medium"]/div[4]/div/div/div/div/div/input
    UIElement who = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_target_group_attributes_target_audience\"]");
    UIElement objective = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[7]/div[13]/div/div[1]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[8]/input[2]");
    UIElement topicSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_5_correct_true\"]");
    UIElement briefSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_6_correct_true\"]");
    UIElement uspsSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_7_correct_true\"]");
    UIElement tonesSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_8_correct_true\"]");
    UIElement productSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_9_correct_true\"]");
    UIElement campaignSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_10_correct_true\"]");
    UIElement targetSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_11_correct_true\"]");
    UIElement keywordsSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_review_fields_attributes_12_correct_true\"]");
    UIElement rateBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[15]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[15]/a");
    UIElement enterTopic = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_blog_topic\"]");
    UIElement referencetTask = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[1]/div[1]/div/div/div/div[1]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_blogpost_brief\"]");
    UIElement USPs = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[6]/div/div/div/div/div/input");
    UIElement accordion  = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[6]/div/div/div/div/div/span/a/i");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[10]/input");
    UIElement product = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[5]/div/div/div[1]/div[1]");
    UIElement tonality = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[3]/div/div/div/div[1]");
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_blogpost\"]/div[6]/div/div/div/div/div/input");

    public void enterTheTimeContentblog() {
        tDriver.mywait(time);
    }

    public void saveAndAddBriefContent() {
        tDriver.myclicking(save);
    }

    public void clickContent() {
        tDriver.myclicking(content);
    }

    public void enterTopic() {
        tDriver.mywait(topic);
    }

    public void selectTonesOfVoice() {
        tDriver.mywait(tones);
    }

    public void enterContentBrief() {
        tDriver.mywait(contentBrief);
    }

    public void selectClientProject() {
        tDriver.mywait(project);
    }

    public void enterUniqueSellingPoint() {
        tDriver.mycontentusps(usp);
    }

    public void enterWhoAreYou() {
        tDriver.mywait(who);
    }

    public void selectObjective() {
        tDriver.mywait(objective);
    }

    public void clickSaveContentblogpostInput() {
        tDriver.myclicking(saveInput);
    }

    public void selectTopic() {
        tDriver.myclicking(topicSuff);
    }

    public void selectBrief() {
        tDriver.myclicking(briefSuff);
    }

    public void selectUsps() {
        tDriver.myclicking(uspsSuff);
    }

    public void selectTones() {
        tDriver.myclicking(tonesSuff);
    }

    public void selectProductSuff() {
        tDriver.myclicking(productSuff);
    }

    public void selectCampaignSuff() {
        tDriver.myclicking(campaignSuff);
    }

    public void selectTargetSuff() {
        tDriver.myclicking(targetSuff);
    }

    public void selectKeywordsSuff() {
        tDriver.myclicking(keywordsSuff);
    }

    public void rateTheBriefContentblogpost() {
        tDriver.myclicking(rateBrief);
    }

    public void clickAcceptContentblogpost() {
        tDriver.myclicking(accept);
    }

    public void enterTopic(String arg0) {
        tDriver.mytype(enterTopic,arg0);
    }

    public void enterCampaignPlanReferenceTaskContentBlogpost() {
        tDriver.mytasktype(referencetTask);
    }

    public void selectTonesOfVoiceContentBlogPost() {
        tDriver.mytones();
    }

    public void enterContentBriefContentBlogPost(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterClientProjectContentBlogPost() {
        tDriver.myproductcontentblogpost(product);
    }

    public void enterUSPsContentBlogPost(String arg0) {
        tDriver.mytype(USPs,arg0);
    }

    public void enterAccordionContentBlogPost() {
        tDriver.myclicking(accordion);
    }

    public void clickSaveButtonContentBlogPost() {
        tDriver.myclicking(saveInput);
    }

    public void enterTonality() {
        tDriver.mycontenttonality();
    }

    public void enterKeywordsToFocusOn() {
        tDriver.mycontentkeywordstofocuson(keywords);
    }
}
