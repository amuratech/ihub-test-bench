package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class DepartmentTypesPage extends BasePage{

    UIElement enterClient = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"task-form-modal\"]/div/div/div[2]/div[1]/div/div[1]/input");
    UIElement paidMedia = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[7]/a");
    UIElement finance = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"taskLinks\"]/li[4]");
    UIElement content = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(),'Content')]");

    public void selectTheDepartmentWebDevelopment() {
        tDriver.mydeptwebdev();
    }

    public void selectTheDepartmentSocial() {
        tDriver.mydeptsocial();
    }

    public void selectTheDepartmentSeo() {
        tDriver.mydeptseo();
    }

    public void selectTheDepartmentDesign() {
        tDriver.mydeptdesign();
    }

    public void selectTheDepartmentContent() {
        tDriver.mydeptcontent();
    }

    public void selectTheDepartmentCampaign() {
        tDriver.mydeptcampaign();
    }


    public void selectTheDepartmentMarketing() {
        tDriver.mydeptmarketing();
    }

    public void selectTheDepartmentPaidMedia() {
        tDriver.mydeptpaidmedia();
    }

    public void clickPaidMedia() {
        tDriver.myclicking(paidMedia);
    }

    public void selectTheDepartmentFinance() {
        tDriver.mydeptfinance();
    }

    public void clickFinance() {
        tDriver.myclicking(finance);
    }

    public void selectTheDepartmentMeeting() {
        tDriver.mydeptmeeting();
    }

    public void clickContentTab() {
        tDriver.myclicking(content);
    }

    public void clickTab() {
        tDriver.mydepartment();
    }

    public void showTheTaskOverviewCounts() {
        tDriver.mycountdesign();
    }
}
