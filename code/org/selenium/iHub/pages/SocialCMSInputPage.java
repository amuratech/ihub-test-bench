package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SocialCMSInputPage extends BasePage{

    UIElement social = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[9]/a");//*[@id="taskLinks"]/li[9]/a
    UIElement currentSentiment = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_plan_output_orm_attributes_current_sentiment_analysis\"]");
    UIElement strategy = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_plan_output_orm_attributes_strategy_to_drive_better_sentiment\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_post\"]/div[5]/input");//*[@id="new_client_social_cms"]/div[7]/div/input
    UIElement accordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[1]/div[2]/a/i");
    UIElement categorySocial = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[2]/div[2]/div/div/div[1]");
    UIElement theme = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[2]/div[4]/div/div/div[1]");
    UIElement hashtags = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[2]/div[5]/div/div/div[1]");
    UIElement categorySocialII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[3]/div[2]/div/div/div[1]");
    UIElement themeII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[3]/div[4]/div/div/div[1]");
    UIElement hashtagsII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[3]/div[5]/div/div/div[1]");
    UIElement categorySocialIII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[4]/div[2]/div/div/div[1]");
    UIElement themeIII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[4]/div[4]/div/div/div[1]");
    UIElement hashtagsIII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[4]/div[5]/div/div/div[1]");
    UIElement paidAccordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[6]/div[2]/a/i");//*[@id="new_client_social_cms"]/div[6]/div[2]/a/i
    UIElement idea = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_idea')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503059813584_idea"]
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_content_idea_brief')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503059339608_content_idea_brief"]
    UIElement hashtagsPaid = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_cms\"]/div[4]/div[4]/div/div/div[1]");
    UIElement userParticipate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_how_will_users_participate')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503058515499_how_will_users_participate"]
    UIElement estimate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_estimated_total_reach')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503058515499_estimated_total_reach"]
    UIElement budget = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_suggested_budget')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503058515499_suggested_budget"]
    UIElement totalUser = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_estimated_total_user_actions')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503058515499_estimated_total_user_actions"]
    UIElement creative = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_creative_image')]");//*[@id="client_social_cms_paid_campaign_suggestions_attributes_1503058515499_creative_image"]
    UIElement update = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'edit_client_social_task_')]/div[9]/input");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement objectiveSuff = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_5_correct_true\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement objectiveI = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_6_correct_true\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement objectiveII = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_7_correct_true\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement paid = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_8_correct_true\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement orm = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_review_review_fields_attributes_9_correct_true\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/div/div/a[4]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_social_review\"]/div[12]/a");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input
    UIElement refURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_social_post_reference_url\"]");//*[@id="edit_client_social_task_5996c3555461f4287c21caf9"]/div[9]/input

    public void clickOnSocial() {
        tDriver.myclicking(social);
    }

    public void enterCurrentSentimentAnalysis(String arg0) {
        tDriver.mytype(currentSentiment,arg0);
    }

    public void enterStrategyToDriveBetterSentiment(String arg0) {
        tDriver.mytype(strategy,arg0);
    }

    public void clickSaveButtonSocialPost() {
        tDriver.myclicking(save);
    }

    public void clickObjectivesAccordion() {
        tDriver.myclicking(accordion);
    }

    public void selectCategorySocial() {
        tDriver.mywait(categorySocial);
    }

    public void enterTheme() {
        tDriver.mywait(theme);
    }

    public void enterHashtags() {
        tDriver.mywait(hashtags);
    }

    public void selectCategoryIiSocial() {
        tDriver.mywait(categorySocialII);
    }

    public void enterThemeIiSocial() {
        tDriver.mywait(themeII);
    }

    public void enterHashtagsIiSocial() {
        tDriver.mywait(hashtagsII);
    }

    public void selectCategoryIiiSocial() {
        tDriver.mywait(categorySocialIII);
    }

    public void enterThemeIiiSocial() {
        tDriver.mywait(themeIII);
    }

    public void enterHashtagsIiiSocial() {
        tDriver.mywait(hashtagsIII);
    }

    public void clickPaidSuggestionsAccordion() {
        tDriver.mywait(paidAccordion);
    }

    public void enterIdea() {
        tDriver.mywait(idea);
    }

    public void enterContentIdeaBrief() {
        tDriver.mywait(brief);
    }

    public void enterHashtagsPaidSuggestions() {
        tDriver.mywait(hashtagsPaid);
    }

    public void enterHowWillUserParticipate() {
        tDriver.mywait(userParticipate);
    }

    public void enterEstimateTotalReach() {
        tDriver.mywait(estimate);
    }

    public void enterSuggestedBudget() {
        tDriver.mywait(budget);
    }

    public void enterEstimatedTotalUserAction() {
        tDriver.mywait(totalUser);
    }

    public void uploadCreativeImage() {
        tDriver.myjpgupload(creative);
    }

    public void changeTheStatusSocial() {
        tDriver.mysocialpublish();
    }

    public void clickUpdateTaskButtonSocial() {
        tDriver.myclicking(update);
    }

    public void selectObjectiveISuff() {
        tDriver.myclicking(objectiveSuff);
    }

    public void selectObjecriveIiSuff() {
        tDriver.myclicking(objectiveI);
    }

    public void selectObjectiveIiiSuff() {
        tDriver.myclicking(objectiveII);
    }

    public void selectPaidCampaignSuff() {
        tDriver.myclicking(paid);
    }

    public void selectORMSuff() {
        tDriver.myclicking(orm);
    }

    public void rateTheInputSocialPost() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptButtonSocial() {
        tDriver.myassignscroll(accept);
    }

    public void enterReferenceURL(String arg0) {
        tDriver.mytype(refURL,arg0);
    }
}
