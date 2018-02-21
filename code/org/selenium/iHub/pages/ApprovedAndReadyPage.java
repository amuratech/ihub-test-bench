package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

/**
 * Created by amuraqa on 23/11/17.
 */
public class ApprovedAndReadyPage extends BasePage {
    UIElement brief = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as brief approved')]");
    UIElement plan = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as plan approved')]");
    UIElement raise = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Raise Invoice')]");
    UIElement communication = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as communication approved')]");
    UIElement design = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as design approved')]");
    UIElement client = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as client approved')]");
    UIElement live   = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(text(), 'Mark as ready to go live')]");
    UIElement money = new UIElement(UIType.Link, UILocatorType.Xpath, "//*[contains(text(),'Money Received')]");
    UIElement viewProject = new UIElement(UIType.Link, UILocatorType.Xpath, "//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[1]/div/div[4]/div/div/ul/li[2]/a");

    public void clickMarkAsBriefApproved() {
        tDriver.myclicking(brief);
    }

    public void clickMarkAsPlanApproved() {
        tDriver.myclicking(plan);
    }

    public void clickMarkInvoiceRaised() {
        tDriver.mytasktype(raise);
    }

    public void clickMoneyReceivedLink() {
        tDriver.myclicking(money);
    }

    public void clickMarkAsCommunicationApproved() {
        tDriver.myclicking(communication);
    }

    public void clickMarkAsDesignApproved() {
        tDriver.myclicking(design);
    }

    public void clickMarkAsClientApproved() {
        tDriver.myclicking(client);
    }

    public void clickMarkAsReadyToGoLive() {
        tDriver.myclicking(live);
    }

    public void clickViewProjectLink() {
        tDriver.myclicking(viewProject);
    }
}
