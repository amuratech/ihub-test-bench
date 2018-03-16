package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 19/7/17.
 */
public class AddBriefPage extends BasePage {

    UIElement client = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_design_website_product_id-selectized\"]");
    UIElement subType = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[2]/div/div[1]");
    UIElement usp = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[2]/div/div/div/input");//*[@id="new_client_design_website"]/div[2]/div/div/div/input
    UIElement uspPlus = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[2]/div/div/div/span");
    UIElement sitemapUpload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_design_website_sitemap_document\"]");
    UIElement funcUpload = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_functional_requirements')]");
    UIElement designGuide = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[6]/div/div[1]");
    UIElement CTA = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[8]/div/div[1]");
    UIElement minAge = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*contains[@id,'_target_group_attributes_min_age')]");
    UIElement maxAge = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*contains[@id,'_target_group_attributes_max_age')]");
    UIElement gender = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[9]/div[3]/div/div/div/div[1]");//*[@id="new_client_campaign_task_plan_output"]/div[10]/div/div/div/div[1]
    UIElement eduBackground = new UIElement(UIType.TextBox,UILocatorType.Xpath,"");
    UIElement minIncome = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_min_household_income')]");//*[@id="client_content_sitemap_target_group_attributes_min_household_income"]
    UIElement geos = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[9]/div[10]/div/div/div");//*[@id="new_client_content_sitemap"]/div[6]/div[10]/div/div/div/div[1]
    UIElement microGeos = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[9]/div[11]/div/div/div/div[1]");//*[@id="new_client_content_sitemap"]/div[6]/div[11]/div/div/div/div[1]
    UIElement trying = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[contains(@id,'_target_group_attributes_target_audience')]");//*[@id="client_content_sitemap_target_group_attributes_target_audience"]
    UIElement tgToDo = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[9]/div[13]/div/div[1]");
    UIElement save = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[10]/input[1]");
    UIElement design = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[4]/a");//*[@id="taskLinks"]/li[3]/a
    UIElement actionDesign = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr[1]/td[4]/div/button/i");
    UIElement briefDesign = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/div/div[2]/div/ul/li[1]/a");
    UIElement referenceLinks = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[5]/div/div/div/input");//*[@id="client_social_cms_output_reference_link"]
    UIElement refPlus = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[5]/div/div/div/span");
    UIElement savePublish = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_design_website\"]/div[11]/input");//*[@id="new_client_design_website"]/div[11]/input
    UIElement updateTask = new UIElement(UIType.Button,UILocatorType.CSS,"#edit_client_design_task_5982c1b65461f40d99c76372 > div:nth-child(12) > input");
    UIElement signOut = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"accountLinks\"]/li[3]/a");//*[@id="accountLinks"]/li[3]/a
    UIElement user = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[6]/a");
    UIElement contentSitemap = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'content_sitemap_doc')]");//*[@id="client_development_website_development_content_sitemap_doc"]
    UIElement contentWebsite = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'_content_website_doc')]");//*[@id="client_development_website_development_content_website_doc"]
    UIElement suffContentWebsite = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'_11_correct_true')]");//*[@id="client_design_website_content_sitemap_doc"]
    UIElement suffContentSitemap = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'_12_correct_true')]");//*[@id="client_design_website_content_sitemap_doc"]
    UIElement refContentWebsite = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'_17_correct_true')]");//*[@id="client_design_website_content_sitemap_doc"]
    UIElement refContentSitemap = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[contains(@id,'_18_correct_true')]");//*[@id="client_design_website_content_sitemap_doc"]
    UIElement publishTask = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div/div[1]/div/div[2]/div/a");//*[@id="page-content-wrapper"]/div[2]/div/div/div[1]/div/div[2]/div/a
    UIElement contentRefTask = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[2]/div[2]/div/div/div/div/div[1]");//*[@id="page-content-wrapper"]/div[2]/div/div/div[1]/div/div[2]/div/a
    UIElement sitemapRefTask = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"new_client_development_mailer\"]/div[3]/div[2]/div/div/div/div/div[1]");//*[@id="page-content-wrapper"]/div[2]/div/div/div[1]/div/div[2]/div/a

    public void putClientName() {
        tDriver.myclient(client);
    }

    public void selectTaskSubType() {
        tDriver.mysubtype(subType);
    }

    public void enterUsp(String arg0) {
        tDriver.mytype(usp,arg0);
    }

    public void clickPlusSign() {
        tDriver.myclicking(uspPlus);
    }

    public void uploadSitemap() {
        tDriver.mytasktype(sitemapUpload);
    }

    public void uploadFunctionalRequirements() {
        tDriver.mytxtupload(funcUpload);
    }

    public void selectDesignGuidelines() {
        tDriver.myguide();
    }

    public void enterReferenceLink(String arg0) {
        tDriver.mytype(referenceLinks,arg0);
    }

    public void clickPlus() {
        tDriver.myclicking(refPlus);
    }

    public void selectCTA() { tDriver.mydesignCTA();
    }

    public void enterMinimumAge() {
        tDriver.mytasktype(minAge);
    }

    public void enterMaximumAge() {
        tDriver.mytasktype(maxAge);
    }

    public void selectGender() {
        tDriver.mygender(gender);
    }

    public void selectEduBackground() {
        tDriver.myedu(eduBackground);
    }

    public void enterMinimumHouseholdIncome(String arg0) {
        tDriver.mytype(minIncome,arg0);
    }

    public void putGeos(String arg0) {
        tDriver.mytype(geos,arg0);
    }

    public void putMicroGeos(String arg0) {
        tDriver.mytype(microGeos,arg0);
    }

    public void putTryingToReach(String arg0) {
        tDriver.mytype(trying,arg0);
    }

    public void selectTgToDo() {
        tDriver.mywait(tgToDo);
    }

    public void save() {
        tDriver.mytasktype(save);
    }

    public void clickOnDesign() {
        tDriver.myclicking(design);
    }

    public void slectTheActionDetails() {
        tDriver.myaction(actionDesign);
    }

    public void clickDesignBriefSidebar() {
        tDriver.mywait(briefDesign);
    }

    public void clickSaveAndPublishLaterButton() {
        tDriver.mytasktype(savePublish);
    }

    public void clickUpdateTask(){
        tDriver.mytasktype(updateTask);
    }

    public void clikOnUser() {
        tDriver.mywait(user);
    }

    public void clickSignOut() {
        tDriver.mywait(signOut);
    }

    public void uploadContentSitemapRefDoc() {
        tDriver.mytxtupload(contentSitemap);
    }

    public void uploadContentWebsiteRefDoc() {
        tDriver.mytxtupload(contentWebsite);
    }

    public void selectContentWebsiteSuffInfo() {
        tDriver.myclicking(suffContentWebsite);
    }

    public void selectContentSitemapSuffInfo() {
        tDriver.myclicking(suffContentSitemap);
    }

    public void selectContentWebsiteReferenceTaskSuffInfo() {
        tDriver.myclicking(refContentWebsite);
    }

    public void selectContentSitemapReferenceTaskSuffInfo() {
        tDriver.myclicking(refContentSitemap);
    }

    public void clickPublishThisTaskLink() {
        tDriver.mytasktype(publishTask);
    }

    public void selectTagsDesign() {
        tDriver.myTags();
    }

    public void selectWebsiteContentTaskRefDesignWebsite() {
        tDriver.myDesignWebsiteContentRefTask(contentRefTask);
    }

    public void selectSitemapContentTaskRefDesignWebsite() {
        tDriver.myDesignWebsiteSitemapRefTask(sitemapRefTask);

    }
}
