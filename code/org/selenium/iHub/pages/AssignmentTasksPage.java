package org.selenium.iHub.pages;

import org.selenium.iHub.utitlities.UIElement;
import org.selenium.iHub.utitlities.UILocatorType;
import org.selenium.iHub.utitlities.UIType;

public class AssignmentTasksPage extends BasePage {

    UIElement edit = new UIElement(UIType.Link, UILocatorType.Xpath,"/html/body/nav/div[2]/ul/li[1]/a");
    UIElement saveNewCampaign = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_campaign_assignment')]/div[12]/input");
    UIElement viewAllTasks = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_campaign_assignment')]/div[12]/input");
    UIElement projects = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"sidebar-wrapper\"]/ul/li[4]/a/i");
    UIElement saveBriefApproved = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[contains(@id,'edit_client_campaign_assignment')]/div[12]/input");//*[@id="edit_client_campaign_assignment_59ae6dd55461f410f947a1a3"]/div[12]/input
    UIElement viewAllTasksBriefApproved = new UIElement(UIType.Link, UILocatorType.Xpath,"//*[@id=\"page-content-wrapper\"]/div[2]/div/div[1]/div[6]/a");//*[@id="page-content-wrapper"]/div[2]/div/div[1]/div[5]/a

    public void gotoEditLink() {
        tDriver.myclicking(edit);
    }

    public void changeTheStageToInitiate() {
        tDriver.mystageinitiate();
    }

    public void clickSaveButtonNewCampaign() {
        tDriver.myclicking(saveNewCampaign);
    }

    public void clickOnViewAllTasksOfThisCampaignLink() {
        tDriver.myclicking(viewAllTasks);
    }

    public void selectEditInitialCampaign() {
        tDriver.myinitialcampaignedit();
    }

    public void clickOnProjectsTab() {
        tDriver.myclicking(projects);
    }

    public void clickSaveButtonBriefApproved() {
        tDriver.myclicking(saveBriefApproved);
    }

    public void changeTheStageToBriefApproved() {
        tDriver.mystagebriefapproved();
    }

    public void clickOnViewAllTasksOfThisCampaignLinkBriefApproved() {
        tDriver.myclicking(viewAllTasksBriefApproved);
    }

    public void selectEditLinkMediaPlan() {
        tDriver.mymediaplanedit();
    }

    public void checkTheContentBandwidth() {
        tDriver.myBandwidth();

    }
}
