package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 24/1/18.
 */
public class ContentCaseStudyInputPage extends BasePage {

    UIElement purpose = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_case_study_purpose\"]");
    UIElement results = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_case_study_results\"]");
    UIElement keywords = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_case_study\"]/div[2]/div[1]/div/div/div/div/input");//*[@id="new_client_content_case_study"]/div[2]/div[1]/div/div/div/div/input
    UIElement strategy = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"client_content_case_study_strategy_and_execution_details\"]");
    UIElement save = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_case_study\"]/div[7]/input");
    UIElement rateInput = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"new_client_content_review\"]/div[14]/div/div/a[4]");

    public void enterPurposeContentCaseStudyInput(String arg0 ) {
        tDriver.mytype(purpose,arg0);
    }

    public void enterResults(String arg0) {
        tDriver.mytype(results,arg0);
    }

    public void enterKeywordsContentCaseStudyInput() {
        tDriver.myContentCaseStudyKeywords(keywords);
    }

    public void enterStrategyAndExecutionDetails(String arg0) {
        tDriver.mytype(strategy,arg0);
    }

    public void clickSaveButtonContentCaseStudyInput() {
        tDriver.myclicking(save);
    }

    public void rateTheBriefContentCaseStudy() {
        tDriver.myclicking(rateInput);
    }

}
