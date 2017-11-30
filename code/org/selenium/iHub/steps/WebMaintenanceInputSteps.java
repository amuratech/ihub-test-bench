package org.selenium.iHub.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.selenium.iHub.pages.WebMaintenanceInputPage;

public class WebMaintenanceInputSteps {

    WebMaintenanceInputPage dp;

    public WebMaintenanceInputSteps(){dp = new WebMaintenanceInputPage();}


    @And("^Enter name \"([^\"]*)\"- webmaintenance$")
    public void enterNameWebmaintenance(String arg0) {
        dp.enterNameWebmaintenance(arg0);
    }

    @And("^Enter brief \"([^\"]*)\"- webmaintenance$")
    public void enterBriefWebmaintenance(String arg0) {
            dp.enterBriefWebmaintenance(arg0);
    }

    @And("^Enter URL \"([^\"]*)\"- webmaintenance$")
    public void enterURLWebmaintenance(String arg0) {
        dp.enterURLWebmaintenance(arg0);
    }

    @And("^Select hosting- webmaintenance$")
    public void selectHostingWebmaintenance() {
        dp.selectHostingWebmaintenance();
    }

    @And("^Click save- webmaintenance$")
    public void clickSaveWebmaintenance() {
        dp.clickSaveWebmaintenance();
    }

    @And("^Click save and publish- webmaintenance$")
    public void clickSaveAndPublishWebmaintenance(){
        dp.clickSaveAndPublishWebmaintenance();
    }

    @And("^Select status- webmaintenance$")
    public void selectStatusWebmaintenance() {
        dp.selectStatusWebmaintenance();
    }

    @And("^Click update- webmaintenance$")
    public void clickUpdateWebmaintenance() {
        dp.clickUpdateWebmaintenance();
    }

    @And("^Select name- webmanitenance$")
    public void selectNameWebmanitenance(){
        dp.selectNameWebmanitenance();
    }

    @And("^Select brief- webmaintenance$")
    public void selectBriefWebmaintenance() {
        dp.selectBriefWebmaintenance();
    }

    @And("^Select URL- webmaintenance$")
    public void selectURLWebmaintenance(){
        dp.selectURLWebmaintenance();
    }

    @And("^Select hosting type- webmaintenance$")
    public void selectHostingTypeWebmaintenance() {
        dp.selectHostingTypeWebmaintenance();
    }

    @And("^Select content ref doc$")
    public void selectContentRefDoc() {
        dp.selectContentRefDoc();
    }

    @And("^Select ftp detail$")
    public void selectFtpDetail() {
        dp.selectFtpDetail();
    }

    @And("^Select server detail$")
    public void selectServerDetail(){
        dp.selectServerDetail();
    }

    @And("^Select images$")
    public void selectImages() {
        dp.selectImages();
    }

    @And("^Rate brief- webmaintenance$")
    public void rateBriefWebmaintenance() {
        dp.rateBriefWebmaintenance();
    }

    @And("^Click accept- webmaintenance$")
    public void clickAcceptWebmaintenance() {
        dp.clickAcceptWebmaintenance();
    }


    @And("^Enter brief \"([^\"]*)\"$")
    public void enterBrief(String arg0) {
        dp.enterBrief(arg0);
    }

//    @And("^Select hosting- our server$")
//    public void selectHostingOurServer(){
//        dp.selectHostingOurServer();
//    }

    @And("^Enter name \"([^\"]*)\"- web maintenance$")
    public void enterNameWebMaintenance(String arg0) {
        dp.enterNameWebMaintenance(arg0);
    }

    @And("^Enter URL \"([^\"]*)\"- web maintenance$")
    public void enterURLWebMaintenance(String arg0) {
        dp.enterURLWebMaintenance(arg0);
    }

    @Then("^Select reference content task$")
    public void selectReferenceContentTask() {
        dp.selectReferenceContentTask();
    }

    @And("^Select content task suff info$")
    public void selectContentTaskSuffInfo() {
        dp.selectContentTaskSuffInfo();

    }


}
