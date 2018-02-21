package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class WebMaintenanceInputPage extends BasePage {

    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_maintenance_work_name\"]");
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[2]/div/div[3]/div[2]");
    UIElement URL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_maintenance_work_url\"]");
    UIElement hosting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[4]/div/div[1]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[10]/input[1]");
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[6]/input");
    UIElement status = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d82cd5461f40e10dca51c\"]/div[5]/div/div/div");
    UIElement update = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"edit_client_development_task_598d82cd5461f40e10dca51c\"]/div[9]/input");
    UIElement radioName = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement radioBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement radioURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement radioHosting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement radioContentTaskRef = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_14_correct_true')]");
    UIElement radioFtp = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");
    UIElement radioServer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_12_correct_true')]");
    UIElement radioImages = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_13_correct_true')]");
    UIElement radioContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement rate = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[10]/div/div/a[4]");
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[17]/a");
    UIElement nameEnter = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_maintenance_work_name\"]");
    UIElement briefEnter = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[2]/div/div[3]/div[2]");
    UIElement enterURL = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_maintenance_work_url\"]");
    UIElement hostingOurServer = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[15]/a");
    UIElement contentReference = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_maintenance_work\"]/div[5]/div[1]/div/div/div/div[1]");

    public void enterNameWebmaintenance(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void enterBriefWebmaintenance(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void enterURLWebmaintenance(String arg0 ){
        tDriver.mytype(URL,arg0);
    }

    public void selectHostingWebmaintenance() {
        tDriver.mywebmaintenancehosting(hosting);
    }

    public void clickSaveWebmaintenance() {
        tDriver.myclick(save);
    }

    public void clickSaveAndPublishWebmaintenance() {
        tDriver.myclicking(savePublish);
    }

    public void selectStatusWebmaintenance() {
        tDriver.mywait(status);
    }

    public void clickUpdateWebmaintenance() {
        tDriver.myclick(update);
    }

    public void selectNameWebmanitenance() {
        tDriver.myclicking(radioName);
    }

    public void selectBriefWebmaintenance() {
        tDriver.myclicking(radioBrief);
    }

    public void selectURLWebmaintenance() {
        tDriver.myclicking(radioURL);
    }

    public void selectHostingTypeWebmaintenance() {
        tDriver.myclicking(radioHosting);
    }

    public void selectContentRefDoc() {
        tDriver.myclicking(radioContent);
    }

    public void selectFtpDetail() {
        tDriver.myclicking(radioFtp);
    }

    public void selectServerDetail() {
        tDriver.myclicking(radioServer);
    }

    public void selectImages() {
        tDriver.myclicking(radioImages);
    }

    public void rateBriefWebmaintenance() {
        tDriver.myclicking(rate);
    }

    public void clickAcceptWebmaintenance() {
        tDriver.myclicking(accept);
    }

    public void enterBrief(String arg0) {
        tDriver.mytype(briefEnter,arg0);
    }

//    public void selectHostingOurServer() {
//        tDriver.myhosting(hostingOurServer);
//    }

    public void enterNameWebMaintenance(String arg0) {
        tDriver.mytype(nameEnter,arg0);
    }

    public void enterURLWebMaintenance(String arg0) {
        tDriver.mytype(enterURL,arg0);
    }

    public void selectReferenceContentTask() {
        tDriver.mywait(contentReference);
    }

    public void selectContentTaskSuffInfo() {
        tDriver.myclicking(radioContentTaskRef);
    }
}
