package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class EditAndReviewLinkPage extends BasePage {

    UIElement taskSide = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[4]/a");//*[contains(text(),'Tasks')]
    UIElement taskAccountManager = new UIElement(UIType.TextBox,UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[4]/a/i");//*[@id="sidebar-wrapper"]/ul/li[4]/a
    UIElement assigned = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/ul/li[1]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/ul/li[1]/a
    UIElement sort = new UIElement(UIType.Button, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div/div/div[2]/form/div/div[2]/div[1]/div/div[1]");
    UIElement apply = new UIElement(UIType.Button,UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[2]/form/div/div[1]/input");//*[@id="page-content-wrapper"]/div[2]/div/div[2]/form/div/div[1]/input
    UIElement review = new UIElement(UIType.TextBox, UILocatorType.Xpath,"");
    UIElement campaign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[2]");
    UIElement addEditLink = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[1]/div/div/ul/li[2]/a");
    UIElement taskAdmin = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[5]/a");

    public void clickOnTaskSidebar() {
        tDriver.myclicking(taskSide);
    }

    public void clickOnAssignedToMe() {
        tDriver.myclick(assigned);
    }

    public void selectNewest() {
        tDriver.mysort(sort);
    }

    public void clickOnApply() {
        tDriver.myclicking(apply);
    }

    public void clickReviewLink() {
        tDriver.myactionreview(review);
    }

    public void clickOnEdit() {
        tDriver.myedit();
    }

    public void clickOnCampaign() {
        tDriver.myclicking(campaign);
    }

    public void clickAddEditInputBrief() {
        tDriver.myclicking(addEditLink);
    }

    public void clickOnTaskFromSidePanel() {
        tDriver.myclicking(taskAccountManager);
    }

    public void clickOnTaskSidebarAdmin() {
        tDriver.myclicking(taskAdmin);
    }

    public void clickViewDetails() {
        tDriver.myViewDetails();
    }
}
