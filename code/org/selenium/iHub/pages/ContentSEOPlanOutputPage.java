package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentSEOPlanOutputPage extends BasePage {

    UIElement topic = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_plan_output_outputs_attributes_0_blog_topic\"]");
    UIElement date = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_plan_output_outputs_attributes_0_expected_approval_date\"]");
    UIElement saveOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_plan_output\"]/div[3]/input");
    UIElement research = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_0_answer\"]");
    UIElement enoughRef = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_1_answer\"]");
    UIElement find = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_2_answer\"]");
    UIElement seoSpecific = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_questions_attributes_3_answer\"]");
    UIElement rateOutput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[11]/div/div/a[4]");
    UIElement refDocuments = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_review_reference_documents_file\"]");

    public void enterTopicContentSEOPlan(String arg0) {
        tDriver.mytype(topic,arg0);
    }

    public void selectKeywords() {
        tDriver.mycontentkeywords();
    }

    public void selectExpectedApprovalDate() {
        tDriver.mystartdate(date);
    }

    public void clickSaveButtonContentSEOPlanOutput() {
        tDriver.myclicking(saveOutput);
    }

    public void enterHasTheCopywriterResearchedWell(String arg0) {
        tDriver.mytype(research,arg0);
    }

    public void enterHasTheCopywriterIncludedEnoughReferencesFromCompetition(String arg0) {
        tDriver.mytype(enoughRef,arg0);
    }

    public void enterAreTheTopicsRepeatOfWhatYouFindInTheMarket(String arg0) {
        tDriver.mytype(find,arg0);
    }

    public void enterDoYouThinkTheTopicsAreMoreConsumableOrAreLikeSEOSpecific(String arg0) {
        tDriver.mytype(seoSpecific,arg0);
    }

    public void rateTheOutputContentSEOPlan() {
        tDriver.myclicking(rateOutput);
    }

    public void uploadReferenceDocumentContentOutputReview() {
        tDriver.mytxtupload(refDocuments);
    }
}
