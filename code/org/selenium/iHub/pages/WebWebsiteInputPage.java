package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;
import sun.swing.UIAction;

public class WebWebsiteInputPage extends BasePage{

    UIElement taskName = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_task_name\"]");
    UIElement taskType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_task\"]/div[2]/div[1]/div/div/div[1]");
    UIElement purpose = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_task\"]/div[4]/div/div/div/div[1]");
    UIElement time = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_task\"]/div[9]/div/div/div/div[1]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_task\"]/div[11]/input");
    UIElement devBrief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a
    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_name\"]");//*[@id="client_content_socialpost_name"]
    UIElement brief = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[2]/div/div[3]/div[2]");//*[@id="client_content_socialpost_brief"]
    UIElement type = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[3]/div/div[1]");
    UIElement CMS = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[3]/div/div[1]");
    UIElement CRM = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[4]/div/div[1]");
    UIElement funcReq = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[5]/div/div[1]");
    UIElement sitemap = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_content_sitemap_doc\"]");
    UIElement websiteDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_content_website_doc\"]");
    UIElement hosting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[10]/div/div[1]");
    UIElement scriptAccordion = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[17]/div[2]/a/i");
    UIElement scriptType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_script_type')]");//*[@id="client_development_website_development_scripts_attributes_1504945665644_script_type"]
    UIElement script = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_script_text')]");//*[@id="client_development_website_development_scripts_attributes_1502345656345_script_text"]
    UIElement savePublish = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[18]/input");//*[@id="new_client_development_website_development"]/div[18]/input
    UIElement suffTaskType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_4_correct_true')]");
    UIElement suffSubType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_5_correct_true')]");
    UIElement webDevName = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_6_correct_true')]");
    UIElement webDesc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_7_correct_true')]");
    UIElement webHosting = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_8_correct_true')]");
    UIElement webCMS = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_9_correct_true')]");
    UIElement webCRM = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_10_correct_true')]");
    UIElement webFunc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");
    UIElement webSitemap = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_12_correct_true')]");
    UIElement webAnimation = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_13_correct_true')]");
    UIElement webForm = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_14_correct_true')]");
    UIElement webContent = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_15_correct_true')]");
    UIElement webFonts = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_16_correct_true')]");
    UIElement webReq = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_17_correct_true')]");
    UIElement webDesign = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_18_correct_true')]");
    UIElement webScript = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_19_correct_true')]");
    UIElement desktopSlices = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_20_correct_true')]");
    UIElement mobileSlices = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_21_correct_true')]");
    UIElement ftp = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_22_correct_true')]");
    UIElement server = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_23_correct_true')]");//*[@id="new_client_development_review"]/div[24]/div[2]/label[1]
    UIElement contentSitemap = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_content_sitemap_doc\"]");//*[@id="new_client_development_review"]/div[25]/div[2]/label[1]
    UIElement contentWebsite = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_content_website_doc\"]");//*[@id="client_development_review_review_fields_attributes_25_correct_true"]
    UIElement rateInput = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[23]/div/div/a[4]");//*[@id="new_client_development_review"]/div[27]/div/div/a[4]
    UIElement accept = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_review\"]/div[28]/a");//*[@id="new_client_development_review"]/div[28]/a
    UIElement animation = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_animation_guideline\"]");
    UIElement referenceSitemap = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[8]/div[1]/div/div/div/div[1]");
    UIElement referenceWebsite = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[9]/div[1]/div/div/div/div[1]");
    UIElement designDoc = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_design_website_doc\"]");

    public void enterWebTaskName() {
        tDriver.mywait(taskName);
    }

    public void enterWebTaskType() {
        tDriver.mywait(taskType);
    }

    public void purposeOfTaskWeb() {
        tDriver.mywait(purpose);
    }

    public void enterTheTimeWeb() {
        tDriver.mywait(time);
    }

    public void saveAndAddBriefWeb() {
        tDriver.mywait(save);
    }

    public void clickOnDevelopmentBriefLink() {
        tDriver.mywait(devBrief);
    }

    public void enterName() {
        tDriver.mywait(name);
    }

    public void enterBrief() {
        tDriver.mywait(brief);
    }

    public void selectTypeOfWebsite() {
        tDriver.mywait(type);
    }

    public void selectCMS() {
        tDriver.mycms();
    }

    public void selectCRM() {
        tDriver.mycrm();
    }


    public void selectFuncReq() {
        tDriver.myspecificfunc();
    }

    public void uploadSitemapDoc() {
        tDriver.mytxtupload(sitemap);
    }

    public void uploadContentDocWebdev() {
        tDriver.mytxtupload(websiteDoc);
    }

    public void selectHosting() {
        tDriver.mywebhosting(hosting);
    }

    public void clickScriptAccordion() {
        tDriver.myclicking(scriptAccordion);
    }

    public void selectScriptType() {
        tDriver.mywait(scriptType);
    }

    public void enterScript() {
        tDriver.mywait(script);
    }

    public void clickSaveAndPublishLaterButton() {
        tDriver.myclicking(savePublish);
    }

    public void selectWebdevRadioName() {
        tDriver.myclicking(webDevName);
    }

    public void selectWebdevRadionDesc() {
        tDriver.myclicking(webDesc);
    }

    public void selectWebdevHosting() {
        tDriver.myclicking(webHosting);
    }

    public void selectWebdevCMS() {
        tDriver.myclicking(webCMS);
    }

    public void selectWebdevCRM() {
        tDriver.myclicking(webCRM);
    }

    public void selectWebdevFunc() {
        tDriver.myclicking(webFunc);
    }

    public void selectWebdevSitemap() {
        tDriver.myclicking(webSitemap);
    }

    public void selectWebdevAnimation() {
        tDriver.myclicking(webAnimation);
    }

    public void selectWebdevForm() {
        tDriver.myclicking(webForm);
    }

    public void selectWebdevContent() {
        tDriver.myclicking(webContent);
    }

    public void selectWebdevFonts() {
        tDriver.myclicking(webFonts);
    }

    public void selectWebdevCmsReq() {
        tDriver.myclicking(webReq);
    }

    public void selectWebdevDesign() {
        tDriver.myclicking(webDesign);
    }

    public void selectWebdevScript() {
        tDriver.myclicking(webScript);
    }

    public void selectWebdevDesktopSlices() {
        tDriver.myclicking(desktopSlices);
    }

    public void selectWebdevMobileSlices() {
        tDriver.myclicking(mobileSlices);
    }

    public void selectWebdevFtpDetail() {
        tDriver.myclicking(ftp);
    }

    public void selectWebdevServerDetail() {
        tDriver.myclicking(server);
    }

    public void rateWebdevBrief() {
        tDriver.myclicking(rateInput);
    }

    public void clickWebdevAcceptButton() {
        tDriver.myclicking(accept);
    }

    public void uploadAnimationGuidelines() {
        tDriver.mytxtupload(animation);
    }

    public void enterContentSitemapReferenceTask() {
        tDriver.mywait(referenceSitemap);
    }

    public void enterContentWebsiteReferenceTask() {
        tDriver.mywait(referenceWebsite);
    }

    public void selectContentSitemap() {
        tDriver.mytxtupload(contentSitemap);
    }

    public void selectContentWebsite() {
        tDriver.mytxtupload(contentWebsite);
    }

    public void selectTaskTypeSuffInfo() {
        tDriver.myclicking(suffTaskType);
    }

    public void selectTaskSubTypeSuffInfo() {
        tDriver.myclicking(suffSubType);
    }


    public void uploadWebsiteDesignDoc() {
        tDriver.mytxtupload(designDoc);
    }

}
