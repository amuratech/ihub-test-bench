package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 19/7/17.
 */
public class DevBriefPage extends BasePage {

    UIElement clickWebDev = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[10]");//*[@id="taskLinks"]/li[3]/a
    UIElement actionDetails = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[1]/div[1]/table/tbody/tr/td[4]/div/button/i");
    UIElement devBrief = new UIElement(UIType.Link,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/div/div[2]/div/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/div/div[2]/div/ul/li[1]/a
    UIElement name = new UIElement(UIType.TextBox, UILocatorType.Xpath,"//*[@id=\"client_development_website_development_name\"]");
    UIElement brief = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[2]/div/div[3]/div[2]");
    UIElement websiteType = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[3]/div/div[1]");
    UIElement cms = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[4]/div/div[1]");
    UIElement crm = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[5]/div/div[1]");
    UIElement func = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[6]/div/div[1]");
    //UIElement sitemap = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_development_website_development_site_map\"]");
    UIElement animation = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_development_website_development_animation_guideline\"]");
    UIElement form = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_development_website_development_customized_form\"]");
    UIElement content = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_development_website_development_content_document\"]");
    UIElement hosting = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[11]/div/div[1]");
    //UIElement desktopSlices= new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"client_development_website_development_desktop_slices_attributes_0_image_file\"]");
    UIElement savePublish = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"new_client_development_website_development\"]/div[26]/input[2]");

    public void enterTheName() {
        tDriver.mytasktype(name);
    }

    public void putBrief() {
        tDriver.mytasktype(brief);
    }

    public void enterName(String arg0) {
        tDriver.mytype(name,arg0);
    }

    public void putTheBrief(String arg0) {
        tDriver.mytype(brief,arg0);
    }

    public void selectWebsiteType() {
//        tDriver.mywebtype(websiteType);
    }

    public void selectCms() {
        //tDriver.mycmstype(cms);
    }

    public void selectCrmIntegration() {
       // tDriver.mycrm(crm);
    }

    public void selectFunctionalityRequirement() {
       // tDriver.myfunc(func);
    }

    public void uploadAnimation() {
        tDriver.myupload(animation);
    }

    public void uploadForm() {
        tDriver.myupload(form);
    }

    public void uploadContent() {
        tDriver.myupload(content);
    }

//    public void selectTheHostingType() {
//        tDriver.myhosting(hosting);
//    }

    public void clickSaveAndPublish() {
        tDriver.myclick(savePublish);
    }

    public void clickOnWebDevelopment() {
        tDriver.myclicking(clickWebDev);
    }

    public void clickOnActionDetails() {
        tDriver.myaction(actionDetails);
    }

    public void clickOnDevelopmentBrief() {
        tDriver.mytasktype(devBrief);
    }


}
