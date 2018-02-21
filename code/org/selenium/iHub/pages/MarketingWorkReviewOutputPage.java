package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 2/2/18.
 */
public class MarketingWorkReviewOutputPage extends BasePage {

    UIElement clientHealth = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[1]/div/div/div/div/a[4]");
    UIElement leadQuality = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[3]/div/div[3]/div[2]");
    UIElement amountForAdvertisement = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_advertising_outstanding\"]");
    UIElement amountForServices = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_services_outstanding\"]");
    UIElement clientMeeting = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_last_meeting_with_client\"]");
    UIElement notesClientMeeting = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_notes_from_last_meeting_with_client\"]");
    UIElement recentEscalation = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_recent_escalations\"]");
    UIElement seoActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[1]/div[3]/div[2]");
    UIElement socialActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[2]/div[3]/div[2]");
    UIElement websiteMaintainanceActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[3]/div[3]/div[2]");
    UIElement marketResearchActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[4]/div[3]/div[2]");
    UIElement creativeActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[5]/div[3]/div[2]");
    UIElement paidMediaActivities = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[7]/div[6]/div[3]/div[2]");
    UIElement comments = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_comments\"]");
    UIElement ideasSuggested = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_work_review_output_ideas_and_innovation_suggested_to_client\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_work_review_output\"]/div[10]/input");
    UIElement rateOutput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_marketing_review\"]/div[33]/div/div/a[4]");
    UIElement contract = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_review_questions_attributes_0_answer\"]");
    UIElement anyEscalation = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_review_questions_attributes_1_answer\"]");
    UIElement monthlyPlan = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_review_questions_attributes_2_answer\"]");
    UIElement happyWithSuggestion  = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_review_questions_attributes_3_answer\"]");
    UIElement feedback = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_marketing_review_questions_attributes_4_answer\"]");

    public void selectCurrentClientHealth() {
        tDriver.myclicking(clientHealth);
    }

    public void reviewOfTheLeadQuality(String arg0) {
        tDriver.mytype(leadQuality,arg0);
    }

    public void selectOutstandingAmountForAdvertisement(String arg0) {
        tDriver.mytype(amountForAdvertisement,arg0);
    }

    public void selectOutstandingAmountForServices(String arg0) {
        tDriver.mytype(amountForServices,arg0);
    }

    public void enterNotesFromLastClientMeeting(String arg0) {
        tDriver.mytype(notesClientMeeting,arg0);
    }

    public void enterRecentEscalations(String arg0) {
        tDriver.mytype(recentEscalation,arg0);
    }

    public void enterReviewOfSEOActivities(String arg0) {
        tDriver.mytype(seoActivities,arg0);
    }

    public void enterReviewOfSocialActivities(String arg0) {
        tDriver.mytype(socialActivities,arg0);
    }

    public void enterReviewOfWebsiteMaintainanceActivities(String arg0) {
        tDriver.mytype(websiteMaintainanceActivities,arg0);
    }

    public void enterReviewOfMarketResearchActivities(String arg0) {
        tDriver.mytype(marketResearchActivities,arg0);
    }

    public void enterReviewOfCreativeAndIdeationActivities(String arg0) {
        tDriver.mytype(creativeActivities,arg0);
    }

    public void enterReviewOfPaidMediaActivities(String arg0) {
        tDriver.mytype(paidMediaActivities,arg0);
    }

    public void enterCommentsMarketingWorkReviewOutput(String arg0) {
        tDriver.mytype(comments,arg0);
    }

    public void enterIdeasAndInnovationSuggestedToClient(String arg0) {
        tDriver.mytype(ideasSuggested,arg0);
    }

    public void clickSaveButtonMarketingWorkReviewOutput() {
        tDriver.myclicking(save);
    }

    public void selectLastClientMeeting() {
        tDriver.myMarketingWorkReviewClientMeeting(clientMeeting);
    }

    public void rateTheOutputMarketingWorkReviewOutput() {
        tDriver.myclicking(rateOutput);
    }

    public void enterHasTheAccountExecutiveCoveredAllTheConcernedActivitiesUnderTheContract(String arg0) {
        tDriver.mytype(contract,arg0);
    }

    public void enterHaveYouReceivedAnyEscalationsOtherThanTheOnesMentionedInTheReview(String arg0) {
        tDriver.mytype(anyEscalation,arg0);
    }

    public void enterAreWeOnTrackWithTheMonthlyPlanProposedToTheClient(String arg0) {
        tDriver.mytype(monthlyPlan,arg0);
    }

    public void enterAreYouHappyWithTheSuggestionsAndTheInnovationSuggestedByTheAccountExecutive(String arg0) {
        tDriver.mytype(happyWithSuggestion,arg0);
    }

    public void enterYourFeedbackToTheAccountExecutiveDoesHeSheNeedAnyImprovementsAndWhichAreasNeedToBeWorkedOn(String arg0){
        tDriver.mytype(feedback,arg0);
    }
}
