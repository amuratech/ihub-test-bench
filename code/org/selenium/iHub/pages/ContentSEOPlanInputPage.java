package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class ContentSEOPlanInputPage extends BasePage {

    UIElement type = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[1]/div[1]/div/div/div[1]");
    UIElement count = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_count\"]");
    UIElement month = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_month\"]");
    UIElement year = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_year\"]");
    UIElement reference = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[3]/div/div/div/input");
    UIElement keywordAccordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[4]/div[2]/a/i");
    UIElement keyword = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_keywords_attributes_0_keyword\"]");
    UIElement impression = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_keywords_attributes_0_impression\"]");
    UIElement currentRank = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_keywords_attributes_0_current_rank\"]");
    UIElement reason = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_cms_keywords_attributes_0_reason_of_choice\"]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[7]/input[1]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[8]/input[2]");
    UIElement referenceAccordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_cms\"]/div[3]/div/div/div/span/a/i");
    UIElement impression2 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_impression')]");//*[@id="client_content_seo_cms_keywords_attributes_1503571542860_impression"]
    UIElement keyword2 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_keyword')]");//*[@id="client_content_seo_cms_keywords_attributes_1503575976656_keyword"]
    UIElement rank2 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_current_rank')]");
    UIElement reason2 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_reason_of_choice')]");
    UIElement keyword3 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_keyword')]");
    UIElement impression3 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_impression')]");
    UIElement rank3 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_current_rank')]");
    UIElement reason3 = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_reason_of_choice')]");
    UIElement saveInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_plan\"]/div[4]/input");
    UIElement refLinks = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_plan\"]/div[2]/div/div/div/input");
    UIElement keywords = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_plan\"]/div[3]/div/div/div/input");//*[@id="new_client_content_seo_plan"]/div[3]/div/div/div/input
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[9]/div/div/a[4]");//*[@id="new_client_content_seo_plan"]/div[3]/div/div/div/input
    UIElement monthYear = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_content_seo_plan_month_year\"]");//*[@id="new_client_content_seo_plan"]/div[3]/div/div/div/input
    UIElement url = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_url')]");//*[@id="new_client_content_seo_plan"]/div[3]/div/div/div/input
    UIElement keywordsPlan = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_content_seo_plan\"]/div[2]/div[2]/div/div/div[3]/div/div/div/div/input");//*[@id="new_client_content_seo_plan"]/div[3]/div/div/div/input


    public void enterType() {
        tDriver.myclicking(type);
    }

    public void enterCount() {
        tDriver.myclicking(count);
    }

    public void enterMonth() {
        tDriver.myclicking(month);
    }

    public void enterYear() {
        tDriver.myclicking(year );
    }

    public void enterReferenceLinkContentSeoCms(String arg0) {
        tDriver.mytype(reference,arg0);
    }

    public void clickKeywordsAccordionContentSeoCms() {
        tDriver.mywait(keywordAccordion);
    }

    public void enterKeyword() {
        tDriver.myclicking(keyword);
    }

    public void enterImpression() {
        tDriver.myclicking(impression);
    }

    public void enterCurrentRank() {
        tDriver.myclicking(currentRank);
    }

    public void enterReasonOfChoice() {
        tDriver.myclicking(reason);
    }

    public void clickSaveButtonContentSeoCms() {
        tDriver.myclicking(save);
    }

    public void clickSaveAndPublishButtonContentSeoCms() {
        tDriver.myclicking(savePublish);
    }

    public void clickReferenceLinkAccordion() {
        tDriver.myclicking(referenceAccordion);
    }


    public void enterIIndKeyword() {
        tDriver.mywait(keyword2);
    }

    public void enterIIndImpression() {
        tDriver.mywait(impression2);
    }

    public void enterIIndCurrentRank() {
        tDriver.mywait(rank2);
    }

    public void enterIIndReasonOfChoice() {
        tDriver.mywait(reason2);
    }

    public void enterIIIndKeyword() {
        tDriver.mywait(keyword3);
    }

    public void enterIIIndImpression() {
        tDriver.mywait(impression3);
    }

    public void enterIIIndCurrentRank() {
        tDriver.mywait(rank3);
    }

    public void enterIIIndReasonOfChoice() {
        tDriver.mywait(reason3);
    }

    public void selectPlannedPostCount() {
        tDriver.mycontentplannedpostcount();
    }

    public void enterReferenceLinks() {
        tDriver.mycontentreflinks(refLinks);
    }

    public void enterKeywordsToFocusOnContentSEOPlan() {
        tDriver.mycontentseoplankeywords(keywords);
    }

    public void clickSaveButtonContentSEOPlanInput() {
        tDriver.myclicking(saveInput);
    }

    public void rateTheBriefContentSEOPlan() {
        tDriver.myclicking(rateInput);
    }

    public void selectMonthYear() {
        tDriver.myclicking(monthYear);
    }

    public void enterPlan() {
    }

    public void enterURLContentSEOPlanInput(String arg0) {
        tDriver.mytype(url,arg0);
    }

    public void enterKeywordsContentSEOPlanInput() {
        tDriver.myKeywords(keywordsPlan);
    }
}
