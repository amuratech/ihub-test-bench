package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebWebsiteInputPage;

public class WebWebsiteInputSteps {

    WebWebsiteInputPage dp;

    public WebWebsiteInputSteps(){dp = new WebWebsiteInputPage();}

    @Then("^Enter web task name$")
    public void enterWebTaskName() {
        dp.enterWebTaskName();
    }

    @And("^Enter web task type$")
    public void enterWebTaskType() {
        dp.enterWebTaskType();
    }

    @And("^Purpose of task web$")
    public void purposeOfTaskWeb() {
        dp.purposeOfTaskWeb();
    }

    @And("^Enter the time web$")
    public void enterTheTimeWeb() {
        dp.enterTheTimeWeb();
    }

    @Then("^Save and add brief web$")
    public void saveAndAddBriefWeb() {
        dp.saveAndAddBriefWeb();
    }

    @Then("^Click on development brief link$")
    public void clickOnDevelopmentBriefLink(){
        dp.clickOnDevelopmentBriefLink();
    }

    @And("^Enter name$")
    public void enterName() {
        dp.enterName();
    }

    @And("^Enter brief$")
    public void enterBrief() {
        dp.enterBrief();
    }

    @And("^Select type of website$")
    public void selectTypeOfWebsite() {
        dp.selectTypeOfWebsite();
    }

    @And("^Select CMS$")
    public void selectCMS() {
        dp.selectCMS();
    }

    @And("^Select CRM$")
    public void selectCRM() {
        dp.selectCRM();
    }

    @And("^Select func req$")
    public void selectFuncReq() {
        dp.selectFuncReq();
    }

    @And("^Upload sitemap doc$")
    public void uploadSitemapDoc() {
        dp.uploadSitemapDoc();
    }

    @And("^Upload content doc- webdev$")
    public void uploadContentDocWebdev() {
        dp.uploadContentDocWebdev();
    }

    @Then("^Select hosting$")
    public void selectHosting() {
        dp.selectHosting();
    }

    @Then("^Click script accordion$")
    public void clickScriptAccordion() {
        dp.clickScriptAccordion();
    }

    @And("^Select script type$")
    public void selectScriptType() {
        dp.selectScriptType();

    }

    @And("^Enter script$")
    public void enterScript() {
        dp.enterScript();
    }

    @Then("^Click Save and publish later button$")
    public void clickSaveAndPublishLaterButton() {
        dp.clickSaveAndPublishLaterButton();
    }

    @And("^Select webdev radio name$")
    public void selectWebdevRadioName() {
        dp.selectWebdevRadioName();
    }

    @And("^Select webdev radion desc$")
    public void selectWebdevRadionDesc() {
        dp.selectWebdevRadionDesc();
    }

    @And("^Select webdev hosting$")
    public void selectWebdevHosting() {
        dp.selectWebdevHosting();
    }

    @And("^Select webdev CMS$")
    public void selectWebdevCMS(){
        dp.selectWebdevCMS();
    }

    @And("^Select webdev CRM$")
    public void selectWebdevCRM() {
        dp.selectWebdevCRM();
    }

    @And("^Select webdev Func$")
    public void selectWebdevFunc() {
        dp.selectWebdevFunc();
    }

    @And("^Select webdev sitemap$")
    public void selectWebdevSitemap() {
        dp.selectWebdevSitemap();
    }

    @And("^Select webdev animation$")
    public void selectWebdevAnimation() {
        dp.selectWebdevAnimation();
    }

    @And("^Select webdev form$")
    public void selectWebdevForm() {
        dp.selectWebdevForm();
    }

    @And("^Select webdev content$")
    public void selectWebdevContent() {
        dp.selectWebdevContent();
    }

    @And("^Select webdev fonts$")
    public void selectWebdevFonts() {
        dp.selectWebdevFonts();
    }

    @And("^Select webdev cms req$")
    public void selectWebdevCmsReq() {
        dp.selectWebdevCmsReq();
    }

    @And("^Select webdev design$")
    public void selectWebdevDesign() {
        dp.selectWebdevDesign();
    }

    @And("^Select webdev script$")
    public void selectWebdevScript() {
        dp.selectWebdevScript();
    }

    @And("^Select webdev desktop slices$")
    public void selectWebdevDesktopSlices() {
        dp.selectWebdevDesktopSlices();
    }

    @And("^Select webdev mobile slices$")
    public void selectWebdevMobileSlices() {
        dp.selectWebdevMobileSlices();
    }

    @And("^Select webdev ftp detail$")
    public void selectWebdevFtpDetail() {
        dp.selectWebdevFtpDetail();
    }

    @And("^Select webdev server detail$")
    public void selectWebdevServerDetail() {
        dp.selectWebdevServerDetail();
    }

    @And("^Rate webdev brief$")
    public void rateWebdevBrief() {
        dp.rateWebdevBrief();
    }

    @And("^Click webdev accept button$")
    public void clickWebdevAcceptButton() {
        dp.clickWebdevAcceptButton();
    }


    @Then("^Upload animation guidelines$")
    public void uploadAnimationGuidelines() {
        dp.uploadAnimationGuidelines();
    }

    @Then("^Enter 'content sitemap' reference task$")
    public void enterContentSitemapReferenceTask() {
        dp.enterContentSitemapReferenceTask();
    }

    @Then("^Enter 'content website' reference task$")
    public void enterContentWebsiteReferenceTask() {
        dp.enterContentWebsiteReferenceTask();
    }

    @And("^Select content sitemap$")
    public void selectContentSitemap(){
        dp.selectContentSitemap();
    }

    @And("^Select content website$")
    public void selectContentWebsite() {
        dp.selectContentWebsite();
    }

    @And("^Select task type suff info$")
    public void selectTaskTypeSuffInfo() {
        dp.selectTaskTypeSuffInfo();
    }

    @And("^Select task sub-type suff info$")
    public void selectTaskSubTypeSuffInfo() {
        dp.selectTaskSubTypeSuffInfo();
    }

    @And("^Upload website design doc$")
    public void uploadWebsiteDesignDoc() {
        dp.uploadWebsiteDesignDoc();
    }

}
