package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class SeoPlanOutputPage extends BasePage{

    UIElement output = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[2]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li[2]/a
    UIElement startWorking = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_')]/div[10]/input");//*[@id="edit_client_seo_task_599136de5461f40e10dcad56"]/div[10]/input
    UIElement suggTopic = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[3]/div/div/div/div/div/input");
    UIElement submit = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[12]/div/div/input");
    UIElement keywordsAdd = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[7]/div[1]/a");//*[@id="new_client_seo_plan_output"]/div[7]/div[1]/a
    UIElement keyword = new UIElement(UIType.Link, UILocatorType.Xpath,"");//*[@id="client_seo_plan_output_keywords_attributes_1507995901781_keyword"]
    UIElement impressions = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_impressions')]");//*contains[@id,'_impressions')]
    UIElement currentRank = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_current_rank')]");//*contains[@id,'_current_rank')]
    UIElement targetRank = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'_target_rank')]");//*contains[@id,'_target_rank')]
    UIElement competition = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[7]/div[2]/div/div/div[3]/div[2]/div/div/div[1]");
    UIElement saveOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_plan_output\"]/div[9]/div/div/input");
    UIElement rateOutput = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"new_client_seo_review\"]/div[10]/div/div/a[4]");

    public void clickOutputDoc() {
        tDriver.mywait(output);
    }


    public void clickStartWorkingOnThisTaskButton() {
        tDriver.myclicking(startWorking);
    }

    public void enterSuggestedTopics(String arg0) {
        tDriver.mytype(suggTopic,arg0);
    }

    public void clickSubmitSeoplanoutput() {
        tDriver.myclicking(submit);
    }

    public void enterNdURLSeoPlan() {

    }

    public void clickClickToAddLinkForKeywords() {
        tDriver.myclicking(keywordsAdd);
    }

    public void enterKeyword(String arg0) {
        tDriver.mytypesamekeyword(keyword,arg0);
    }

    public void enterImpressions(String arg0) {
        tDriver.mytype(impressions,arg0);
    }

    public void enterCurrentSEORank(String arg0) {
        tDriver.mytype(currentRank,arg0);
    }

    public void enterTargetSEORank(String arg0) {
        tDriver.mytype(targetRank,arg0);
    }

    public void selectCategoryForKeywords() {
        tDriver.mycategoryseooutput();
    }

    public void enterCompetition() {
        tDriver.myseocompetition(competition);
    }

    public void clickSaveButtonSEOPlanOutput(){
        tDriver.myclicking(saveOutput);
    }

    public void rateTheOutputSEOPlanOutput() {
        tDriver.myclicking(rateOutput);
    }

//    public void enterKeywordAgain(String arg0) {
//        tDriver.mytype(keyword2,arg0);
//    }
//
//    public void enterImpressionsAgain(String arg0) {
//    }
//
//    public void enterCurrentSEORankAgain(String arg0) {
//    }
//
//    public void enterTargetSEORankAgain(String arg0) {
//    }
//
//    public void selectCategoryAgain() {
//    }
//
//    public void enterCompetitionAgain() {
//    }
}
